import { useEffect, useState } from "react";

export default function ResumeTransformPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const inputs = [
    "Added Skill: React.js",
    "Added Experience: Frontend Developer",
    "Added Experience:  Backend Developer",
    "Added Project: Resume Builder App",
    "Added Skill: Node.js",
    "Added Skill: Express",
  ];

  return (
    <div className="hidden md:flex justify-center">
    <div className="relative w-full max-w-md group">

      <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-indigo-400 to-purple-400 blur-3xl opacity-25 rounded-full group-hover:opacity-40 transition"></div>
      <div className="relative bg-red/80 backdrop-blur-xl border border-blue-200 shadow-2xl rounded-2xl p-6 space-y-5 transition group-hover:-translate-y-1">

        <div className="space-y-2">

          <div className="text-xs text-gray-500 flex justify-between">
            <span>Live Input</span>
            <span className="text-blue-500 animate-pulse">Updating...</span>
          </div>

          <div className="h-10 flex items-center px-3 rounded-lg bg-blue-50 border border-blue-100 overflow-hidden">
            <div key={step} className="text-sm font-medium text-blue-600 transition">
              {inputs[step]}
            </div>
          </div>
        </div>

        
        <div className="flex justify-center text-blue-500 animate-bounce">
          ↓↓↓
        </div>

        {/*RESUME */}
        <div className="relative h-80 rounded-xl border border-gray-200 bg-white ">

        {/* HEADER */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-white border-b flex items-center px-4 z-10">

            <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500">
            Resume
            </div>
            <div className="flex gap-1">
            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>
        </div>

        {/* RESUME CONTENT */}
        <div className="absolute inset-0 pt-14 px-4 space-y-3 bg-linear-to-b from-gray-50 to-gray-100 text-[11px]">

            <div className="text-sm font-bold text-gray-800">
            John Doe
            </div>

            {/* SKILLS */}
            <div>
            <div className="text-gray-500 font-medium">Skills</div>
            <div className="flex gap-2 flex-wrap mt-1">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                React.js
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                Node.js
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                Express
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
                MongoDb
                </span>
            </div>
            </div>

            {/* EXPERIENCE */}
            <div>
            <div className="text-gray-500 font-medium">Experience</div>
            <div className="text-gray-700">
                Frontend Developer @ Tech Company
            </div>
            <div className="text-gray-700">
                Full Stack Developer @ Backend devps
            </div>
            </div>

            {/* PROJECT */}
            <div>
            <div className="text-gray-500 font-medium">Projects</div>
            <div className="text-gray-700">
                Resume Builder Web App
            </div>
            <div className="text-gray-700">
                Expense Tracker
            </div>
            <div className="text-gray-700">
                Fitness Assistant
            </div>
            </div>

        </div>
        </div>

      </div>
    </div>
    </div>
  );
}