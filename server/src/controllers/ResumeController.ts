
import type { Request, Response, NextFunction } from "express";
import ResumeModel from "../models/Resume";
import { IResumeController } from "../types/resumeTypes";

export default class ResumeController implements IResumeController{

  async getMyResume(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.sub;

      const resume = await ResumeModel.findOne({ userId });

      res.json({
        status: true,
        data: resume,
      });

    } catch (err) {
      next(err);
    }
  }

  async saveResume(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.sub;

      const data = req.body;

      const resume = await ResumeModel.findOneAndUpdate(
        { userId },
        { ...data, userId },
        { new: true, upsert: true }
      );

      res.json({
        status: true,
        message: "Resume saved",
        data: resume,
      });

    } catch (err) {
      next(err);
    }
  }
}