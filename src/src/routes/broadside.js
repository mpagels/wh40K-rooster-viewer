import { Link } from "react-router-dom";

export default function Broadside() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Broadside Battlesuits [6 PL, 125pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Faction: &lt;Sept&gt;, Battlesuit, Heavy Support, Faction: T'au
                Empire, Broadside Battlesuits, Infantry
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>
              <span class="italic">Battlesuits</span>
            </p>
            <ul>
              <li>
                <h4>Broadside Shas'vre [5 PL, 95pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Advanced Targeting
                  System, Crushing Bulk, Heavy Rail Rifle, Twin Plasma Rifle
                  [10pts]
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>
                  <span class="italic">Advanced Targeting System</span>,
                  <span class="bold">Unit:</span>
                  <span class="italic">Broadside Shas'vre</span>,
                  <span class="bold">Weapon:</span>
                  <span class="italic">
                    Crushing Bulk, Heavy Rail Rifle, Twin Plasma Rifle
                  </span>
                </p>
              </li>
              <li>
                <h4>2x Shield Drone [30pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 2x Shield Generator
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>
                  <span class="caps">
                    Faction: &lt;Sept&gt;, Fly, Drone, Faction: T'au Empire,
                    Shield Drone
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
                  <span class="italic">Drone Shield Generator</span>,
                  <span class="bold">Unit:</span>
                  <span class="italic">Shield Drone</span>
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
                  <td class="profile-name">Advanced Targeting System</td>
                  <td>
                    Each time the bearer makes a ranged attack, an unmodified
                    hit roll of 6 automatically wounds the target.
                  </td>
                  <td>Codex: Tau Empire p119</td>
                </tr>
                <tr>
                  <td class="profile-name">Drone Shield Generator</td>
                  <td>
                    A model with a shield generator has a 4+ invulnerable save.
                  </td>
                  <td>Codex: Tau Empire p97</td>
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
                  <td class="profile-name">Broadside Shas'vre</td>
                  <td>5"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>5</td>
                  <td>5</td>
                  <td>8</td>
                  <td>4</td>
                  <td>9</td>
                  <td>2+</td>
                  <td>Codex: Tau Empire p119</td>
                </tr>
                <tr>
                  <td class="profile-name">Shield Drone</td>
                  <td>10"</td>
                  <td>5+</td>
                  <td>5+</td>
                  <td>3</td>
                  <td>4</td>
                  <td>2</td>
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
                  <td class="profile-name">Crushing Bulk</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>+1</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p130</td>
                </tr>
                <tr>
                  <td class="profile-name">Heavy Rail Rifle</td>
                  <td>60"</td>
                  <td>Heavy 2</td>
                  <td>9</td>
                  <td>-4</td>
                  <td>D3+3</td>
                  <td>
                    Each time a successful wound roll is made for an attack with
                    this weapon, the target suffers 1 mortal wound in addition
                    to any other damage.
                  </td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Twin Plasma Rifle</td>
                  <td>30"</td>
                  <td>Assault 2</td>
                  <td>8</td>
                  <td>-4</td>
                  <td>3</td>
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
