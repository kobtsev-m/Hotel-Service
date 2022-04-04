import { Storage } from 'aws-amplify';
import { useEffect, useState } from 'react';

export const useProgressiveImage = (path: string) => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const newImageSource = await Storage.get(path);
      const img = new Image();
      img.src = newImageSource;
      await new Promise((r) => (img.onload = r));
      setImageSource(newImageSource);
      setIsImageLoading(false);
    })();
  }, [path]);

  return [imageSource, isImageLoading];
};
