
import { Router, type Router as RouterType } from "express";
import AuthController from "../controllers/AuthController";
import type { IAuthController } from "../types/authType";
import { bodyValidator } from "../middleware/Validator";
import { ChangePasswordSchema, UpdateProfileSchema, UserLoginSchema, UserRegisterSchema } from "../validationSchema/AuthSchema";
import multerUploader from "../middleware/multerMiddleware";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { authLimiter } from "../server";

const authRouter: RouterType = Router();
const authCtrl: IAuthController = new AuthController();



authRouter.post("/login", bodyValidator(UserLoginSchema), authCtrl.userLogin);
authRouter.post("/register",authLimiter,multerUploader.none(),bodyValidator(UserRegisterSchema), authCtrl.userRegister);
authRouter.get("/me", authMiddleware, authCtrl.getLoggedInUserProfile);
authRouter.put("/me", authMiddleware,bodyValidator(UpdateProfileSchema), authCtrl.updateProfile);
authRouter.put("/change-password", authMiddleware,bodyValidator(ChangePasswordSchema), authCtrl.changePassword);
authRouter.delete("/me", authMiddleware, authCtrl.deleteProfile);





export default authRouter;