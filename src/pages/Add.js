import { memo } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Selection({ selection, index, deleteSelection }) {
  return (
    <Draggable draggableId={selection.id} index={index}>
      {(provided) => (
        <SelectItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {selection.content}
          <button type="button" onClick={() => deleteSelection(selection.id)}>
            delete
          </button>
        </SelectItem>
      )}
    </Draggable>
  );
}

const SelectList = memo(function SelectList({ selection, deleteSelection }) {
  return selection.map((select, index) => (
    <Selection
      selection={select}
      index={index}
      key={select.id}
      deleteSelection={deleteSelection}
    />
  ));
});

export default function Add({ file, setFile, deleteSelection }) {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const selection = reorder(
      file.selection,
      result.source.index,
      result.destination.index
    );

    setFile({ selection });
  }

  function replaceBreakLineTag(html) {
    return html.replace("<br>", "");
  }

  function getUpload(event) {
    const fr = new FileReader();

    fr.onload = function () {
      const sanitizeHTML = replaceBreakLineTag(fr.result);
      const node = new DOMParser().parseFromString(sanitizeHTML, "text/html")
        .body.firstElementChild;
      const lists = node.querySelectorAll("li.rootselection");
      const forDraggable = Array.prototype.map.call(lists, (element, i) => {
        const title = element.querySelector("h4");
        return {
          id: `id-${i}`,
          content: title.innerHTML,
          body: element.innerHTML,
        };
      });
      setFile({ selection: forDraggable });
    };

    fr.readAsText(event.target.files[0]);
  }

  return (
    <>
      <input type="file" onChange={getUpload} />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <SelectList
                selection={file.selection}
                deleteSelection={deleteSelection}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {file.selection.length !== 0 && <Link to="/">speichern</Link>}
    </>
  );
}

const SelectItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;
