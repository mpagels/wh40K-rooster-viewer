import { Link } from "react-router-dom";

export default function StrikeTeam() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Strike Team [5 PL, 95pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Infantry, Troops, Faction: &lt;Sept&gt;, Faction: T'au Empire,
                Strike Team, Photon Grenades, Fire Warrior Team, Core
              </span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>
              <span class="italic">Set up Turret</span>
            </p>
            <ul>
              <li>
                <h4>Fire Warrior Shas'ui [5pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Markerlight [5pts],
                  Pulse Pistol, Pulse Rifle
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
                  <span class="italic">Fire Warrior Shas'ui</span>,
                  <span class="bold">Weapon:</span>
                  <span class="italic">Pulse Pistol, Pulse Rifle</span>
                </p>
              </li>
              <li>
                <h4>9x Fire Warrior w/ Pulse Rifle</h4>
                <p>
                  <span class="bold">Selections:</span> 9x Pulse Pistol, 9x
                  Pulse Rifle
                </p>
                <p class="profile-names">
                  <span class="bold">Unit:</span>
                  <span class="italic">Fire Warrior</span>,
                  <span class="bold">Weapon:</span>
                  <span class="italic">Pulse Pistol, Pulse Rifle</span>
                </p>
              </li>
              <li>
                <h4>Marker Drone [10pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Markerlight
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>
                  <span class="caps">
                    Faction: &lt;Sept&gt;, Drone, Fly, Faction: T'au Empire,
                    Marker Drone, Markerlight
                  </span>
                </p>
                <p class="rule-names">
                  <span class="bold">Rules:</span>
                  <span class="italic">
                    Artificial Helpers, Docked Drones, Limited Parameters, Manta
                    Strike, Markerlights, Valued Sacrifice
                  </span>
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>
                  <span class="italic">Markerlight</span>,
                  <span class="bold">Unit:</span>
                  <span class="italic">Marker Drone</span>
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
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Set up Turret</td>
                  <td>
                    If this unit contains a Support Turret, that model is not
                    set up until the unit performs the following action:
                    <br />
                    <br />
                    'Deploy Turret (Action): In your Command phase, any number
                    of BREACHER TEAM or STRIKE TEAM units from your army can
                    start to perform this action. This action is completed at
                    the end of your next Movement phase. When it is completed,
                    if that unit contains a Support Turret model that is not on
                    the battlefield and has not been destroyed, set that Support
                    Turret model up on the battlefield in Unit Coherency with
                    that unit.'
                  </td>
                  <td>Codex: Tau Empire p108</td>
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
                  <td class="profile-name">Fire Warrior</td>
                  <td>6"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>7</td>
                  <td>4+</td>
                  <td>Codex: Tau Empire p108</td>
                </tr>
                <tr>
                  <td class="profile-name">Fire Warrior Shas'ui</td>
                  <td>6"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>8</td>
                  <td>4+</td>
                  <td>Codex: Tau Empire p108</td>
                </tr>
                <tr>
                  <td class="profile-name">Marker Drone</td>
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
                  <td class="profile-name">Pulse Pistol</td>
                  <td>12"</td>
                  <td>Pistol 1</td>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p132</td>
                </tr>
                <tr>
                  <td class="profile-name">Pulse Rifle</td>
                  <td>36"</td>
                  <td>Rapid Fire 1</td>
                  <td>5</td>
                  <td>-1</td>
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
