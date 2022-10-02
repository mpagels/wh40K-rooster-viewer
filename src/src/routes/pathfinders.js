import { Link } from "react-router-dom";

export default function Pathfinders() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Pathfinder Team [6 PL, 100pts]</h4>
            <p>
              <span class="bold">Selections:</span> Grav-inhibitor Drone [1 PL,
              10pts]
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Fast Attack, Infantry, Faction: &lt;Sept&gt;, Faction: T'au
                Empire, Pathfinder Team, Core, Fire Warrior Team, Photon
                Grenades, Fly, Drone, Grav-Inhibitor Drone
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>
              <span class="italic">
                Artificial Helpers, Docked Drones, Limited Parameters, Manta
                Strike, Valued Sacrifice
              </span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>
              <span class="italic">
                Gravity Wave Projector, Target Uploaded, Vanguard
              </span>
              , <span class="bold">Unit:</span>
              <span class="italic">Grav-inhibitor Drone</span>
            </p>
            <ul>
              <li>
                <h4>9x Pathfinder</h4>
                <p>
                  <span class="bold">Selections:</span> 9x Markerlight, 9x Pulse
                  Carbine, 9x Pulse Pistol
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>
                  <span class="caps">Markerlight</span>
                </p>
                <p class="rule-names">
                  <span class="bold">Rules:</span>
                  <span class="italic">Markerlights</span>
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>
                  <span class="italic">Markerlight</span>,
                  <span class="bold">Unit:</span>
                  <span class="italic">Pathfinder</span>,
                  <span class="bold">Weapon:</span>
                  <span class="italic">Pulse Carbine, Pulse Pistol</span>
                </p>
              </li>
              <li>
                <h4>Pathfinder Shas'ui</h4>
                <p>
                  <span class="bold">Selections:</span> Markerlight, Pulse
                  Carbine, Pulse Pistol
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>
                  <span class="caps">Markerlight</span>
                </p>
                <p class="rule-names">
                  <span class="bold">Rules:</span>
                  <span class="italic">Markerlights</span>
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>
                  <span class="italic">Markerlight</span>,
                  <span class="bold">Unit:</span>
                  <span class="italic">Pathfinder Shas'ui</span>,
                  <span class="bold">Weapon:</span>
                  <span class="italic">Pulse Carbine, Pulse Pistol</span>
                </p>
              </li>
            </ul>
            <br />
            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Gravity Wave Projector</td>
                  <td>
                    Subtract 2 from charge rolls made for any units that declare
                    a charge against this unit.
                  </td>
                  <td>Codex: Tau Empire p95</td>
                </tr>
                <tr>
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Target Uploaded</td>
                  <td>
                    This unit can start the Fire Markerlights action at the end
                    of your Movement phase, instead of the start.
                  </td>
                  <td>Codex: Tau Empire p106</td>
                </tr>
                <tr>
                  <td class="profile-name">Vanguard</td>
                  <td>
                    At the start of the first battle round, this model can make
                    a Normal Move of up to 7". They cannot end this move within
                    9" of any enemy models.
                  </td>
                  <td>Codex: Tau Empire p106,116</td>
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
                  <td class="profile-name">Grav-inhibitor Drone</td>
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
                <tr>
                  <td class="profile-name">Pathfinder</td>
                  <td>7"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>7</td>
                  <td>5+</td>
                  <td>Codex: Tau Empire p116</td>
                </tr>
                <tr>
                  <td class="profile-name">Pathfinder Shas'ui</td>
                  <td>7"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>8</td>
                  <td>5+</td>
                  <td>Codex: Tau Empire p116</td>
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
                <tr>
                  <td class="profile-name">Pulse Pistol</td>
                  <td>12"</td>
                  <td>Pistol 1</td>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p132</td>
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
