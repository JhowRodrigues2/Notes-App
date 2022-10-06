import React from "react";
import { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import api from "../../services/api";

export default function Notes({ data, handleDelete, handleChangePriority }) {
  const [changedNote, setChangedNote] = useState("");

  function handleEdit(e, priority) {
    e.style.cursor = "text";
    e.style.borderRadius = "5px";
    if (priority) {
      e.style.boxShadow = "0 0 5px white";
    } else {
      e.style.boxShadow = "0 0 5px gray";
    }
  }

  async function handleSave(e, notes) {
    e.style.cursor = "default";
    e.style.boxShadow = "none";

    if (changedNote && changedNote != notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changedNote,
      });
    }
  }

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
                : "flex justify-between cursor-pointer text-[#ccbdba] hover:text-[#eb8f7a] hover:transition duration-[0.2s]"
            }
          >
            <AiTwotoneDelete
              className="text-xl"
              onClick={() => handleDelete(data._id)}
            />
          </div>
        </div>
        <textarea
          className={
            data.priority
              ? "bg-[#eb8f7a] text-white p-2 mt-2 mb-2 w-full h-32 text-sm border-0 resize-none cursor-default focus:outline-none"
              : "p-2 mt-2 mb-2 w-full h-32 text-sm text-[#666] border-0 bg-white resize-none cursor-default focus:outline-none"
          }
          defaultValue={data.notes}
          onClick={(e) => handleEdit(e.target, data.priority)}
          onChange={(e) => setChangedNote(e.target.value)}
          onBlur={(e) => handleSave(e.target, data.notes)}
        />
        <span
          className={
            data.priority
              ? "cursor-pointer text-[#fabbad] hover:text-white hover:transition duration-[0.2s]"
              : "cursor-pointer text-[#c4c4c4] hover:text-[#eb8f7a] hover:transition duration-[0.2s]"
          }
        >
          <AiOutlineExclamationCircle
            className="text-xl"
            onClick={() => handleChangePriority(data._id)}
          />
        </span>
      </li>
    </>
  );
}
