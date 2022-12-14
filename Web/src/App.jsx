import { useState, useEffect } from "react";
import "./App.css";
import Notes from "./Components/Notes";
import RadioButton from "./Components/RadioButton";
import api from "./services/api";
function App() {
  const [title, setTitles] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");

  useEffect(() => {
    getAllNotes();
  }, []);

  async function getAllNotes() {
    const response = await api.get("/annotations");
    setAllNotes(response.data);
  }

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get("/priorities", { params });

    if (response) {
      setAllNotes(response.data);
    }
  }

  function handleChange(e) {
    setSelectedValue(e.value);
    if (e.checked && e.value != "all") {
      loadNotes(e.value);
    } else {
      getAllNotes();
    }
  }

  async function handleDelete(id) {
    const deleteNote = await api.delete(`/annotations/${id}`);

    if (deleteNote) {
      setAllNotes(allNotes.filter((note) => note._id != id));
    }
  }

  async function handleChangePriority(id) {
    const note = await api.post(`/priorities/${id}`);

    if (note && selectedValue != "all") {
      loadNotes(selectedValue);
    } else if (note) {
      getAllNotes();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });
    setTitles("");
    setNotes("");

    if (selectedValue != "all") {
      getAllNotes();
    } else {
      setAllNotes([...allNotes, response.data]);
    }
  }

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit");
      btn.style.background = "#FFD3CA";
      if (title && notes) {
        btn.style.background = "#EB8F7A";
      }
    }
    enableSubmitButton();
  }, [title, notes]);

  return (
    <div className="min-h-screen w-full bg-[#e4e7ef] min-w-7xl lg:flex items-start py-12 flex-row px-24  lg:px-7">
      <aside className="min-w-[400px] mb-8 bg-white  shadow-md rounded-lg py-8 px-5 ">
        <strong className="text-lg text-center block">Caderno de Notas</strong>
        <form action="" className="mt-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="tittle"
              className="text-[#acacac] text-sm font-bold block"
            >
              T??tulo da Anota????o
            </label>
            <input
              required
              maxLength={33}
              value={title}
              onChange={(e) => setTitles(e.target.value)}
              type="text"
              className="w-full h-8 text-sm text-[#666] border-b border-[#acacac] mt-5 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="nota"
              className="text-[#acacac] text-sm font-bold block"
            >
              Anota????es
            </label>
            <textarea
              className="mt-2 w-full h-52 resize-none border border-[#acacac] focus:outline-none p-1"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            id="btn_submit"
            type="submit"
            className="w-full border-none mt-8 bg-[#FFD3CA] rounded-lg py-4 px-5 text-white cursor-pointer"
          >
            Salvar
          </button>
        </form>

        <RadioButton
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </aside>
      <main className="flex ml-6 w-full ">
        <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 list-none w-full">
          {allNotes.map((data) => (
            <Notes
              key={data._id}
              data={data}
              handleDelete={handleDelete}
              handleChangePriority={handleChangePriority}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
