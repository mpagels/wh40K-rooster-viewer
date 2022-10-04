import { Link } from "react-router-dom";

export default function CrisisSuits2() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Crisis Battlesuits [11 PL, 230pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Faction: &lt;Sept&gt;, Battlesuit, Elites, Fly, Jet Pack,
                Faction: T'au Empire, Infantry, Core, Crisis
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Battlesuits, Manta Strike</span>
            </p>
            <ul>
              <li>
                <h4>Crisis Shas'ui [60pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Early Warning Override,
                  Missile Pod [10pts], Plasma Rifle [10pts], Target Lock
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">
                    Early Warning Override, Target Lock
                  </span>
                  , <span class="bold">Unit:</span>{" "}
                  <span class="italic">Crisis Shas'ui</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Missile Pod, Plasma Rifle</span>
                </p>
              </li>
              <li>
                <h4>Crisis Shas'ui [65pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Early Warning Override,
                  Missile Pod [10pts], Plasma Rifle [10pts], Shield Generator
                  [5pts]
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">
                    Early Warning Override, Shield Generator
                  </span>
                  , <span class="bold">Unit:</span>{" "}
                  <span class="italic">Crisis Shas'ui</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Missile Pod, Plasma Rifle</span>
                </p>
              </li>
              <li>
                <h4>Crisis Shas'vre [65pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Early Warning Override,
                  Missile Pod [10pts], Plasma Rifle [10pts], Shield Generator
                  [5pts]
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">
                    Early Warning Override, Shield Generator
                  </span>
                  , <span class="bold">Unit:</span>{" "}
                  <span class="italic">Crisis Shas'vre</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Missile Pod, Plasma Rifle</span>
                </p>
              </li>
              <li>
                <h4>Marker Drone [10pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Markerlight
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>{" "}
                  <span class="caps">
                    Faction: &lt;Sept&gt;, Drone, Fly, Faction: T'au Empire,
                    Marker Drone, Markerlight
                  </span>
                </p>
                <p class="rule-names">
                  <span class="bold">Rules:</span>{" "}
                  <span class="italic">
                    Artificial Helpers, Docked Drones, Limited Parameters, Manta
                    Strike, Markerlights, Valued Sacrifice
                  </span>
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">Markerlight</span>,{" "}
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Marker Drone</span>
                </p>
              </li>
              <li>
                <h4>2x Shield Drone [30pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 2x Shield Generator
                </p>
                <p class="category-names">
                  <span class="bold">Categories:</span>{" "}
                  <span class="caps">
                    Faction: &lt;Sept&gt;, Fly, Drone, Faction: T'au Empire,
                    Shield Drone
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
                  <span class="italic">Drone Shield Generator</span>,{" "}
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Shield Drone</span>
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
                  <td class="profile-name">Drone Shield Generator</td>
                  <td>
                    A model with a shield generator has a 4+ invulnerable save.
                  </td>
                  <td>Codex: Tau Empire p97</td>
                </tr>
                <tr>
                  <td class="profile-name">Early Warning Override</td>
                  <td>
                    - Each time the bearer fires Overwatch, it scores hits on
                    unmodified hit rolls of 5+, instead of 6. - Each time you
                    use the Fire Overwatch Stratagem, if the bearer is on the
                    battlefield and its unit is selected to fire Overwatch,
                    reduce the CP cost of that Stratagem by 1CP (to a minimum of
                    0CP). Note that the CP cost is only reduced by 1CP for that
                    use of the Stratagem, any future usages of it cost the
                    normal amount of CPs.
                  </td>
                  <td>Codex: Tau Empire p100</td>
                </tr>
                <tr>
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Shield Generator</td>
                  <td>The bearer has a 4+ invulnerable save.</td>
                  <td>Codex: Tau Empire p99,100</td>
                </tr>
                <tr>
                  <td class="profile-name">Target Lock</td>
                  <td>
                    Each time the bearer makes a ranged attack, the target does
                    not receive the benefits of Light Cover against that attack.
                  </td>
                  <td>Codex: Tau Empire p100</td>
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
                  <td class="profile-name">Crisis Shas'ui</td>
                  <td>10"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>5</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>8</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p111</td>
                </tr>
                <tr>
                  <td class="profile-name">Crisis Shas'vre</td>
                  <td>10"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>5</td>
                  <td>5</td>
                  <td>4</td>
                  <td>4</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p111</td>
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
                  <td class="profile-name">Missile Pod</td>
                  <td>30"</td>
                  <td>Assault 2</td>
                  <td>7</td>
                  <td>-2</td>
                  <td>2</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Plasma Rifle</td>
                  <td>30"</td>
                  <td>Assault 1</td>
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
