import { Link } from "react-router-dom";

export default function KrootShaper() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Kroot Shaper [2 PL, 25pts]</h4>
            <p>
              <span class="bold">Selections:</span> Ritual Blade, Shaper Kroot
              Rifle
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>
              <span class="caps">
                Character, Infantry, Kroot Shaper, Faction: Kroot, T'au
                Auxiliary, HQ
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>
              <span class="italic">Ambushing Predators</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>
              <span class="italic">
                Stealthy Hunter, The Shaper Commands (Aura), Wisest of Their
                Kind (Aura)
              </span>
              , <span class="bold">Unit:</span>
              <span class="italic">Kroot Shaper</span>,
              <span class="bold">Weapon:</span>
              <span class="italic">Ritual Blade, Shaper Kroot Rifle</span>
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
                  <td class="profile-name">Stealthy Hunter</td>
                  <td>
                    Each time a ranged attack is allocated to this model while
                    it is receiving the benefits of cover, add an additional 1
                    to any armour saving throws made against that attack.
                  </td>
                  <td>Codex: Tau Empire p103,118</td>
                </tr>
                <tr>
                  <td class="profile-name">The Shaper Commands (Aura)</td>
                  <td>
                    While a friendly KROOT unit is within 6" of this model, each
                    time a model in that unit makes an attack, re-roll a hit
                    roll of 1.
                  </td>
                  <td>Codex: Tau Empire p103</td>
                </tr>
                <tr>
                  <td class="profile-name">Wisest of Their Kind (Aura)</td>
                  <td>
                    While a friendly KROOT unit is within 6" of this model,
                    models in that unit can use this model's Leadership
                    characteristic instead of their own.
                  </td>
                  <td>Codex: Tau Empire p103</td>
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
                  <td class="profile-name">Kroot Shaper</td>
                  <td>7"</td>
                  <td>2+</td>
                  <td>4+</td>
                  <td>4</td>
                  <td>3</td>
                  <td>4</td>
                  <td>3</td>
                  <td>8</td>
                  <td>6+</td>
                  <td>Codex: Tau Empire p103</td>
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
                  <td class="profile-name">Ritual Blade</td>
                  <td>Melee</td>
                  <td>Melee</td>
                  <td>+1</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p130</td>
                </tr>
                <tr>
                  <td class="profile-name">Shaper Kroot Rifle</td>
                  <td>24"</td>
                  <td>Rapid Fire 2</td>
                  <td>4</td>
                  <td>-1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>Codex: Tau Empire p103</td>
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
