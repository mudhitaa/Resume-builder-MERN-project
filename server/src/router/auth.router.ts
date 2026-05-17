
import { Router, type Router as RouterType } from "express";
import AuthController from "../controllers/AuthController";
import type { IAuthController } from "../types/authType";
import { bodyValidator } from "../middleware/Validator";
import { UserRegisterSchema } from "../validationSchema/AuthSchema";
import multerUploader from "../middleware/multerMiddleware";



const authRouter: RouterType = Router();
const authCtrl: IAuthController = new AuthController();



authRouter.post("/login", authCtrl.userLogin);
authRouter.post("/register",multerUploader.none(),bodyValidator(UserRegisterSchema), authCtrl.userRegister);





export default authRouter;