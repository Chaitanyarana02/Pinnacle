import { FunctionComponent } from "react";
import styles from "./ProfessionalsPage.module.css";

const ProfessionalsPage: FunctionComponent = () => {
  return (
    <div className={styles.professionalsPage}>
      <section className={styles.content}>
        <h1 className={styles.professionals}>Professionals</h1>
        <div className={styles.appleIsTheContainer}>
          <p
            className={styles.appleIsThe}
          >{`Apple is the most widespread ecosystem in the world. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p
            className={styles.ifYourClient}
          >{`If your client is on the Apple ecosystem, Pinnaqle Home is the right place to build your system. This is the most efficient way to deliver a professional home automation system to your client. `}</p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p
            className={styles.ourPlanningTool}
          >{`Our planning tool will guide you through the design process in a few steps. `}</p>
          <p className={styles.youCanEasily}>
            You can easily tailor the system to the budget of your client
          </p>
        </div>
        <button className={styles.button}>
          <div className={styles.label}>Get Started</div>
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
                <li className={styles.itWillShow}>
                  It will show clear user benefits – useful and cool
                  functionality that your user can get with the system.
                </li>
                <li className={styles.appleSystemsAre}>
                  Apple systems are by design sleek – interface is clean,
                  familiar, and streamlined.
                </li>
                <li>
                  Our component manufacturers are Apple certified and therefore
                  reliable.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails1}>
            <div className={styles.attractiveCommercialTerms}>
              Attractive commercial terms
            </div>
            <div className={styles.tradeRebatesAvailableContainer}>
              <ul className={styles.tradeRebatesAvailablePlea}>
                <li className={styles.tradeRebatesAvailable}>
                  Trade rebates available – please register to get access to
                  plans and terms
                </li>
                <li className={styles.transparentPricing}>
                  Transparent pricing – our planning tool allows to design the
                  system to your client’s budget. You can adjust functionality
                  and/or choose a quality level – budget, standard, or premium.
                  Pricing is displayed live as you build your system.
                </li>
                <li>
                  Our system eliminates layers of consultants and plethora of
                  meetings, which makes it very cost effective.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails2}>
            <div className={styles.easyDesignProcess}>Easy design process</div>
            <div className={styles.anyProfessionalContainer}>
              <ul className={styles.anyProfessionalArchitect}>
                <li className={styles.anyProfessional}>
                  Any professional – architect, designer, builder – can utilise
                  the system with ease.
                </li>
                <li className={styles.ourClickThroughTool}>
                  Our click-through tool allows you to design a comprehensive
                  solution in minutes. The tool displays multiple-choice options
                  to make sure you don’t forget anything.
                </li>
                <li>
                  Technical details are minimised as much as possible, and can
                  be checked/measured/confirmed on site using our simple
                  personalised specification form that is printed for you with
                  one click.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offeringDetails3}>
            <div className={styles.delivery}>Delivery</div>
            <div className={styles.theSystemIsContainer}>
              <ul className={styles.theSystemIsSuppliedReadyT}>
                <li className={styles.theSystemIs}>
                  The system is supplied ready to install. Your builder needs to
                  install the system.
                </li>
                <li className={styles.installationIsSimple}>
                  Installation is simple – it is Apple HomeKit after all. A
                  single installation instruction manual will be included with
                  the package.
                </li>
                <li className={styles.weCanLabel}>
                  We can label all components for clarity what goes where.
                </li>
                <li>We can also pre-program the components.</li>
              </ul>
            </div>
          </div>
        </div>
        <button className={styles.button1}>
          <div className={styles.label1}>Get Started</div>
        </button>
      </section>
    </div>
  );
};

export default ProfessionalsPage;
