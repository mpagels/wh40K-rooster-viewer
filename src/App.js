import { useState, useEffect } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import "./battlescripe.css";
import "./BackButton.css";
import DisplayUnit from "./components/DisplayUnit";

export default function App() {
  const [file, setFile] = useState({ selection: [] });

  useEffect(() => {
    fetch(`/api/rooster`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.result[0]?.selection) {
          setFile({ selection: data.result[0].selection });
        }
      });
  }, []);

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
