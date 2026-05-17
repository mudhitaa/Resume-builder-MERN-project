import { z } from "zod";

export const ResumeSchema = z.object({
  fullname: z.string(),
  email: z.email(),
  phone: z.string(),
  address: z.string(),
  linkedin: z.string(),
  github: z.string().optional(),

  summary: z.string(),

  skills: z.array(z.string()),

  education: z.array(
    z.object({
      id: z.string(),
      school: z.string(),
      degree: z.string(),
      startYear: z.string(),
      endYear: z.string(),
    })
  ),

  experience: z.array(
    z.object({
      id: z.string(),
      company: z.string(),
      position: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      description: z.string(),
    })
  ),

  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      githubLink: z.string().optional(),
    })
  ),

  certifications: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      issuer: z.string(),
      date: z.string(),
      description: z.string(),
      credentialId: z.string(),
      credentialUrl: z.string(),
    })
  ),

  template: z.string(),
  font: z.string(),
  accentColor: z.string(),
});