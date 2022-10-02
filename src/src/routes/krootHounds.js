import { Link } from "react-router-dom";

export default function KrootHounds() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Kroot Hounds [1 PL, 24pts]</h4>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Faction: T'au Empire, Kroot Hounds, Beasts, T'au Auxiliary,
                Faction: Kroot, No Force Org Slot
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>
              <span class="italic">Ambushing Predators</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>
              <span class="italic">
                Stealthy Hunter, Voracious Predators
              </span>, <span class="bold">Unit:</span>
              <span class="italic">Kroot Hound</span>
            </p>
            <ul>
              <li>
                <h4>4x Kroot Hound [24pts]</h4>
                <p>
                  <span class="bold">Selections:</span> 4x Ripping Fangs
                </p>
                <p class="profile-names">
                  <span class="bold">Weapon:</span>
                  <span class="italic">Ripping Fangs</span>
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
                  <td class="profile-name">Stealthy Hunter</td>
                  <td>
                    Each time a ranged attack is allocated to this model while
                    it is receiving the benefits of cover, add an additional 1
                    to any armour saving throws made against that attack.
                  </td>
                  <td>Codex: Tau Empire p103,118</td>
                </tr>
                <tr>
                  <td class="profile-name">Voracious Predators</td>
                  <td>
                    You can re-roll Advance rolls and charge rolls made for this
                    unit.
                  </td>
                  <td>Codex: Tau Empire p118</td>
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
                  <td class="profile-name">Kroot Hound</td>
                  <td>12"</td>
                  <td>3+</td>
                  <td>-</td>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>3</td>
                  <td>5</td>
                  <td>6+</td>
                  <td>Codex: Tau Empire p118</td>
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
                  <td class="profile-name">Ripping Fangs</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>User</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p130</td>
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
