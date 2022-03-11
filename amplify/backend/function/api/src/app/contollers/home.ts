import { Request, Response } from 'express';

interface GetRequestData {
  bro: string;
}

interface GetResponseData {
  hello: string;
}

export class HomeController {
  async get(req: Request<{}, {}, GetRequestData>, res: Response<GetResponseData>) {
    res.json({ hello: '1' });
  }
}
