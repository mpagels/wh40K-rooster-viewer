import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="navigation">
      <Link to={`cadre`}>Cadre Fireblade</Link>
      <Link to={`striketeam`}>Strike Team</Link>
      <Link to={`pathfinders`}>Pathfinders</Link>
      <Link to={`crisissuits`} style={{ textAlign: "center" }}>
        Crisis Suits <br></br>(Bust Canon / AFP)
      </Link>
      <Link to={`crisissuits2`} style={{ textAlign: "center" }}>
        Crisis Suits <br></br>(Plasma Rifle / Missile Pods) <br></br> (Shield
        Generator, Early Warning Override)
      </Link>
      <Link to={`ghostkeel`}>Ghostkeel Battlesuit</Link>
      <Link to={`broadside`}>Broadside</Link>
      <Link to={`krootshaper`}>Kroot Sharper</Link>
      <Link to={`krootcarnivores`}>Kroot Carnivores</Link>
      <Link to={`kroothounds`}>Kroot Hounds</Link>
      <Link to={`kroothounds`}>Kroot Hounds</Link>
      <Link to={`tausept`}>Tau Sept: Coordinated Fire Arcs</Link>
      <Link to={`saceasept`}>Sa'cea Sept: Masters of Urban Warfare</Link>
    </div>
  );
}
