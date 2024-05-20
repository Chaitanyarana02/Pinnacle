import styles from './homeOwners.module.css'
const HomeOwners = () => {
  return (
    <div>
      <main className={styles.autoLayoutVerticalParent}>
        <div className={styles.autoLayoutVertical}>
          <h1 className={styles.homeowners}>Homeowners</h1>
        </div>
        <section className={styles.heySiriWhatContainer}>
          <p className={styles.blankLine}>
            Hey Siri, what is the best home automation package for Apple, that
            is powerful, future proof, super convenient and a good value for
            money?
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p
            className={styles.blankLine}
          >{`Are you planning a home renovation or refurbishment?  `}</p>
          <p
            className={styles.blankLine}
          >{`This is the best time to install an Apple HomeKit system. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p
            className={styles.notInstallingA}
          >{`Not installing a future-proof smart home system now will lower your living experience, or, if you rent or sell you property, may disadvantage your earnings. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Pinnaqle Home supplies excellent home automation packages for the
            Apple ecosystem.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            <span>{`What functionality can I get? `}</span>
            <span className={styles.someExamples}>Some examples:</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Hey Siri,</p>
          <ul className={styles.areThereAnyOpenWindowsIn}>
            <li className={styles.areThereAnyOpenWindowsIn1}>
              <span>Are there any open windows in the house?</span>
            </li>
            <li className={styles.closeAllBlindsOnTheGround}>
              <span>Close all blinds on the ground floor.</span>
            </li>
            <li className={styles.whatIsTheTemperatureInThe}>
              <span>What is the temperature in the baby room?</span>
            </li>
            <li className={styles.openAllBlindsInTheHouse}>
              <span>Open all blinds in the house</span>
            </li>
            <li className={styles.setTheLightInTheLibraryT}>
              <span>Set the light in the library to 50%.</span>
            </li>
          </ul>
          <p className={styles.blankLine5}>&nbsp;</p>
          <p className={styles.siriWillInform}>
            Siri will inform you if, for example:
          </p>
          <ul className={styles.aDoorOrWindowIsLeftOpen}>
            <li className={styles.aDoorOrWindowIsLeftOpen1}>
              <span>A door or window is left open.</span>
            </li>
            <li className={styles.thereIsALeakInTheKitchen}>
              <span>There is a leak in the kitchen.</span>
            </li>
            <li className={styles.airQualityInTheLivingRoom}>
              <span>Air quality in the living room is not good.</span>
            </li>
            <li className={styles.aSmokeAlarmWentOff}>
              <span>A smoke alarm went off</span>
            </li>
          </ul>
        </section>
        <section className={styles.pleaseNoteWrapper}>
          <div className={styles.pleaseNoteThat}>
            Please note that Pinnaqle Home system is designed for professional
            use – by architects, designers, and builders. Please ask your
            architect, designer, or builder to consider Pinnaqle Home for your
            project.
          </div>
        </section>
        <button className={styles.button}>
          <div className={styles.label}>Get Started</div>
        </button>
      </main>
    </div>
  );
}

export default HomeOwners;
