import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="navigation">
      <Link to={`cadre`}>Cadre Fireblade</Link>
      <Link to={`striketeam`}>Strike Team</Link>
      <Link to={`pathfinders`}>Pathfinders</Link>
      <Link to={`crisissuits`}>Crisis Suits</Link>
      <Link to={`ghostkeel`}>Ghostkeel Battlesuit</Link>
      <Link to={`broadside`}>Broadside</Link>
      <Link to={`krootshaper`}>Kroot Sharper</Link>
      <Link to={`kroothounds`}>Kroot Hounds</Link>
    </div>
  );
}