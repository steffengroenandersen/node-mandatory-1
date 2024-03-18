import { readPage, renderPage } from "./templateEngine.js"

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);

const node = readPage("./public/pages/node/node.html");
export const nodePage = renderPage(node); 