import { Link } from "react-router-dom";

export default function Drones() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Tactical Drones [2 PL, 60pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Fast Attack, Fly, Faction: &lt;Sept&gt;, Drone, Tactical Drones,
                Faction: T'au Empire
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Manta Strike</span>
            </p>
            <ul>
              <li>
                <h4>6x Gun Drone [60pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 12x Pulse Carbine
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>{" "}
                  <span class="caps">
                    Drone, Fly, Faction: &lt;Sept&gt;, Faction: T'au Empire, Gun
                    Drone
                  </span>
                </p>
                <p class="rule-names">
                  <span class="bold">Rules:</span>{" "}
                  <span class="italic">
                    Artificial Helpers, Docked Drones, Limited Parameters, Manta
                    Strike, Valued Sacrifice
                  </span>
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">Threat Identification Protocol</span>,{" "}
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Gun Drone</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Pulse Carbine</span>
                </p>
              </li>
            </ul>

            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Threat Identification Protocol</td>
                  <td>
                    Each time this model makes a ranged attack, it can only
                    target the closest eligible unit.
                  </td>
                  <td>Codex: Tau Empire p95</td>
                </tr>
              </tbody>
            </table>
            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Unit</th>
                  <th>M</th>
                  <th>WS</th>
                  <th>BS</th>
                  <th>S</th>
                  <th>T</th>
                  <th>W</th>
                  <th>A</th>
                  <th>Ld</th>
                  <th>Save</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Gun Drone</td>
                  <td>10"</td>
                  <td>5+</td>
                  <td>5+</td>
                  <td>3</td>
                  <td>4</td>
                  <td>1</td>
                  <td>1</td>
                  <td>6</td>
                  <td>4+</td>
                  <td>Codex: Tau Empire p94</td>
                </tr>
              </tbody>
            </table>
            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Weapon</th>
                  <th>Range</th>
                  <th>Type</th>
                  <th>S</th>
                  <th>AP</th>
                  <th>D</th>
                  <th>Abilities</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Pulse Carbine</td>
                  <td>24"</td>
                  <td>Assault 2</td>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p130</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
      <Link to={`/`}>
        <button className="back-btn">Back</button>
      </Link>
    </>
  );
}
