import { Router, type Router as RouterType } from "express";
import ResumeController from "../controllers/ResumeController";
import { authMiddleware } from "../middleware/AuthMiddleware";

const resumeRouter: RouterType = Router();
const resumeCtrl = new ResumeController();

resumeRouter.get("/me",authMiddleware, resumeCtrl.getMyResume);
resumeRouter.post("/save",authMiddleware,resumeCtrl.saveResume);


export default resumeRouter;