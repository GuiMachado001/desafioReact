import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { ClientController } from "../controllers/ClientController";
import { authMiddleware } from "../middlewares/authMiddleware";

const routes = Router();

routes.post("/login", AuthController.login);


routes.post("/clients", authMiddleware, ClientController.create);
routes.get("/clients", authMiddleware, ClientController.getAll);
routes.put("/clients/:id", authMiddleware, ClientController.update);

routes.delete("/clients/:id", authMiddleware, ClientController.delete);
export default routes;