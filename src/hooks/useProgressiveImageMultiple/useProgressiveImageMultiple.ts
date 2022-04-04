import { Storage } from 'aws-amplify';
import { useEffect, useState } from 'react';

export const useProgressiveImageMultiple = (path: string) => {
  const [imageSources, setImageSources] = useState<string[] | null>(null);
  const [isImagesLoading, setIsImagesLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const imagePaths = (await Storage.list(path)).slice(1);
      const gettingImagePromises = imagePaths.map(({ key }) => Storage.get(key!));
      const newImageSources = await Promise.all(gettingImagePromises);
      const loadingImagePromises = newImageSources.map((src) => {
        const img = new Image();
        img.src = src;
        return new Promise((r) => (img.onload = r));
      });
      await Promise.all(loadingImagePromises);
      setImageSources(newImageSources.length ? newImageSources : null);
      setIsImagesLoading(false);
    })();
  }, [path]);

  return [imageSources, isImagesLoading];
};
