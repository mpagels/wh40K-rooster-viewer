import { Link } from "react-router-dom";

export default function Borkansept() {
  return (
    <>
      <div class="battlescribe maini">
        <ul class="viewer-list">
          <li class="rootselection">
            <h4>Sept Choice</h4>
            <p>
              <span class="bold">Selections:</span> Bork'an Sept
            </p>
            <p class="category-names">
              <span class="bold">Categories:</span>{" "}
              <span class="caps">Configuration</span>
            </p>
            <p class="profile-names">
              <span class="bold">Abilities:</span>{" "}
              <span class="italic">
                Bork'an Sept Tenet: Superior Craftsmanship
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
                    Bork'an Sept Tenet: Superior Craftsmanship
                  </td>
                  <td>
                    - Add 4" to the Range characteristic of ranged weapons that
                    models with this tenet are equipped with. - Each time a
                    ranged attack is made with weapon that has a Strength
                    characteristic of 7 of less against VEHICLE or BATTLESUIT
                    unit with this tenet, subtract 1 from the Strength
                    characteristic of this attack.
                  </td>
                  <td>Codex: Tau Empire p60</td>
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
