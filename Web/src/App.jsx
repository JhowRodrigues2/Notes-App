import { useState, useEffect } from "react";
import "./App.css";
import Notes from "./Components/Notes";
import RadioButton from "./Components/RadioButton";
import api from "./services/api";
function App() {
  const [title, setTitles] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get("/annotations");
      setAllNotes(response.data);
    }
    getAllNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });
    setTitles("");
    setNotes("");

    setAllNotes([...allNotes, response.data]);
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
              Título da Anotação
            </label>
            <input
              required
              maxLength={33}
              value={title}
              onChange={(e) => setTitles(e.target.value)}
              type="text"
              className="w-full h-8 text-sm text-[#666] border-b border-[#eee] mt-5"
            />
          </div>
          <div className="">
            <label
              htmlFor="nota"
              className="text-[#acacac] text-sm font-bold block"
            >
              Anotações
            </label>
            <textarea
              className="mt-2 w-full h-52 resize-none"
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
        <RadioButton />
      </aside>
      <main className="flex ml-6 w-full ">
        <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 list-none w-full">
          {allNotes.map((data) => (
            <Notes data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
