import { FunctionComponent } from "react";
import styles from "./Hompage.module.css";
import HomepageSectionComponent from "./HomepageSectionComponent";
import { useNavigate } from "react-router-dom";

const Hompage: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.hompageDraft1}>
      <section className={styles.autoLayoutVertical}>
        <div className={styles.autoLayoutVertical1}>
          <div className={styles.smartSecureSimple}>Smart, Secure, Simple</div>
          <h1 className={styles.experienceTheFuture}>
            Experience the Future of Smart Living with Apple HomeKit
          </h1>
          <h1 className={styles.unrivaledIntegrationSecurit}>
            Unrivaled Integration, Security, and Simplicity
          </h1>
        </div>
        <button className={styles.button} onClick={() => navigate('/dashboard')}>
          <div className={styles.label3}>Get Started</div>
        </button>
      </section>
      <section className={styles.automationBenefits}>
        <h1 className={styles.homeAutomationUsedContainer}>
          <p
            className={styles.homeAutomationUsed}
          >{`Home Automation used to be complicated and expensive. `}</p>
          <p className={styles.notAnymoreThe}>
            Not anymore. The ultimate home automation one-stop-shop is here.
          </p>
        </h1>
        <h1
          className={styles.pinnaqleHomeIs}
        >{`Pinnaqle Home is a home automation provider of systems based on Apple HomeKit. `}</h1>
        <div className={styles.bestChoice}>
          <h3 className={styles.pinnaqleHomeIs1}>
            Pinnaqle Home is the best choice for:
          </h3>
          <div className={styles.benefits}>
            <div className={styles.benefitImages}>
              <img
                className={styles.image21Icon}
                loading="lazy"
                alt=""
                src="/image21.png"
              />
              <button className={styles.button1}>
                <div className={styles.label4}>I’m a Homeowner</div>
              </button>
            </div>
            <div className={styles.benefitImages1}>
              <img
                className={styles.image21Icon1}
                loading="lazy"
                alt=""
                src="/image212.png"
              />
              <button className={styles.button2}>
                <div className={styles.label5}>I’m a Professional</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.targetAudience}>
        <div className={styles.professionals}>
          <div
            className={styles.architectsDesigners}
          >{`Architects, Designers & Builders`}</div>
          <h1 className={styles.effortlessDesignProfessiona}>
            Effortless Design, Professional Results
          </h1>
          <h3 className={styles.tailoredSmartHome}>
            Tailored Smart Home Systems in Minutes
          </h3>
        </div>
        <div className={styles.guidedDesign}>
          <div className={styles.designProcess}>
            <div className={styles.websiteProcess}>
              <img
                className={styles.outlineinterfacecheckIcon}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
              <div className={styles.guidedDesignProcess}>
                Guided design process right here on this website
              </div>
            </div>
            <div className={styles.componentQuality}>
              <img
                className={styles.outlineinterfacecheckIcon1}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
              <div className={styles.bestCertifiedComponents}>
                Best certified components that work well together
              </div>
            </div>
            <div className={styles.pricePackages}>
              <img
                className={styles.outlineinterfacecheckIcon2}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
              <div className={styles.multiplePricePackages}>
                Multiple price packages from budget to premium
              </div>
            </div>
            <div className={styles.packageInstructions}>
              <img
                className={styles.outlineinterfacecheckIcon3}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
              <div className={styles.fullPackageCarefully}>
                Full package, carefully labelled, with instructions, and ready
                to install delivered to your door
              </div>
            </div>
            <div className={styles.componentFlexibility}>
              <img
                className={styles.outlineinterfacecheckIcon4}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
              <div className={styles.freedomToTweak}>
                Freedom to tweak, upgrade, or replace components or system in
                the future
              </div>
            </div>
          </div>
          <div className={styles.designProcess1}>
            <div className={styles.tdesigncloseParent}>
              <img
                className={styles.tdesigncloseIcon}
                loading="lazy"
                alt=""
                src="/close.svg"
              />
              <div className={styles.expensiveConsultantsAnd}>
                Expensive consultants and agonising design process
              </div>
            </div>
            <div className={styles.tdesigncloseGroup}>
              <img
                className={styles.tdesigncloseIcon1}
                loading="lazy"
                alt=""
                src="/close.svg"
              />
              <div className={styles.ripOffMaintenanceContracts}>
                Rip-off maintenance contracts
              </div>
            </div>
            <div className={styles.tdesigncloseContainer}>
              <img
                className={styles.tdesigncloseIcon2}
                loading="lazy"
                alt=""
                src="/close.svg"
              />
              <div className={styles.glitchyComplexityThats}>
                Glitchy complexity that’s impossible to tweak as needed
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.tdesigncloseIcon3}
                alt=""
                src="/close.svg"
              />
              <div className={styles.painfulResearchOf}>
                Painful research of components that end up not working well
                together
              </div>
            </div>
            <div className={styles.tdesigncloseParent1}>
              <img
                className={styles.tdesigncloseIcon4}
                alt=""
                src="/close.svg"
              />
              <div className={styles.proprietarySystemsAnd}>
                Proprietary systems and being stuck with one supplier forever
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.callToAction}>
        <div className={styles.family}>
          <h1 className={styles.joinThePinnaqle}>
            Join the Pinnaqle Home Family Today
          </h1>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.homeownersParent}>
            <h1 className={styles.homeowners}>Homeowners</h1>
            <div className={styles.experienceTheEase}>
              Experience the ease and elegance of Apple HomeKit with Pinnaqle
              Home. Our user-friendly system puts smart living control at your
              fingertips
            </div>
          </div>
          <div className={styles.professionalsParent}>
            <h1 className={styles.professionals1}>Professionals</h1>
            <div className={styles.createAndOrder}>
              {" "}
              Create and order top-notch smart home systems quickly and
              efficiently with our exceptional process and competitive terms.
            </div>
          </div>
        </div>
        <h3 className={styles.implementPinnaqleHomeContainer}>
          <span>{`Implement Pinnaqle Home and experience the `}</span>
          <i>best</i>
          <span>
            {" "}
            of home automation. It's not just about controlling your home; it's
            about enhancing your life with technology that's secure, intuitive,
            and designed for everyone.
          </span>
        </h3>
        <button className={styles.button3} onClick={() => navigate('/dashboard')}>
          <div className={styles.label6}>Get Started</div>
        </button>
      </section>
      <HomepageSectionComponent sectionTitle="Why Home Automation" sectionNo={1}></HomepageSectionComponent>

      <section className={styles.futureLivingParent}>
        <div className={styles.futureLiving}>
          <div className={styles.welcomeMessages}>
            <h1 className={styles.welcomeToThe}>
              Welcome to the Future of Living
            </h1>
            <h3 className={styles.embraceHomeAutomation}>
              Embrace home automation transform your home— effortlessly smart,
              unbelievably convenient
            </h3>
          </div>
          <div className={styles.welcomeMessages1}>
            <h1 className={styles.embraceTheChangeContainer}>
              <p className={styles.embraceTheChange}>Embrace the Change —</p>
              <p className={styles.welcomeToYour}>Welcome to Your Smart Home</p>
            </h1>
            <div className={styles.inTheWorld}>
              In the world where technology evolves at an unprecedented pace,
              your home should not be left behind. Imagine a home that
              understands your needs, simplifies your life, and conserves energy
              while offering unparalleled comfort and security. Welcome to the
              era of home automation - where your living space becomes a smart
              space.
            </div>
          </div>
        </div>
        <div className={styles.homeBenefits}>
          <div className={styles.benefitsGrid}>
            <div className={styles.convenienceAtYourFingertipsParent}>
              <h3 className={styles.convenienceAtYour}>
                Convenience at your Fingertips
              </h3>
              <div className={styles.goneAreThe}>
                Gone are the days of mundane tasks. With home automation,
                control lighting, temperature, and appliances with just a tap on
                your smartphone or a simple voice command. Experience the luxury
                of having your home respond to your needs without lifting a
                finger.
              </div>
            </div>
            <div className={styles.enhancedSecurityParent}>
              <h3 className={styles.enhancedSecurity}>Enhanced Security</h3>
              <div className={styles.peaceOfMind}>
                Peace of mind is not a luxury; it's a necessity. Home automation
                elevates your home's security with smart locks, surveillance
                cameras, and motion sensors, all integrated into a seamless
                system that you can monitor from anywhere in the world.
              </div>
            </div>
          </div>
          <div className={styles.benefitsGrid1}>
            <div className={styles.energyEfficiencyParent}>
              <h3 className={styles.energyEfficiency}>Energy Efficiency</h3>
              <div className={styles.embraceSustainabilityWith}>
                Embrace sustainability with smart thermostats and
                energy-efficient appliances. Home automation systems optimize
                energy usage, reduce your carbon footprint, and can
                significantly lower your utility bills.
              </div>
            </div>
            <div className={styles.comfortAndEntertainmentParent}>
              <h3 className={styles.comfortAndEntertainment}>
                Comfort and Entertainment
              </h3>
              <div className={styles.yourHomeShould}>
                Your home should be your sanctuary. Home automation systems
                offer personalized comfort settings and integrate entertainment
                systems for a unique experience tailored just for you and your
                family.
              </div>
            </div>
          </div>
          <div className={styles.benefitsGrid2}>
            <div className={styles.easyInstallationParent}>
              <h3 className={styles.easyInstallation}>Easy Installation</h3>
              <div className={styles.thinkItsComplicated}>
                Think it's complicated? Think again. Apple HomeKit allows a
                smooth and hassle-free installation process, making your
                transition to a smart home as seamless as possible.
              </div>
            </div>
            <div className={styles.tailoredToYourLifestyleParent}>
              <h3 className={styles.tailoredToYour}>
                Tailored to Your Lifestyle
              </h3>
              <div className={styles.everyHomeIs}>
                Every home is unique, and so are your needs. Apple HomeKit is
                designed to fit your lifestyle, ensuring that your home
                automation system is the perfect match for you.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.revolution}>
        <div className={styles.revolutionContent}>
          <img
            className={styles.image22Icon}
            loading="lazy"
            alt=""
            src="/image22.png"
          />
        </div>
        <div className={styles.revolutionContent1}>
          <div className={styles.joinRevolution}>
            <h1 className={styles.howDoesIt}>How Does It Work?</h1>
            <div className={styles.homeAutomationIs}>
              Home automation is a network of hardware, communication, and
              electronic interfaces that work to integrate everyday devices with
              the Internet. Each device has sensors and is connected through
              Wi-Fi, allowing you to control them from your smartphone or tablet
              regardless of your location.
            </div>
          </div>
          <div className={styles.joinRevolution1}>
            <h3 className={styles.joinTheSmart}>
              Join the Smart Home Revolution
            </h3>
            <div className={styles.stepIntoThe}>
              Step into the future and transform your living experience. Embark
              on a journey to a smarter, more efficient, and more comfortable
              home.
            </div>
          </div>
          <button className={styles.button4} onClick={() => navigate('/dashboard')}>
            <div className={styles.label7}>Get Started</div>
          </button>
        </div>
      </section>
      <HomepageSectionComponent sectionNo={2} sectionTitle="Why Apple HomeKit"></HomepageSectionComponent>
      <section className={styles.pinnaqleWorld}>
        <div className={styles.pinnaqleIntro}>
          <div className={styles.worldWelcome}>
            <h1 className={styles.welcomeToThe1}>
              Welcome to the World of Pinnaqle Home
            </h1>
            <h3 className={styles.whereInnovationMeets}>
              — Where innovation meets comfort
            </h3>
          </div>
          <div className={styles.digitalEra}>
            <div className={styles.inARapidly}>
              In a rapidly evolving digital era, the way we interact with our
              living spacesis transforming. Apple HomeKit is at the forefront of
              this revolution, offering a seamless, secure, and sophisticated
              approach to home automation. Let's explore why Apple HomeKit
              stands head and shoulders above the rest.
            </div>
          </div>
        </div>
        <div className={styles.deviceIntegrationParent}>
          <div className={styles.deviceIntegration}>
            <div className={styles.integrationPoints}>
              <h3 className={styles.seamlessIntegrationAcross}>
                Seamless Integration Across All Devices
              </h3>
              <div className={styles.unifiedEcosystemAppleContainer}>
                <p className={styles.unifiedEcosystemAppleHomek}>
                  <b className={styles.unifiedEcosystem}>Unified Ecosystem:</b>
                  <span>
                    {" "}
                    Apple HomeKit is designed to work flawlessly with all Apple
                    devices. Whether you're using an iPhone, iPad, Mac, or Apple
                    Watch, control of your home is at your fingertips.
                  </span>
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.extensiveCompatibilityWith}>
                  <b className={styles.extensiveCompatibility}>
                    Extensive Compatibility:
                  </b>
                  <span>
                    {" "}
                    With a growing list of compatible devices, HomeKit
                    integrates with a wide range of smart home products,
                    ensuring that you have the best and most diverse options for
                    your home.
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.integrationPoints1}>
              <h3 className={styles.unmatchedSecurityAnd}>
                Unmatched Security and Privacy
              </h3>
              <div className={styles.endToEndEncryptionAppleContainer}>
                <p className={styles.endToEndEncryptionAppleI}>
                  <b className={styles.endToEndEncryption}>
                    End-to-End Encryption:
                  </b>
                  <span>
                    {" "}
                    Apple is synonymous with privacy and security. HomeKit
                    employs industry-leading encryption to ensure that your data
                    and privacy are always protected.
                  </span>
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.noPersonalDataTrackingUnl}>
                  <b
                    className={styles.noPersonalData}
                  >{`No Personal Data Tracking: `}</b>
                  <span>
                    Unlike other systems, Apple HomeKit doesn’t track your
                    personal data for advertising. Your home, your data, your
                    privacy.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.userExperience}>
            <div className={styles.experiencePoints}>
              <h3 className={styles.simplicityAndConvenience}>
                Simplicity and Convenience
              </h3>
              <div className={styles.intuitiveInterfaceApplesContainer}>
                <p className={styles.intuitiveInterfaceApplesH}>
                  <b className={styles.intuitiveInterface}>
                    Intuitive Interface:
                  </b>
                  <span>
                    {" "}
                    Apple's hallmark is its user-friendly interface. HomeKit
                    takes this a step further, offering an intuitive and
                    straightforward way to manage your smart home.
                  </span>
                </p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.voiceControlWithSiriJust}>
                  <b
                    className={styles.voiceControlWith}
                  >{`Voice Control with Siri: `}</b>
                  <span>
                    Just say the word, and Siri does the rest. Control your home
                    with simple voice commands, making it accessible to everyone
                    in the family.
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.experiencePoints1}>
              <h3 className={styles.automationAndPersonalization}>
                Automation and Personalization
              </h3>
              <div className={styles.smartAutomationSetContainer}>
                <p className={styles.smartAutomationSetScenesA}>
                  <b
                    className={styles.smartAutomation}
                  >{`Smart Automation: `}</b>
                  <span>
                    Set scenes and automations easily. Wake up toa warm house
                    with your favorite music playing, or have your lights turn
                    off automatically when you leave for work.
                  </span>
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.personalizedExperienceTailo}>
                  <b className={styles.personalizedExperience}>
                    Personalized Experience:
                  </b>
                  <span>
                    {" "}
                    Tailor your smart home to your lifestyle. HomeKit learns
                    your preferences and adjusts your home environment to suit
                    your needs.
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.experiencePoints2}>
              <h3 className={styles.ecoFriendlyAndEnergy}>
                Eco-Friendly and Energy Efficient
              </h3>
              <div className={styles.reducedEnergyConsumptionContainer}>
                <p className={styles.reducedEnergyConsumptionSm}>
                  <b
                    className={styles.reducedEnergyConsumption}
                  >{`Reduced Energy Consumption: `}</b>
                  <span>
                    Smart technology means smarterenergy use. HomeKit helps in
                    reducing your carbon footprint while saving on energy bills.
                  </span>
                </p>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.ecoConsciousProductsChoose}>
                  <b className={styles.ecoConsciousProducts}>
                    Eco-Conscious Products:
                  </b>
                  <span>
                    {" "}
                    Choose from a range of products that prioritize
                    sustainability, aligning with your eco-friendly lifestyle.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button5} onClick={() => navigate('/dashboard')}>
          <div className={styles.label8}>Get Started</div>
        </button>
      </section>
      <HomepageSectionComponent sectionNo={3} sectionTitle="Why Pinnaqle Home"></HomepageSectionComponent>
      <section className={styles.simpleHome}>
        <h1 className={styles.pinnaqleHomeMakesContainer}>
          <span>{`Pinnaqle Home makes home automation simple and accessible to everyone. Any professional can design and order a system on this website in `}</span>
          <span className={styles.minutes}>15 minutes.</span>
        </h1>
        <div className={styles.heavyLifting}>
          <h1 className={styles.weHaveDone}>
            We have done all the heavy lifting for you:
          </h1>
          <div className={styles.researchedPackages}>
            <div className={styles.valuePackages}>
              <div className={styles.valueFocus}>
                We have rigorously researched, screened, and tested equipment compatible with Apple HomeKit.
              </div>
              <div className={styles.valueFocus}>
                We paid particular attention to value for money.
              </div>

            </div>
            <div className={styles.packageAssembly}>
              <h3 className={styles.weAssembledPackages}>
                We assembled packages of equipment across all functions that are
                good quality, provide adequate functionality, and work well
                together.
              </h3>
            </div>
          </div>
        </div>
        <h1 className={styles.ourWebsiteToolContainer}>
          <p className={styles.ourWebsiteToolWillExpertly}>
            <span
              className={styles.ourWebsiteTool}
            >{`Our website tool will `}</span>
            <span className={styles.expertlyGuideYou}>expertly guide you</span>
            <span>
              {" "}
              through your home and allow you to select functionality that you
              desire.
            </span>
          </p>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.fullTransparencyOfPrices}>
            <span>{`Full transparency of prices – you see the total bill live as you build your system. We offer `}</span>
            <span className={styles.budgetStandardAnd}>
              Budget, Standard, and Premium packages
            </span>
            <span className={styles.allAreVery}>
              {" "}
              – all are very cost effective.
            </span>
          </p>
          <p className={styles.blankLine6}>&nbsp;</p>
          <p className={styles.anyTechnicalDetails}>
            Any technical details and requirements can be easily checked to
            avoid mistakes and compatibility issues.
          </p>
          <p className={styles.blankLine7}>&nbsp;</p>
          <p className={styles.youWillGetACustomisedCust}>
            <span className={styles.youWillGet}>{`You will get a `}</span>
            <span className={styles.customisedCustomerBrochure}>
              customised customer brochure
            </span>
            <span className={styles.span}>{`, `}</span>
            <span className={styles.installationInstructionsAnd}>
              installation instructions, and technical information
            </span>
            <span>
              {" "}
              – all tailored to your system. We can label your equipment and
              deliver to your site.
            </span>
          </p>
          <p className={styles.blankLine8}>&nbsp;</p>
          <p className={styles.thereIsAn}>
            There is an option to pre-program your equipment, or you can do it
            yourself if you are a technical type.
          </p>
          <p className={styles.blankLine9}>&nbsp;</p>
          <p className={styles.pinnaqleHomeIs2}>
            Pinnaqle Home is the simplest and best way to order your home
            automation system.
          </p>
        </h1>
        <button className={styles.button6} onClick={() => navigate('/dashboard')}>
          <div className={styles.label9}>Get Started</div>
        </button>
      </section>
    </div>
  );
};

export default Hompage;