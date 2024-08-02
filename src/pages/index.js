import { useRouter } from "next/router";
import { useState } from "react";
import { IconGithub } from "../icons/iconGithub";
import { useInformation } from "../hooks/useInformation";

export default function Home() {
  const { push } = useRouter();
  const { handleSubmit, inputData, setInputData } = useInformation();

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#0d1117] text-[#8d96a0]">
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center"
      >
        <div className="flex min-h-screen min-w-full justify-center items-center">
          <div className="w-[500px] relative">
            <input
              className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-[#8d96a0] focus:border-[#4493f8] focus:fill-[#4493f8]"
              type="text"
              value={inputData}
              onChange={handleChange}
              placeholder=""
            />
            <label
              className="absolute text-[#8d96a0] text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-11 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#4493f8]"
              for="username"
            >
              Name
            </label>
            <div className="absolute top-[20px] left-[10px]">
              <IconGithub />
            </div>
            <label className="pt-1 block text-[#8d96a0] text-sm">
              {" "}
              Enter the name you want to search{" "}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
