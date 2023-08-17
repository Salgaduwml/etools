import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const MobileNav = ({ tools }) => {
  return (
    <div className="bg-brand-dark-400 p-4 h-full absolute w-full text-white flex flex-col gap-4 justify-start">
      <div>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-light-blue-400 hover:bg-light-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-7xl flex flex-col gap-10">
        {tools.map((tool, i) => (
          <Link
            href={tool.url}
            key={i}
            className="flex items-center gap-3 hover:text-light-blue-400 active:text-light-blue-400"
          >
            {tool.icon}
            {tool.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
