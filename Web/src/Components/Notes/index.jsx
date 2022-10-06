import React from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

export default function Notes({ data }) {
  return (
    <>
      <li
        className={
          data.priority
            ? "bg-[#eb8f7a] shadow-md rounded-lg py-20 pl-[10px] pr-5 "
            : "bg-white shadow-md rounded-lg py-20 pl-[10px] pr-5 "
        }
      >
        <div className="flex justify-between">
          <strong
            className={
              data.priority
                ? "text-white block text-base"
                : "block text-base text-[#333]"
            }
          >
            {data.title}
          </strong>
          <div
            className={
              data.priority
                ? "text-[#fabbad] hover:text-white flex justify-between cursor-pointer hover:transition duration-[0.2s]"
                : "flex justify-between cursor-pointer text-[#ffeae6] hover:text-[#eb8f7a] hover:transition duration-[0.2s]"
            }
          >
            <AiTwotoneDelete className="text-xl" />
          </div>
        </div>
        <textarea
          className={
            data.priority
              ? "bg-[#eb8f7a] text-white p-2 mt-2 mb-2 w-full h-32 text-sm border-0 resize-none"
              : "p-2 mt-2 mb-2 w-full h-32 text-sm text-[#666] border-0 bg-white resize-none"
          }
          defaultValue={data.notes}
        ></textarea>
        <span
          className={
            data.priority
              ? "cursor-pointer text-[#fabbad] hover:text-white hover:transition duration-[0.2s]"
              : "cursor-pointer text-[#c4c4c4] hover:text-[#eb8f7a] hover:transition duration-[0.2s]"
          }
        >
          <AiOutlineExclamationCircle className="text-xl" />
        </span>
      </li>
    </>
  );
}
