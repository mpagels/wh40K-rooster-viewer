import { Markup } from "interweave";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DisplayUnit({ units }) {
  const [display, setDisplay] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/api/rooster/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDisplay(data.result.body);
      });
  }, [id]);

  return (
    <>
      {display ? (
        <div class="battlescribe maini" style={{ marginBottom: "75px" }}>
          <ul class="viewer-list">
            <Markup
              allowAttributes={true}
              content={`<ul className="viewer-list"><li className="rootselection"> ${display} </li></ul>`}
            />
          </ul>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
      <Link to={`/`}>
        <button className="back-btn">Back</button>
      </Link>
    </>
  );
}
