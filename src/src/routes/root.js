import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="navigation">
      <Link to={`commander`} style={{ textAlign: "center" }}>
        Commander in Coldstar Battlesuit <br></br>(DW-02 Advanced Burst Cannon /
        High-output Burst Cannon / Fusion Blaster) <br></br> (Shield Generator,
        Early Warning Override)
      </Link>
      <Link to={`crisissuits`} style={{ textAlign: "center" }}>
        BodyguardsCrisis Suits <br></br>(Bust Canon / Target Lock /
        Multitracker)
      </Link>

      <Link to={`ghostkeel`}>Ghostkeel Battlesuit</Link>
      <Link to={`stealthsuits`}>Stealth Suits</Link>
      <Link to={`broadside`}>Broadside</Link>

      <Link to={`drones`}>Gun Drones</Link>

      <Link to={`krootcarnivores`}>Kroot Carnivores</Link>
      <Link to={`tausept`}>Tau Sept: Coordinated Fire Arcs</Link>
      <Link to={`saceasept`}>Sa'cea Sept: Masters of Urban Warfare</Link>
      <Link to={`borkansept`}>Bork'an Sept: Masters of Urban Warfare</Link>
    </div>
  );
}
