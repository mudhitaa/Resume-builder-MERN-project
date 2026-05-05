import { Heading1 } from "../typography/Heading";
import logo from "../../assets/images/logo.jpg";

export const FirstHeader = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* LEFT SIDE (LOGO + TITLE) */}
        <div className="flex items-center gap-3">
          
          <img
            src={logo}
            alt="EasyResume Logo"
            className="h-14 w-14 rounded-full object-cover"
          />

          <Heading1
            pagetitle="EasyResume"
            className="text-blue-900"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-4">
          <a className="block rounded-md bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-blue-900" href="#">
            Login
          </a>

          <a className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-900 transition hover:bg-gray-300 sm:block hover:text-blue-900" href="#">
            Register
          </a>

          <button className="block md:hidden p-2 bg-gray-100 rounded-sm">
            ☰
          </button>
        </div>

      </div>
    </header>
  );
};