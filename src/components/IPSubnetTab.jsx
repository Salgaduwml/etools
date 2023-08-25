"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LiaDropbox, LiaGoogleDrive } from "react-icons/lia";
import { AiOutlineCloudDownload } from "react-icons/ai";

const IPSubnetTab = () => {
  const [tab, setTab] = useState(1);
  // Single Entry
  const [ipAddress, setIpAddress] = useState("");
  const [subnet, setSubnet] = useState("");
  const [ipVersion, setIpVersion] = useState("ipv4");
  // Multile Entry
  const [file, setFile] = useState(null);
  // Result
  const [result, setResult] = useState(null);

  const handleSingleEntry = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://${base}:${port}/calc_ip_address`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ipAddress, subnet, ipVersion }),
      });
      if (res.ok) {
        setResult(res.json());
      } else {
        throw new Error("Failed to get a response from form submission.");
      }
    } catch (error) {
      console.log(error);
    }
    setIpAddress("");
    setSubnet("");
    setIpVersion("ipv4");
  };

  const handleMultipleEntry = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch(
        `http://${base}:${port}/calc_batch_csv_ip_address`,
        {
          method: "POST",
          headers: {
            "Content-type": "multipart/form-data",
          },
          body: formData,
        }
      );
      if (res.ok) {
        setResult(res.json());
      } else {
        throw new Error("Failed to get a response from form submission.");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <form className="w-full" onSubmit={handleSingleEntry}>
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
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
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
                  value={subnet}
                  onChange={(e) => setSubnet(e.target.value)}
                  required
                />
              </div>
              <fieldset>
                <legend className="block mb-2 text-sm font-medium text-gray-900">
                  IP Version
                </legend>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="ipv4"
                      name="IPVersion"
                      value="ipv4"
                      onChange={(e) => setIpVersion(e.target.value)}
                      checked={ipVersion === "ipv4"}
                    />
                    <label
                      htmlFor="ipv4"
                      className="text-sm font-medium text-gray-900"
                    >
                      ipv4
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="ipv6"
                      name="IPVersion"
                      value="ipv6"
                      onChange={(e) => setIpVersion(e.target.value)}
                      checked={ipVersion === "ipv6"}
                    />
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
        {tab === 2 && (
          <div className="w-full md:w-1/2">
            <form action="" onSubmit={handleMultipleEntry}>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="file_input"
              >
                Upload .csv file
              </label>
              <input
                className="block w-full file:mr-3 file:bg-black file:text-white file:p-2 file:border-0 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
              <div className="flex items-center gap-6 mt-6">
                <span>Or</span>
                <Link href={"/"} className="flex gap-2 text-sm text-gray-600">
                  <LiaDropbox size={20} />
                  from DropBox
                </Link>
                <Link href={"/"} className="flex gap-2 text-sm text-gray-600">
                  <LiaGoogleDrive size={20} />
                  from Google Drive
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <button
                  type="submit"
                  className="bg-brand-dark-400 text-white py-2 px-6 rounded-md"
                >
                  Calculate
                </button>
                <button
                  type="button"
                  className="border border-brand-dark-400 text-brand-dark-400 py-2 px-6 rounded-md"
                >
                  Preview
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 font-semibold text-brand-dark-400 rounded-md"
                >
                  <AiOutlineCloudDownload size={20} />
                  Download
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default IPSubnetTab;
