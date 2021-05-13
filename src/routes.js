import { Router } from "express";

// eslint-disable-next-line linebreak-style
const routes = new Router();

routes.get("/", (req, res) => res.json({ message: "olá gente!" }));

export default routes;
