import { Router } from "express";
import { homepagePage, nodePage } from "../util/readPages.js"
const router = Router();

router.get("/", (req, res) => {
  res.send(homepagePage);
});

router.get("/node", (req, res) => {
  res.send(nodePage);
})

export default router;