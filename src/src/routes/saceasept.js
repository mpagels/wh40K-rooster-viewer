import { Link } from "react-router-dom";

export default function Tausept() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Sept Choice</h4>
            <p>
              <span class="bold">Selections:</span> Sa'cea Sept
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">Configuration</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                Sa'cea Sept Tenet: Masters of Urban Warfare
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
                  <td class="profile-name">
                    Sa'cea Sept Tenet: Masters of Urban Warfare
                  </td>
                  <td>
                    - Each time a ranged attack targets a VEHICLE unit with this
                    tenet, if the attacker is more than 18" away, then the
                    target is treated as having the benefits of Dense Cover
                    against that attack (see the Warhammer 40,000 Core Book). -
                    Each time a ranged attack targets an INFANTRY unit with this
                    tenet, if the attacker is more than 12" away, then the
                    target is treated as having the benefits of Dense Cover
                    against that attack. - VEHICLE and BATTLESUIT models with
                    this tenet do not suffer the penalty incurred to their hit
                    rolls for firing Heavy weapons at enemy units that are
                    within Engagement Range of them.
                  </td>
                  <td>Codex: Tau Empire p58</td>
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
