import { Link } from "react-router-dom";

export default function KrootCarnivores() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Kroot Carnivores [3 PL, 60pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Troops, Infantry, Faction: T'au Empire, Kroot Carnivores, T'au
                Auxiliary, Faction: Kroot
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Ambushing Predators</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">Kroot Pack, Stealthy Hunters</span>
            </p>
            <ul>
              <li>
                <h4>10x Kroot [60pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 10x Kroot Rifle, 10x
                  Quill Grenades
                </p>
                <p class="profile-names">
                  <span class="bold">Unit:</span>{" "}
                  <span class="italic">Kroot</span>,{" "}
                  <span class="bold">Weapon:</span>{" "}
                  <span class="italic">
                    Kroot Rifle (Melee), Kroot Rifle (Shooting), Quill Grenades
                  </span>
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
                  <td class="profile-name">Kroot Pack</td>
                  <td>
                    If your army is Battle-forged, then for each KROOT
                    CARNIVORES unit included in a Detachment, up to one KROOTOX
                    RIDERS unit, up to one KROOT HOUNDS unit, and up to one
                    KROOT SHAPER unit can be included in that Detachment without
                    taking up Battlefield Role slots.
                  </td>
                  <td>Codex: Tau Empire p110</td>
                </tr>
                <tr>
                  <td class="profile-name">Stealthy Hunters</td>
                  <td>
                    Each time a ranged attack is allocated to a model in this
                    unit while it is receiving the benefits of cover, add an
                    additional 1 to any armour saving throw made against that
                    attack.
                  </td>
                  <td>Codex: Tau Empire p110</td>
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
                  <td class="profile-name">Kroot</td>
                  <td>7"</td>
                  <td>3+</td>
                  <td>4+</td>
                  <td>4</td>
                  <td>3</td>
                  <td>1</td>
                  <td>2</td>
                  <td>6</td>
                  <td>6+</td>
                  <td>Codex: Tau Empire p110</td>
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
                  <td class="profile-name">Kroot Rifle (Melee)</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>User</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p110</td>
                </tr>
                <tr>
                  <td class="profile-name">Kroot Rifle (Shooting)</td>
                  <td>24"</td>
                  <td>Rapid Fire 1</td>
                  <td>4</td>
                  <td>0</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p110</td>
                </tr>
                <tr>
                  <td class="profile-name">Quill Grenades</td>
                  <td>6"</td>
                  <td>Grenade D6</td>
                  <td>4</td>
                  <td>0</td>
                  <td>1</td>
                  <td>Blast</td>
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
