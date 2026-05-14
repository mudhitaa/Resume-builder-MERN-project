
import { Router, type Router as RouterType } from "express";
import AuthController from "../controllers/AuthController";
import type { IAuthController } from "../types/authType";


const authRouter: RouterType = Router();
const authCtrl: IAuthController = new AuthController();



authRouter.post("/login", authCtrl.userLogin);
authRouter.post("/register", authCtrl.userRegister);





export default authRouter;