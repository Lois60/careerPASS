
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

import "./Record.css";

export const Record = () => {
  return (
    <section className="records">
      <div className="record-container">
        <div className="record-items">
          <FaAward className="icon-record" />
          <h3 className="record-heading">90%</h3>
          <p className="record-para">
            Result Rated as <br /> Accurate
          </p>
        </div>
        <div className="record-items">
          <FaUsers className="icon-record" />
          <h3 className="record-heading">9,761+</h3>
          <p className="record-para">
            Training Program <br /> Beneficiaries
          </p>
        </div>
        <div className="record-items">
          <FaHandshake className="icon-record" />
          <h3 className="record-heading">81,170+</h3>
          <p className="record-para">
            Advocacy <br />
            Program <br /> Beneficiaries
          </p>
        </div>
      </div>
    </section>
  );
};
