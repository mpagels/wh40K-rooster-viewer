import { Link } from "react-router-dom";

export default function Commander() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Commander in Coldstar Battlesuit [9 PL, 205pts]</h4>
            <p>
              <span class="bold">Selections:</span> 1. Precision of the Hunter,
              Burst Cannon [10pts], DW-02 Advanced Burst Cannon [1 PL, 15pts],
              Fusion Blaster [15pts], Fusion Blaster [20pts], High-output Burst
              Cannon [15pts], Onager Gauntlet, Target Lock, Warlord
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Faction: &lt;Sept&gt;, Battlesuit, Character, Fly, Jet Pack, HQ,
                Faction: T'au Empire, Coldstar, Commander, Infantry, Warlord,
                Warlord - Bork'an
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Battlesuits, Manta Strike</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                1. Precision of the Hunter, Aggressive Tactics, DW-02 Advanced
                Burst Cannon, High-altitude Manoeuvres, Master of War (Aura)
                (Coldstar), Target Lock
              </span>
              , <span class="bold">Unit:</span>{" "}
              <span class="italic">Commander in Coldstar Battlesuit</span>,{" "}
              <span class="bold">Weapon:</span>{" "}
              <span class="italic">
                Burst Cannon, DW-02 Advanced Burst Cannon, Fusion Blaster,
                High-output Burst Cannon, Onager Gauntlet
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
                  <td class="profile-name">1. Precision of the Hunter</td>
                  <td>
                    Each time this WARLORD makes an attack, you can re-roll the
                    hit roll and you can re-roll the wound roll.
                  </td>
                  <td>Codex: Tau Empire p72</td>
                </tr>
                <tr>
                  <td class="profile-name">Aggressive Tactics</td>
                  <td>
                    In your Command phase, you can select one friendly
                    &lt;SEPT&gt; CRISIS CORE unit within 9" of this unit's
                    COLDSTAR BATTLESUIT COMMANDER model. Until the end of the
                    turn, each time this unit Advances, do not make an Advance
                    roll. Instead, until the end of the phase, add 8" to the
                    Move characteristic of models in this unit.
                  </td>
                  <td>Codex: Tau Empire p102</td>
                </tr>
                <tr>
                  <td class="profile-name">DW-02 Advanced Burst Cannon</td>
                  <td>
                    COMMANDER or CRISIS model equipped with one of more burst
                    cannons only. This Prototype System replaces one burst
                    cannon.
                  </td>
                  <td>Codex: Tau Empire p70</td>
                </tr>
                <tr>
                  <td class="profile-name">High-altitude Manoeuvres</td>
                  <td>
                    Once per battle, at the start of your Movement phase, you
                    can remove this unit from the battlefield. If you do, then
                    in the Reinforcements step of that phase, you can do one of
                    the following: - Set this unit back up on the battlefield,
                    anywhere that is more than 9" away from any enemy models. -
                    If the mission you are playing is using the Strategic
                    Reserves rule, place this unit into Strategic Reserves.
                  </td>
                  <td>Codex: Tau Empire p102</td>
                </tr>
                <tr>
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Master of War (Aura) (Coldstar)</td>
                  <td>
                    While a friendly T'AU EMPIRE CORE unit is within 6" of this
                    unit's COLDSTAR BATTLESUIT COMMANDER model, each time a CORE
                    model in this unit makes an attack, re-roll a hit-roll of 1.
                  </td>
                  <td>Codex: Tau Empire p102</td>
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
                  <td class="profile-name">Commander in Coldstar Battlesuit</td>
                  <td>14"</td>
                  <td>3+</td>
                  <td>2+</td>
                  <td>5</td>
                  <td>5</td>
                  <td>7</td>
                  <td>4</td>
                  <td>10</td>
                  <td>3+</td>
                  <td>Codex: Tau Empire p102</td>
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
                  <td class="profile-name">Burst Cannon</td>
                  <td>18"</td>
                  <td>Assault 6</td>
                  <td>5</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">DW-02 Advanced Burst Cannon</td>
                  <td>18"</td>
                  <td>Assault 8</td>
                  <td>6</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>
                    Each time an attack made with this weapon is allocated to a
                    model, that model cannot use any rules to ignore the wounds
                    it loses.
                  </td>
                  <td>Codex: Tau Empire p70</td>
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
                  <td class="profile-name">High-output Burst Cannon</td>
                  <td>18"</td>
                  <td>Assault 10</td>
                  <td>5</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p131</td>
                </tr>
                <tr>
                  <td class="profile-name">Onager Gauntlet</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>12</td>
                  <td>-4</td>
                  <td>3</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p74</td>
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
