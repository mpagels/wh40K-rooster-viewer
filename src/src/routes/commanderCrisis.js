import { Link } from "react-router-dom";

export default function CommanderCrisis() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Commander in Crisis Battlesuit [8 PL, 150pts]</h4>
            <p>
              <span class="bold">Selections:</span> 4. Through Boldness,
              Victory, Airbursting Fragmentation Projector [10pts], Missile Pod
              [10pts], Plasma Rifle [10pts], Target Lock, Warlord
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Faction: &lt;Sept&gt;, Battlesuit, Character, Fly, Jet Pack, HQ,
                Faction: T'au Empire, Commander, Crisis, Infantry, Warlord,
                Warlord - T'au
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Battlesuits, Manta Strike</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                4. Through Boldness, Victory, Master of War (Aura) (Crisis),
                Tactical Acumen (Crisis), Target Lock
              </span>
              , <span class="bold">Unit:</span>{" "}
              <span class="italic">Commander in Crisis Battlesuit</span>,{" "}
              <span class="bold">Weapon:</span>{" "}
              <span class="italic">
                Airbursting Fragmentation Projector, Missile Pod, Plasma Rifle
              </span>
            </p>
            <ul>
              <li>
                <h4>2x Marker Drone [20pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 2x Markerlight
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
            </ul>

            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">4. Through Boldness, Victory</td>
                  <td>
                    In your Command phase, select one friendly &lt;SEPT&gt; CORE
                    unit within 9" of this WARLORD. Until the start of your next
                    Command phase, each time a CORE model in that unit makes a
                    ranged attack, an unmodified hit roll of 6 automatically
                    wounds the target.
                  </td>
                  <td>Codex: Tau Empire p72</td>
                </tr>
                <tr>
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Master of War (Aura) (Crisis)</td>
                  <td>
                    While a friendly T'AU EMPIRE CORE unit is within 6" of this
                    unit's CRISIS BATTLESUIT COMMANDER model, each time a CORE
                    model in this unit makes an attack, re-roll a hit-roll of 1.
                  </td>
                  <td>Codex: Tau Empire p100</td>
                </tr>
                <tr>
                  <td class="profile-name">Tactical Acumen (Crisis)</td>
                  <td>
                    In your Command Phase, you can select one firendly
                    &lt;SEPT&gt; CRISIS CORE unit within 9" of this unit's
                    CRISIS BATTLESUIT COMMANDER model. Until the end of the
                    turn: - That unit is eligible to shoot and declare a charge
                    with in a turn in which it Fell Back. - Each time a CORE
                    model in that unit makes a ranged attack, you can ignore any
                    or all hit modifiers.
                  </td>
                  <td>Codex: Tau Empire p100</td>
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
                  <td class="profile-name">Commander in Crisis Battlesuit</td>
                  <td>10"</td>
                  <td>3+</td>
                  <td>2+</td>
                  <td>5</td>
                  <td>5</td>
                  <td>6</td>
                  <td>4</td>
                  <td>10</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p100</td>
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
                  <td class="profile-name">
                    Airbursting Fragmentation Projector
                  </td>
                  <td>24"</td>
                  <td>Assault D6</td>
                  <td>4</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>
                    Blast. This weapon can target units that are not visible to
                    the bearer.
                  </td>
                  <td>Codex: Tau Empire p131</td>
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
