import { Router, Request, Response } from "express";
import getGenres from "./getGenres";
import getImage from "./getImage";
import searchMovie from "./searchMovie";

export default Router()
  .get("/search", searchMovie)
  .get("/image", getImage)
  .get("/genres", getGenres);
