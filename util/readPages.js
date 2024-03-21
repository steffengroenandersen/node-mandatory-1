import { readPage, renderPage } from "./templateEngine.js"

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);

const node = readPage("./public/pages/node/node.html");
const nodeConfig = {tabTitle: "NodeJS"}
export const nodePage = renderPage(node, nodeConfig); 

const express = readPage("./public/pages/express/express.html");
const expressConfig = {tabTitle: "ExpressJS"}
export const expressPage = renderPage(express, expressConfig);

const javascript = readPage("./public/pages/javascript/javascript.html");
const javascriptConfig = {tabTitle: "JavaScript"}
export const javascriptPage = renderPage(javascript, javascriptConfig);

const rest = readPage("./public/pages/rest/rest.html");
const restConfig = {tabTitle: "REST"}
export const restPage = renderPage(rest, restConfig);

const tools = readPage("./public/pages/tools/tools.html");
const toolsConfig = {tabTitle: "Tools"}
export const toolsPage = renderPage(tools, toolsConfig);