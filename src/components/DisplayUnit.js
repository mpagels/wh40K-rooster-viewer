import { Markup } from "interweave";
import { Link, useParams } from "react-router-dom";

export default function DisplayUnit({ units }) {
  let { id } = useParams();
  return (
    <>
      <div class="battlescribe maini" style={{ marginBottom: "75px" }}>
        <ul class="viewer-list">
          {units
            .filter((unit) => unit.id === id)
            .map((unit) => {
              return (
                <Markup
                  allowAttributes={true}
                  content={`<ul className="viewer-list"><li className="rootselection"> ${unit.body} </li></ul>`}
                  key={id}
                />
              );
            })}
        </ul>
      </div>
      <Link to={`/`}>
        <button className="back-btn">Back</button>
      </Link>
    </>
  );
}
