import { Link } from "react-router-dom";

export default function Ghostkeel() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Ghostkeel Battlesuit [9 PL, 185pts]</h4>
            <p>
              <span class="bold">Selections:</span> 2x Fusion Blaster [10pts],
              Drone Controller, Flare Launcher [15pts], Fusion Collider,
              Ghostkeel Fists, 2x Stealth Drone
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Elites, Fly, Faction: &lt;Sept&gt;, Battlesuit, Jet Pack,
                Faction: T'au Empire, Ghostkeel Battlesuit, Vehicle, Drone,
                Stealth Drone
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>
              <span class="italic">
                Artificial Helpers, Battlesuits, Docked Drones, Limited
                Parameters, Manta Strike, Valued Sacrifice
              </span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>
              <span class="italic">
                Drone Controller, Explodes (Ghostkeel), Flare Launcher,
                Ghostkeel Electrowarfare Suite, Infiltrator, Stealth Field
                Generator
              </span>
              , <span class="bold">Unit:</span>
              <span class="italic">
                Stealth Drone, XV95 Ghostkeel Shas'vre [1] (7-12+ Wounds
                Remaining), XV95 Ghostkeel Shas'vre [2] (4-6 Wounds Remaining),
                XV95 Ghostkeel Shas'vre [3] (1-3 Wounds Remaining)
              </span>
              , <span class="bold">Weapon:</span>
              <span class="italic">
                Fusion Blaster, Fusion Collider, Ghostkeel Fists
              </span>
            </p>
            <br />
            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Drone Controller</td>
                  <td>
                    In your Command phase, you can select one DRONE unit within
                    6" of the bearer, until the start of your next Command
                    phase:
                    <br />
                    - DRONE models in that unit have a Ballistic Skill
                    characteristic of 4+.
                    <br />- GUN DRONE models in that unit lose the Drone
                    Identification Protocol ability.
                  </td>
                  <td>Codex: Tau Empire p113</td>
                </tr>
                <tr>
                  <td class="profile-name">Explodes (Ghostkeel)</td>
                  <td>
                    When this unit's GHOSTKEEL BATTLESUIT model is destroyed,
                    roll one D6 before removing it from play. On a 6 it
                    explodes, and each unit within 6" suffers D3 mortal wounds.
                  </td>
                  <td>Codex: Tau Empire p114</td>
                </tr>
                <tr>
                  <td class="profile-name">Flare Launcher</td>
                  <td>
                    Each time the bearer would lose a wound as a result of a
                    ranged attack with a Strength characteristic of 7 or more,
                    roll one D6: on a 5+, that wound is not lost.
                  </td>
                  <td>Codex: Tau Empire p114</td>
                </tr>
                <tr>
                  <td class="profile-name">Ghostkeel Electrowarfare Suite</td>
                  <td>
                    While this unit's GHOSTKEEL BATTLESUIT model has any wounds
                    remaining, each time a ranged attack targets this unit,
                    subtract 1 from that attack's hit roll.
                  </td>
                  <td>Codex: Tau Empire p114</td>
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
                <tr>
                  <td class="profile-name">Stealth Field Generator</td>
                  <td>
                    This unit cannot be selected as a target for ranged attacks
                    unless it is the closest eligible target to the firing model
                    or the firing model is within 18" of it.
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
                  <td class="profile-name">Stealth Drone</td>
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
                  <td class="profile-name">
                    XV95 Ghostkeel Shas'vre [1] (7-12+ Wounds Remaining)
                  </td>
                  <td>12"</td>
                  <td>5+</td>
                  <td>4+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>12</td>
                  <td>3</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p114</td>
                </tr>
                <tr>
                  <td class="profile-name">
                    XV95 Ghostkeel Shas'vre [2] (4-6 Wounds Remaining)
                  </td>
                  <td>8"</td>
                  <td>5+</td>
                  <td>5+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>N/A</td>
                  <td>D3</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p114</td>
                </tr>
                <tr>
                  <td class="profile-name">
                    XV95 Ghostkeel Shas'vre [3] (1-3 Wounds Remaining)
                  </td>
                  <td>4"</td>
                  <td>5+</td>
                  <td>5+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>N/A</td>
                  <td>1</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p114</td>
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
                  <td class="profile-name">Fusion Blaster</td>
                  <td>18"</td>
                  <td>Assault 1</td>
                  <td>8</td>
                  <td>-4</td>
                  <td>D6</td>
                  <td>
                    Each time an attack made with this weapon targets a unit
                    within half range, that attack has a Damage characteristic
                    of D6+2.
                  </td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Fusion Collider</td>
                  <td>24"</td>
                  <td>Heavy 3</td>
                  <td>9</td>
                  <td>-4</td>
                  <td>D6</td>
                  <td>
                    Each time an attack is made with this weapon that targets an
                    enemy unit within half range, that attack has a Damage
                    characteristic of D6+2.
                  </td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Ghostkeel Fists</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>+1</td>
                  <td>-1</td>
                  <td>2</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p114</td>
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
