import Image from "next/image";

import { tools } from "@/Tools";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-brand-dark-300">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-start justify-start md:justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Image
            width={180}
            height={50}
            src={"/etools-logo.png"}
            alt="etools logo"
          />
          <p className="max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis ipsum sunt maxime voluptatibus dignissimos.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-medium">Tools</h4>
          <div className="flex flex-col gap-2 items-start justify-start">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.url}>
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-medium">Sign up here</h4>
          <div className="flex gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
                placeholder="john@gmail.com"
              />
            </div>
            <button className="text-white bg-light-blue-400 hover:bg-light-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="bg-brand-dark-500">
        <div className="max-w-7xl p-4 mx-auto text-sm">
          <p>© 2023 ToolsBuddy. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
