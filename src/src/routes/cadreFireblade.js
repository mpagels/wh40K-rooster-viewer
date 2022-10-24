import { Link } from "react-router-dom";

export default function CadreFireblade() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Cadre Fireblade [3 PL, -1CP, 50pts]</h4>
            <p>
              <span class="bold">Selections:</span> 2. Through Unity,
              Devastation (Aura), Fireblade Pulse Rifle, Markerlight, Ohr'tu's
              Lantern, Stratagem: Promising Pupil [-1CP]
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">
                Faction: &lt;Sept&gt;, Character, Infantry, HQ, Faction: T'au
                Empire, Cadre Fireblade, Photon Grenades, Markerlight
              </span>
            </p>
            <p class="rule-names">
              <span class="bold">Rules:</span>{" "}
              <span class="italic">Markerlights</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                2. Through Unity, Devastation (Aura), Markerlight, Ohr'tu's
                Lantern, Stratagem: Promising Pupil, Target Sighted, Volley Fire
                (Aura)
              </span>
              , <span class="bold">Unit:</span>{" "}
              <span class="italic">Cadre Fireblade</span>,{" "}
              <span class="bold">Weapon:</span>{" "}
              <span class="italic">Fireblade Pulse Rifle</span>
            </p>

            <table cellspacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th>
                  <th>Description</th>
                  <th>Ref</th>
                </tr>
                <tr>
                  <td class="profile-name">
                    2. Through Unity, Devastation (Aura)
                  </td>
                  <td>
                    While a friendly &lt;SEPT&gt; CORE unit is within 6" of this
                    WARLORD, each time a CORE model in that unit makes a ranged
                    attack, on an unmodified wound roll of 6, improve the Armour
                    Penetration characteristic of that attack by 1.
                  </td>
                  <td>Codex: Tau Empire p72</td>
                </tr>
                <tr>
                  <td class="profile-name">Markerlight</td>
                  <td>The bearer gains the MARKERLIGHT keyword.</td>
                  <td>Codex: Tau Empire p96</td>
                </tr>
                <tr>
                  <td class="profile-name">Ohr'tu's Lantern</td>
                  <td>
                    Model equipped with a markerlight only. Each time this model
                    performs the Fire Markerlights action (pg 93), roll five
                    additional D6s (each of which causes the enemy unit to gain
                    one Markerlight token on a roll of 3+).
                  </td>
                  <td>Codex: Tau Empire p75</td>
                </tr>
                <tr>
                  <td class="profile-name">Stratagem: Promising Pupil</td>
                  <td>
                    Use this Stratagem before the battle, when you are mustering
                    your army, if your WARLORD has the T'AU EMPIRE keyword.
                    Select one T'AU EMPIRE CHARACTER model in your army and
                    determine one Warlord Trait for that model (this must be a
                    Warlord Trait they can have); this model is regarded as your
                    Warlord for the purposes of that Warlord Trait. Each Warlord
                    Trait in your army must be unique (if randomly generated,
                    re-roll duplicate results), and you cannot use this
                    Stratagem to give a model two Warlord Traits. You can only
                    use this Stratagem once, unless you are playing a Strike
                    Force battle (in which case you can use this Stratagem
                    twice), or an Onslaught battle (in which case you can use
                    this Stratagem three times).
                  </td>
                  <td>Codex: Tau Empire p67</td>
                </tr>
                <tr>
                  <td class="profile-name">Target Sighted</td>
                  <td>
                    In your Command phase, select one friendly &lt;SEPT&gt; FIRE
                    WARRIOR TEAM unit within 9" of this unit's CADRE FIREBLADE
                    model, until the start of your next Command phase, each time
                    a CORE model in that unit makes a ranged attack, re-roll a
                    hit roll of 1.
                  </td>
                  <td>Codex: Tau Empire p103</td>
                </tr>
                <tr>
                  <td class="profile-name">Volley Fire (Aura)</td>
                  <td>
                    While a friendly &lt;SEPT&gt; CORE unit is within 6" of this
                    unit's CADRE FIREBLADE model, each time a CORE model in that
                    unit makes an attack with a pulse weapon (pg 130), an
                    unmodified hit roll of 6 scores one additional hit.
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
                  <td class="profile-name">Cadre Fireblade</td>
                  <td>6"</td>
                  <td>4+</td>
                  <td>3+</td>
                  <td>3</td>
                  <td>3</td>
                  <td>4</td>
                  <td>3</td>
                  <td>8</td>
                  <td>4+</td>
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
                  <td class="profile-name">Fireblade Pulse Rifle</td>
                  <td>36"</td>
                  <td>Rapid Fire 1</td>
                  <td>5</td>
                  <td>-2</td>
                  <td>2</td>
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
