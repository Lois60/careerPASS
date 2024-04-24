import './Terms.css'
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export const Terms=()=>{
    return (
      <section className="terms-text">
        <div className="terms-header">
          <h4>
            {" "}
            <IoIosArrowBack />
            Terms and Conditions{" "}
          </h4>
          <p>Please read these terms carefully before using CareerPASS.</p>
        </div>

        <div className="terms-cons">
          <div className="con-text">
            <p className="text-para">
              Welcome to CareerPASS, a psychometric assessment platform offered
              by Women Techsters Fellowship. By accessing or using CareerPASS,
              you agree to comply with and be bound by the following terms and
              conditions of use. Please read these terms carefully before using
              CareerPASS. If you do not agree to these terms, please do not use
              CareerPASS.
            </p>
          </div>
          <div className="con-text">
            <h5>1. Use of CareerPASS</h5>
            <li>
              CareerPASS is intended to assist women in identifying the most
              suitable career paths within the tech industry. You may use
              CareerPASS solely for this purpose and in accordance with these
              terms.
            </li>
          </div>
          <div className="con-text">
            <h5>2. User Account</h5>
            <li>
              To access certain features of CareerPASS, you may be required to
              fill in some personal identifiable information. You are
              responsible for maintaining the confidentiality of your data. You
              agree to accept responsibility for all activities that occur under
              your account.
            </li>
          </div>
          <div className="con-text">
            <h5>3. Privacy</h5>
            <li>
              Your use of CareerPASS is governed by our Privacy Policy, which
              can be found [here](link to privacy policy). By using CareerPASS,
              you consent to the terms of our Privacy Policy.
            </li>
          </div>
          <div className="con-text">
            <h5>4. Intellectual Property</h5>
            <li>
              The content, features, and functionality of CareerPASS are owned
              by Women Techsters Fellowship and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </li>
          </div>
          <div className="con-text">
            <h5>5. Prohibited Activities</h5>
            <li>You agree not to engage in any of the following activities:</li>
            <br />
            <li>Use CareerPASS for any unlawful purpose.</li>
            <br />
            <li>
              Attempt to gain unauthorized access to any portion of CareerPASS.
            </li>
            <br />
            <li>Interfere with or disrupt the operation of CareerPASS.:</li>
          </div>
          <div className="con-text">
            <h5>6. Disclaimer</h5>
            <li>
              CareerPASS is provided "as is" and "as available" without any
              warranties of any kind. Women Techsters Fellowship disclaims all
              warranties, express or implied, including, but not limited to, the
              implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement.
            </li>
          </div>
          <div className="con-text">
            <h5>7. Limitation of Liability</h5>
            <li>
              In no event shall Women Techsters Fellowship be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including, but not limited to, loss of profits, data, use, or
              other intangible losses, arising out of or in connection with your
              use of CareerPASS
            </li>
          </div>
          <div className="con-text">
            <h5>8. Governing Law</h5>
            <li>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of Nigeria, without regard to its
              conflict of law principles.
            </li>
          </div>
          <div className="con-text">
            <h5>9. Changes to Term</h5>
            <li>
              Women Techsters Fellowship reserves the right to modify or revise
              these terms and conditions at any time without prior notice. Your
              continued use of CareerPASS following the posting of changes
              constitutes your acceptance of such changes
            </li>
          </div>
          <div className="con-text">
            <h5>10. Contact Informatio</h5>
            <li>
              If you have any questions about these terms and conditions, please
              contact us <Link to="/Contact-Us">here</Link>
            </li>
          </div>

          <br />
          <br />
          <div className="con-text">
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Privacy Policy
            </h5>
            <li>
              This Privacy Policy describes how CareerPASS, a psychometric
              assessment platform offered by Women Techsters Fellowship,
              collects, uses, and protects your personal information when you
              use CareerPASS.
            </li>
          </div>
          <div className="con-text">
            <h5>Information We Collect</h5>
            <li>
              Personal Information: When you create an account on CareerPASS, we
              may collect personal information such as your name, email address,
              and country of residence. Assessment Data: We collect data related
              to your psychometric assessments, including your responses to
              assessment questions and the results of the assessments.
            </li>
          </div>
          <div className="con-text">
            <h5>How We Use Your Information</h5>
            <li>
              We use your personal information to create and manage your
              account, provide you with access to CareerPASS, and communicate
              with you about your assessments. We use your assessment data to
              generate personalized recommendations for learning tracks and
              provide you with insights into your strengths and areas for
              development.
            </li>
          </div>
          <div className="con-text">
            <h5>Information Sharing</h5>
            <li>
              We may share your personal information with third-party service
              providers who assist us in providing CareerPASS and its features.
              We may share your assessment data with facilitators and mentors
              involved in the Women Techsters Fellowship program to enhance your
              learning experience.
            </li>
          </div>
          <div className="con-text">
            <h5>Data Security</h5>
            <li>
              We take reasonable measures to protect your personal information
              and assessment data from unauthorized access, disclosure,
              alteration, or destruction.
            </li>
          </div>
          <div className="con-text">
            <h5>Your Choices</h5>
            <li>
              You can choose not to provide certain personal information, but
              this may limit your ability to use certain features of CareerPASS.
              You can request to access, update, or delete your personal
              information by contacting us <Link to="/Contact-Us">here</Link>
            </li>
          </div>
          <div className="con-text">
            <h5>Changes to This Privacy Policy</h5>
            <li>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this pag
            </li>
          </div>
          <div className="con-text">
            <h5>Contact Us</h5>
            <li>
              If you have any questions about our Privacy Policy, please contact
              us <Link to="/Contact-Us">here</Link>
            </li>
          </div>
        </div>
      </section>
    );
};