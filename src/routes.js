import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Bruna Lima",
    email: "calheiros.bruna@gmail.com",
    password_hash: "356467",
  });

  return res.json(user);
});

export default routes;
