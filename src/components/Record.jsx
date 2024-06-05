import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

import "./Record.css";

export const Record = () => {
  return (
    <section className="records">
      <div className="record-container">
        <div className="record-items">
          <div className="iconDiv">
            <FaAward className="icon-record" />
          </div>
          <h3 className="record-heading">90%</h3>
          <p className="record-para">Result Rated as Accurate</p>
        </div>
        <hr className="border" />
        <div className="record-items">
          <div className="iconDiv">
            <FaUsers className="icon-record" />
          </div>
          <h3 className="record-heading">9,761+</h3>
          <p className="record-para">Training Program Beneficiaries</p>
        </div>
        <hr />
        <div className="record-items">
          <div className="iconDiv">
            <FaHandshake className="icon-record" />
          </div>
          <h3 className="record-heading">81,170+</h3>
          <p className="record-para">Advocacy Program Beneficiaries</p>
        </div>
      </div>
    </section>
  );
};
