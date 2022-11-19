import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home({ selections }) {
  if (selections.length === 0) {
    return (
      <>
        <div>Nothing to show</div>
        <Link to="/addRooster">Add Rooster</Link>
      </>
    );
  }

  return (
    <>
      <Navigation style={{ marginBottom: "75px" }}>
        {selections.map((selection) => {
          return (
            <Link key={selection.id} to={`unit/${selection.id}`}>
              {selection.content}
            </Link>
          );
        })}
      </Navigation>
      <Link to={`/addRooster`}>
        <button className="back-btn">Bearbeiten</button>
      </Link>
    </>
  );
}

const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  justify-items: center;
  align-items: center;
`;
