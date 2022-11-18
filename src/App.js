import { useState, useEffect } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import "./battlescripe.css";
import "./BackButton.css";
import DisplayUnit from "./components/DisplayUnit";

function getRoosterFromLS() {
  return JSON.parse(localStorage.getItem("rooster"));
}

export default function App() {
  const [file, setFile] = useState(getRoosterFromLS() || { selection: [] });

  console.log(file);
  useEffect(() => {
    localStorage.setItem("rooster", JSON.stringify(file));
  }, [file]);

  function deleteSelection(id) {
    const toUpdate = [...file.selection];
    const updatedFile = toUpdate.filter((selection) => selection.id !== id);
    setFile({ selection: updatedFile });
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="addRooster"
          element={
            <Add
              file={file}
              setFile={setFile}
              deleteSelection={deleteSelection}
            />
          }
        />
        <Route
          path="unit/:id"
          element={<DisplayUnit units={file.selection} />}
        />
        <Route index element={<Home selections={file.selection} />} />
      </Routes>
    </div>
  );
}
