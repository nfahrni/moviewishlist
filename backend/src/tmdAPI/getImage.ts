import { Router, Request, Response } from "express";
import request from "request";

export default Router().get("/image", async (req: Request, res: Response) => {
  res.set("Content-Type", "image/jpeg");
  res.send(await requestApi(req.query.image as string));
});

const requestApi = async (image: string): Promise<any> => {
  return new Promise((resolve) => {
    const options = {
      method: "GET",
      url: `https://image.tmdb.org/t/p/w200${image}`,
      encoding: null,
    };

    request(options, (error, response) => {
      if (error) throw new Error(error);
      resolve(response.body);
    });
  });
};
