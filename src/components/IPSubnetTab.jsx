"use client";
import React, { useState } from "react";

const IPSubnetTab = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="mt-6">
      <div className="flex items-center gap-6">
        <button
          className={`py-2 ${
            tab === 1 && "border-b-[3px] border-light-blue-400"
          }`}
          onClick={() => setTab(1)}
        >
          Single Entry
        </button>
        <button
          className={`py-2 ${
            tab === 2 && "border-b-[3px] border-light-blue-400"
          }`}
          onClick={() => setTab(2)}
        >
          Multiple Entry
        </button>
      </div>
      <div className="mt-10">
        {tab === 1 && (
          <div className="flex flex-col md:flex-row gap-12">
            <form className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="ipAddress"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  IP Address
                </label>
                <input
                  type="text"
                  id="ipAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ex: 27.78.101.132"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="subnet"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subnet
                </label>
                <input
                  type="text"
                  id="subnet"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ex: 255.255.255.255/32"
                  required
                />
              </div>
              <fieldset>
                <legend className="block mb-2 text-sm font-medium text-gray-900">
                  IP Version
                </legend>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="ipv4" name="IPVersion" />
                    <label
                      htmlFor="ipv4"
                      className="text-sm font-medium text-gray-900"
                    >
                      ipv4
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="ipv6" name="IPVersion" />
                    <label
                      htmlFor="ipv6"
                      className="text-sm font-medium text-gray-900"
                    >
                      ipv6
                    </label>
                  </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="bg-brand-dark-400 text-white py-2 px-6 rounded-md mt-6"
              >
                Find
              </button>
            </form>
            <div className="w-full flex flex-col items-end">
              <p className="text-sm font-medium text-gray-900 mb-2 self-start">
                Result
              </p>
              <div className="w-full h-[150px] md:h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-4"></div>
              <button
                type="button"
                className="flex gap-1 mt-4 text-gray-500 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 focus:outline-none"
              >
                <svg
                  className="w-4 h-4 mx-auto mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                  <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
                </svg>
                <span className="block mb-px text-xs font-medium">Copy</span>
              </button>
            </div>
          </div>
        )}
        {tab === 2 && <div>Tab 2</div>}
      </div>
    </div>
  );
};

export default IPSubnetTab;
