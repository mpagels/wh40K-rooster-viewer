import { Link } from "react-router-dom";

export default function Tausept() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Sept Choice</h4>
            <p>
              <span class="bold">Selections:</span> T'au Sept
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">Configuration</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">T'au Sept Tenet: Coordinated Fire Arcs</span>
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
                    T'au Sept Tenet: Coordinated Fire Arcs
                  </td>
                  <td>
                    - Each time a unit with this tenet is selected to shoot or
                    fight, you can re-roll one hit roll or one wound roll when
                    resolving that unit's attacks. - Add 3" to the range of aura
                    abilities of models with this tenet (to a maximum of 12"). -
                    Each time a model with this tenet intones an invocation that
                    is not an aura, or uses an ability in your Command phase
                    that specifies a range, add 3" to the range of that
                    invocation or ability (to a maximum of 12").
                  </td>
                  <td>Codex: Tau Empire p56</td>
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
