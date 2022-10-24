import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="navigation">
      <Link to={`cadre`}>Cadre Fireblade</Link>
      <Link to={`commander-crisis`}>Commander in Crisis Suit</Link>
      <Link to={`striketeam`}>Strike Team</Link>

      <Link to={`crisissuits`} style={{ textAlign: "center" }}>
        Crisis Suits <br></br>(MP/MP/MP)
      </Link>

      <Link to={`broadside`}>Broadside</Link>

      <Link to={`krootcarnivores`}>Kroot Carnivores</Link>

      <Link to={`kroothounds`}>Kroot Hounds</Link>
      <Link to={`tausept`}>Tau Sept: Coordinated Fire Arcs</Link>
      <Link to={`saceasept`}>Sa'cea Sept: Masters of Urban Warfare</Link>
    </div>
  );
}
