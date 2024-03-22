import { Router } from "express";
import {
  homepagePage,
  nodePage,
  expressPage,
  javascriptPage,
  restPage,
  toolsPage,
} from "../util/readPages.js";
const router = Router();

router.get("/", (req, res) => {
  res.send(homepagePage);
});

router.get("/node", (req, res) => {
  res.send(nodePage);
});

router.get("/express", (req, res) => {
  res.send(expressPage);
});

router.get("/javascript", (req, res) => {
  res.send(javascriptPage);
});

router.get("/rest", (req, res) => {
  res.send(restPage);
});

router.get("/tools", (req, res) => {
  res.send(toolsPage);
});

export default router;
