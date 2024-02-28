import React from "react";
import { Link } from "react-router-dom";

const WarningSection = () => {
  return (
    <>
      <section className="container-section  warning-section">
        <div>
          <p>
            <span className=""> WARNING</span> : If you have epilepsy or have
            had seizures or other unusual reactions to flashing lights or
            patterns, consult a doctor before playing video games. All users
            should read the Health and Safety Information available in the
            system settings before using this software.
          </p>
          <p className="my-3">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            <Link to="/"> nintendo.com/switch-online</Link>
          </p>

          <p>
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default WarningSection;
