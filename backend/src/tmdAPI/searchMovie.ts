import { Router, Request, Response } from "express";
import TmdResponse from "./TmdResponse";
import request from "request";

const API_KEY = "fcb4c5477f585ca9d2d8f07d6692c24d";

export default Router().get("/search", async (req: Request, res: Response) => {
  res.send(await requestApi(req.query.term as string));
});

const requestApi = async (search: string): Promise<TmdResponse> => {
  return new Promise((resolve) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      qs: {
        api_key: API_KEY,
        query: search,
      },
    };

    request(options, (error, response) => {
      if (error) throw new Error(error);
      resolve(JSON.parse(response.body) as TmdResponse);
    });
  });
};
