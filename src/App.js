import "./App.css";
import Background1 from "./assets/background1.png";
import Logo from "./assets/logo.png";
import Headerleft from "./assets/headerleft.png";
import { Field } from "./components/Field.jsx";
import Fieldd from "./assets/fieldd.png";
import Fieldd2 from "./assets/fieldd2.png";
import Fieldd3 from "./assets/fieldd3.png";
import Findjob from "./assets/findjob.png";
import Findjobabs from "./assets/findjobabs.png";

function App() {
  return (
    <div className="App">
      <div className="header__section">
        <div className="header__section__background__img">
          <img src={Background1} alt="background__img" />
        </div>
        <div className="header__info">
          <div className="navbar">
            <img src={Logo} alt="logo__img" />
            <div className="navbar__links">
              <div className="nav__link">Jobs</div>
              <div className="nav__link">Professionals</div>
              <div className="nav__link">Traineeships</div>
              <div className="nav__link">Clients</div>
              <div className="nav__link">About Us</div>
            </div>
          </div>
          <div className="header__text">
            <div className="header__info__left">
              <div className="header__info__left__heading">
                Get the Best Job <br />
                <span>You Deserve</span>
              </div>
              <div className="header__section__tellus">
                Tell us who you are and let us find the best job for you!
              </div>
              <div className="header__info__left__button">
                Start Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
            <div className="header__info__right">
              <img src={Headerleft} alt="headerimg" />
              <div className="message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.963"
                  height="35.973"
                  viewBox="0 0 35.963 35.973"
                >
                  <g
                    id="Group_983"
                    data-name="Group 983"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_1191"
                      data-name="Path 1191"
                      d="M53.977,376.771c-2.488,0-4.975-.009-7.463.007a1.279,1.279,0,0,1-1.349-.645c-.274-.563.04-.971.384-1.364.634-.725,1.235-1.482,1.915-2.161.514-.514.532-.875.058-1.461a10.7,10.7,0,0,1-2.444-6.893c.011-4.269,2.107-7.44,5.528-9.766a16.651,16.651,0,0,1,20.465,1.532,10.9,10.9,0,0,1,.652,15.615,14.812,14.812,0,0,1-11.487,5.142C58.15,376.757,56.064,376.771,53.977,376.771Zm-.451-10.693a2.12,2.12,0,0,0,2.074-2.105,2.105,2.105,0,1,0-4.209.069A2.1,2.1,0,0,0,53.526,366.078Zm8.437-2.067a2.121,2.121,0,0,0-2.057-2.135,2.149,2.149,0,0,0-2.114,2.091,2.086,2.086,0,1,0,4.171.045Zm6.391-.042a2.11,2.11,0,0,0-2.1-2.092,2.165,2.165,0,0,0-2.078,2.132,2.1,2.1,0,0,0,2.117,2.071A2.06,2.06,0,0,0,68.354,363.968Z"
                      transform="translate(-45.061 -340.805)"
                      fill="#ee7a27"
                    />
                    <path
                      id="Path_1192"
                      data-name="Path 1192"
                      d="M98.965,293.629a10.4,10.4,0,0,1,3.1-5.544,15.429,15.429,0,0,1,20.853-.1A10.217,10.217,0,0,1,123.97,302c-.13.166-.243.345-.394.559.739.866,1.469,1.716,2.192,2.573.35.415.694.831.384,1.435-.283.552-.775.587-1.3.583-.9-.007-1.806,0-2.689,0-.176-1-.272-1.934-.507-2.83-1.254-4.777-4.413-7.9-8.788-9.9a18.784,18.784,0,0,0-13.079-.9q-.27.074-.545.132A1.422,1.422,0,0,1,98.965,293.629Z"
                      transform="translate(-90.31 -283.979)"
                      fill="#00a9e8"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose__your__field">
        <div className="choose__your__field__heading">Choose Your Field</div>
        <div className="choose__your__field__fields">
          <Field img={Fieldd} name="Manager Field Service" />
          <Field img={Fieldd2} name="Manager Field Service" />
          <Field img={Fieldd3} name="Manager Field Service" />
          <Field img={Fieldd2} name="Manager Field Service" />
          <Field img={Fieldd3} name="Manager Field Service" />
          <Field img={Fieldd} name="Manager Field Service" />
        </div>
        <div className="choose__field__button">
          Find 1676 Technical Vacanciess
        </div>
      </div>
      <div className="we_find_job">
        <img src={Findjobabs} alt="findjobabs" />
        <div className="we_find_job__abstract">
          <img src={Findjob} alt="findjob" />
          <div className="we_find_job__abstract__heading">
            We find the job for you
          </div>
          <div className="we_find_job__abstract__subheading">
            Sign up as a job seeker and put us to work.
          </div>
          <div className="we_find_job__abstract__button">Register Directly</div>
        </div>
      </div>
    </div>
  );
}

export default App;
