import { FunctionComponent } from "react";
import styles from "./ProfessionalsPage.module.css";
import { useNavigate } from "react-router-dom";

const ProfessionalsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.professionalsPage}>
      <section className={styles.content}>
        <h1 className={styles.professionals}>Professionals</h1>
        <div className={styles.appleIsTheContainer}>
          <p
            className={styles.appleIsThe}
          >{`Apple is the most widespread ecosystem in the world. `}</p>
          <p className={styles.appleIsThe}>&nbsp;</p>
          <p
            className={styles.appleIsThe}
          >{`If your client is on the Apple ecosystem, Pinnaqle Home is the right place to build your system. This is the most efficient way to deliver a professional home automation system to your client. `}</p>
          <p className={styles.appleIsThe}>&nbsp;</p>
          <p
            className={styles.appleIsThe}
          >Our planning tool will guide you through the design process in a few steps. <br/>
            You can easily tailor the system to the budget of your client
          </p>
        </div>
        <button className={styles.button} onClick={() => {
                navigate('/dashboard');
               }}>
          <div className={styles.label3}>Get Started</div>
        </button>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.designDeliverDelightParent}>
          <h1
            className={styles.designDeliverDelight}
          >{`Design, Deliver, Delight `}</h1>
          <div className={styles.creatingASeamless}>
            Creating a Seamless Smart Home Experience for Your Clients
          </div>
        </div>
        <div className={styles.offeringDetailsParent}>
          <div className={styles.offeringDetails}>
            <div className={styles.sleekCustomerOffering}>
              Sleek customer offering
            </div>
            <div className={styles.weWillProvideContainer}>
              <ul className={styles.weWillProvideABeautifulP}>
                <li className={styles.weWillProvide}>
                  We will provide a beautiful, personalised brochure tailored to
                  your client and the system that you design.
                </li>
                <li className={styles.weWillProvide}>
                  It will show clear user benefits – useful and cool
                  functionality that your user can get with the system.
                </li>
                <li className={styles.weWillProvide}>
                  Apple systems are by design sleek – interface is clean,
                  familiar, and streamlined.
                </li>
                <li className={styles.weWillProvide}>
                  Our component manufacturers are Apple certified and therefore
                  reliable.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails}>
            <div className={styles.sleekCustomerOffering}>
              Attractive commercial terms
            </div>
            <div className={styles.weWillProvideContainer}>
              <ul className={styles.weWillProvideABeautifulP}>
                <li className={styles.weWillProvide}>
                  Trade rebates available – please register to get access to
                  plans and terms
                </li>
                <li className={styles.weWillProvide}>
                  Transparent pricing – our planning tool allows to design the
                  system to your client’s budget. You can adjust functionality
                  and/or choose a quality level – budget, standard, or premium.
                  Pricing is displayed live as you build your system.
                </li>
                <li className={styles.weWillProvide}>
                  Our system eliminates layers of consultants and plethora of
                  meetings, which makes it very cost effective.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails}>
            <div className={styles.sleekCustomerOffering}>Easy design process</div>
            <div className={styles.weWillProvideContainer}>
              <ul className={styles.weWillProvideABeautifulP}>
                <li className={styles.weWillProvide}>
                  Any professional – architect, designer, builder – can utilise
                  the system with ease.
                </li>
                <li className={styles.weWillProvide}>
                  Our click-through tool allows you to design a comprehensive
                  solution in minutes. The tool displays multiple-choice options
                  to make sure you don’t forget anything.
                </li>
                <li className={styles.weWillProvide}>
                  Technical details are minimised as much as possible, and can
                  be checked/measured/confirmed on site using our simple
                  personalised specification form that is printed for you with
                  one click.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails}>
            <div className={styles.sleekCustomerOffering}>Delivery</div>
            <div className={styles.weWillProvideContainer}>
              <ul className={styles.weWillProvideABeautifulP}>
                <li className={styles.weWillProvide}>
                  The system is supplied ready to install. Your builder needs to
                  install the system.
                </li>
                <li className={styles.weWillProvide}>
                  Installation is simple – it is Apple HomeKit after all. A
                  single installation instruction manual will be included with
                  the package.
                </li>
                <li className={styles.weWillProvide}>
                  We can label all components for clarity what goes where.
                </li>
                <li className={styles.weWillProvide}>We can also pre-program the components.</li>
              </ul>
            </div>
          </div>
        </div>
        <button className={styles.button}  onClick={() => {
                navigate('/dashboard');
               }}>
          <div className={styles.label3}>Get Started</div>
        </button>
      </section>
    </div>
  );
};

export default ProfessionalsPage;
