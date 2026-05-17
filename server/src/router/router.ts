import { Router } from "express";
import authRouter from "./auth.router";
import resumeRouter from "./resume.router";

const router:Router= Router()


router.use("/auth", authRouter);
router.use("/resume-builder", resumeRouter);

export default router
