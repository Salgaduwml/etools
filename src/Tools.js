import { BiMath } from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import { MdArchitecture } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineCodeSandbox } from "react-icons/ai";

export const tools = [
  {
    name: "Math",
    url: "/math",
    icon: <BiMath size={18} />,
  },
  {
    name: "Financial",
    url: "/financial",
    icon: <IoAnalytics size={20} />,
  },
  {
    name: "Engineering",
    url: "/engineering",
    icon: <MdArchitecture size={20} />,
  },
  {
    name: "Scientific",
    url: "/scientific",
    icon: <MdOutlineScience size={20} />,
  },
  {
    name: "Health",
    url: "/health",
    icon: <MdOutlineHealthAndSafety size={20} />,
  },
  {
    name: "AI",
    url: "/IPSubnetCalculator",
    icon: <AiOutlineCodeSandbox size={20} />,
  },
];
