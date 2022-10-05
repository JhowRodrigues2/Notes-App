import React from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

export default function Notes({ data }) {
  return (
    <>
      <li className="bg-white shadow-md rounded-lg py-20 pl-[10px] pr-5 ">
        <div className="flex justify-between">
          <strong className="block text-base text-[#333]">{data.title}</strong>
          <div className="flex justify-between cursor-pointer text-[#ffeae6] hover:text-[#eb8f7a] hover:transition duration-[0.2s]">
            <AiTwotoneDelete className="text-xl" />
          </div>
        </div>
        <textarea
          className="p-2 mt-2 mb-2 w-full h-32 text-sm text-[#666] border-0 bg-white resize-none"
          defaultValue={data.notes}
        ></textarea>
        <span className="cursor-pointer text-[#c4c4c4] hover:text-[#eb8f7a] hover:transition duration-[0.2s]">
          <AiOutlineExclamationCircle className="text-xl" />
        </span>
      </li>
    </>
  );
}
