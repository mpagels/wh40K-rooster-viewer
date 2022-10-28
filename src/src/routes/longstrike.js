import { Link } from "react-router-dom";

export default function Longstrike() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Longstrike [9 PL, 175pts]</h4>
            <p>
              <span class="bold">Selections:</span> 2x Accelerator Burst Cannon
              [10pts], Railgun, Seeker Missile [5pts]
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                HQ, Vehicle, Fly, Character, Faction: T'au Empire, Faction: T'au
                Sept, Longstrike, Hammerhead
              </span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                Drone Dock (Hammerhead), Explodes (Hammerhead), Gunship Ace,
                Hover Tank (Hammerhead), Targeting Array (Hammerhead), XV02
                Pilot Battlesuit
              </span>
              , <span class="bold">Unit:</span>{" "}
              <span class="italic">
                Longstrike [1] (8-14+ Wounds Remaining), Longstrike [2] (4-7
                Wounds Remaining), Longstrike [3] (1-3 Wounds Remaining)
              </span>
              , <span class="bold">Weapon:</span>{" "}
              <span class="italic">
                Accelerator Burst Cannon, Railgun, Seeker Missile
              </span>
            </p>

            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">Drone Dock (Hammerhead)</td>
                  <td>
                    If this unit contains any DRONE models, those DRONE models
                    begin the game docked with this unit's HAMMERHEAD model.
                  </td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">Explodes (Hammerhead)</td>
                  <td>
                    When this unit's HAMMERHEAD model is destroyed, roll one D6
                    before removing it from the play. On a 6, it explodes and
                    each unit within 6" suffers D6 mortal wounds.
                  </td>
                  <td>Codex: Tau Empire p107,121</td>
                </tr>
                <tr>
                  <td class="profile-name">Gunship Ace</td>
                  <td>
                    Each time this unit's HAMMERHEAD model makes a ranged attack
                    against MONSTER or VEHICLE unit, add 1 to that atack's wound
                    roll.
                  </td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">Hover Tank (Hammerhead)</td>
                  <td>
                    Distances are measured to and from the hull or the base of
                    this unit’s VEHICLE model; whichever is closest.
                  </td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">Targeting Array (Hammerhead)</td>
                  <td>
                    Each time this unit's HAMMERHEAD model is selected to shoot,
                    you can re-roll one hit roll when resolving the attacks.
                  </td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">XV02 Pilot Battlesuit</td>
                  <td>
                    In your Command phase, you can select one other friendly
                    T'AU SEPT CORE or T'AU SEPT HAMMERHEAD unit within 6" of
                    this unit's HAMMERHEAD model. Until the start of your next
                    Command phase, each time a model in that unit makes an
                    attack, that target is treated as having a Markerlight token
                    (pg 93).
                  </td>
                  <td>Codex: Tau Empire p107</td>
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
                  <td class="profile-name">
                    Longstrike [1] (8-14+ Wounds Remaining)
                  </td>
                  <td>12"</td>
                  <td>6+</td>
                  <td>3+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>14</td>
                  <td>3</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">
                    Longstrike [2] (4-7 Wounds Remaining)
                  </td>
                  <td>6"</td>
                  <td>6+</td>
                  <td>4+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>N/A</td>
                  <td>D3</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p107</td>
                </tr>
                <tr>
                  <td class="profile-name">
                    Longstrike [3] (1-3 Wounds Remaining)
                  </td>
                  <td>4"</td>
                  <td>6+</td>
                  <td>5+</td>
                  <td>6</td>
                  <td>7</td>
                  <td>N/A</td>
                  <td>1</td>
                  <td>9</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p107</td>
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
                  <td class="profile-name">Accelerator Burst Cannon</td>
                  <td>18"</td>
                  <td>Assault 8</td>
                  <td>6</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Railgun</td>
                  <td>72"</td>
                  <td>Heavy 1</td>
                  <td>14</td>
                  <td>-6</td>
                  <td>D3+6</td>
                  <td>
                    Each time an attack is made with this weapon, invulnerable
                    saving throws cannot be made against that attack. Each time
                    a successful wound roll is made for an attack with this
                    weapon, the target suffers 3 mortal wounds in addition to
                    any other damage.
                  </td>
                  <td>Codex: Tau Empire p132</td>
                </tr>
                <tr>
                  <td class="profile-name">Seeker Missile</td>
                  <td>72"</td>
                  <td>Heavy 1</td>
                  <td>9</td>
                  <td>-3</td>
                  <td>2D3</td>
                  <td>
                    The bearer can only shoot with each seeker missile it is
                    equipped with once per battle.
                  </td>
                  <td></td>
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
