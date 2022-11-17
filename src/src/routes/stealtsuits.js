import { Link } from "react-router-dom";

export default function StealthSuits() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Stealth Battlesuits [5 PL, 110pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Faction: &lt;Sept&gt;, Battlesuit, Elites, Fly, Infantry, Jet
                Pack, Faction: T'au Empire, Stealth Battlesuits, Core
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Battlesuits</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">Camouflage Fields, Infiltrator</span>
            </p>
            <ul>
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
              <li>
                <h4>2x Stealth Shas'ui w/ Burst Cannon [50pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 2x Burst Cannon
                </p>
                <p class="profile-names">
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Stealth Shas'ui</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Burst Cannon</span>
                </p>
              </li>
              <li>
                <h4>Stealth Shas'vre [30pts]</h4>
                <p>
                  <span class="bold">Selections:</span> Burst Cannon, Drone
                  Controller [5pts]
                </p>
                <p class="profile-names">
                  <span class="bold">Abilities:</span>{" "}
                  <span class="italic">Drone Controller</span>,{" "}
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Stealth Shas'vre</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">Burst Cannon</span>
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
                  <td class="profile-name">Camouflage Fields</td>
                  <td>
                    Each time an attack is made against this unit, subtract 1
                    from that attack's hit roll. Each time a ranged attack is
                    allocated to a model in this unit while it is receiving the
                    benefits of cover, add an additional 1 to any armour saving
                    throw made against that attack.
                  </td>
                  <td>Codex: Tau Empire p113</td>
                </tr>
                <tr>
                  <td class="profile-name">Drone Controller</td>
                  <td>
                    In your Command phase, you can select one DRONE unit within
                    6" of the bearer, until the start of your next Command
                    phase: - DRONE models in that unit have a Ballistic Skill
                    characteristic of 4+. - GUN DRONE models in that unit lose
                    the Drone Identification Protocol ability.
                  </td>
                  <td>Codex: Tau Empire p113</td>
                </tr>
                <tr>
                  <td class="profile-name">Drone Shield Generator</td>
                  <td>
                    A model with a shield generator has a 4+ invulnerable save.
                  </td>
                  <td>Codex: Tau Empire p97</td>
                </tr>
                <tr>
                  <td class="profile-name">Infiltrator</td>
                  <td>
                    During deployment, when you set up this unit, it can be set
                    up anywhere on the battlefield that is more than 9" away
                    from the enemy deployment zone and any enemy models.
                  </td>
                  <td>Codex: Tau Empire p98,113</td>
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
                <tr>
                  <td class="profile-name">Stealth Shas'ui</td>
                  <td>8"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>4</td>
                  <td>4</td>
                  <td>2</td>
                  <td>2</td>
                  <td>8</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p113</td>
                </tr>
                <tr>
                  <td class="profile-name">Stealth Shas'vre</td>
                  <td>8"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>4</td>
                  <td>4</td>
                  <td>2</td>
                  <td>3</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p113</td>
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
                  <td class="profile-name">Burst Cannon</td>
                  <td>18"</td>
                  <td>Assault 6</td>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p131</td>
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
