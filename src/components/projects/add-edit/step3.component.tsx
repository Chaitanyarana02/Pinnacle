import styles from "./step3.module.css";



const Step3 = () => {
  return (
    <div className={styles.step3}>
      <div className={styles.projectStructureReviewWrapper}>
        <h2 className={styles.projectStructureReview}>
          Project Structure Review
        </h2>
      </div>
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <nav className={styles.selectedAreasParent}>
              <b className={styles.selectedAreas}>Selected areas</b>
              <b className={styles.selectedFloors}>Selected floors</b>
              <b className={styles.selectedRooms}>Selected rooms</b>
            </nav>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.houseParent}>
              <b className={styles.house}>House</b>
              <div className={styles.houseGroup}>
                <div className={styles.house1}>House</div>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.indoor}>Indoor</div>
              </div>
            </div>
            <div className={styles.groundFloorParent}>
              <b className={styles.groundFloor}>Ground Floor</b>
              <b className={styles.firstFloor}>First Floor</b>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.kitchenParent}>
                <b className={styles.kitchen}>Kitchen</b>
                <div className={styles.frameInner} />
                <b className={styles.bathroom}>Bathroom</b>
                <div className={styles.rectangleDiv} />
                <b className={styles.entranceHall}>Entrance Hall</b>
                <div className={styles.frameChild1} />
                <b className={styles.cinema}>Cinema</b>
                <div className={styles.frameChild2} />
                <b className={styles.utilityRoom}>Utility Room</b>
              </div>
              <div className={styles.kitchenGroup}>
                <b className={styles.kitchen1}>Kitchen</b>
                <div className={styles.frameChild3} />
                <b className={styles.guestBedroom}>Guest Bedroom</b>
                <div className={styles.frameChild4} />
                <b className={styles.bathroom1}>Bathroom</b>
                <div className={styles.frameChild5} />
                <b className={styles.storeRoom}>Store room</b>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild6} />
          <div className={styles.frameParent2}>
            <div className={styles.manCaveParent}>
              <b className={styles.manCave}>Man Cave</b>
              <div className={styles.shedParent}>
                <div className={styles.shed}>Shed</div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.indoor1}>Indoor</div>
              </div>
            </div>
            <b className={styles.groundFloor1}>Ground floor</b>
            <div className={styles.tvRoomParent}>
              <b className={styles.tvRoom}>TV room</b>
              <div className={styles.frameChild7} />
              <b className={styles.studyRoom}>Study room</b>
            </div>
          </div>
        </section>
        <section className={styles.rectangleGroup}>
          <div className={styles.frameChild8} />
          <div className={styles.frameParent3}>
            <div className={styles.carGarageParent}>
              <b className={styles.carGarage}>Car Garage</b>
              <div className={styles.garageParent}>
                <div className={styles.garage}>Garage</div>
                <div className={styles.ellipseFrame}>
                  <div className={styles.frameChild9} />
                </div>
                <div className={styles.indoor2}>Indoor</div>
              </div>
            </div>
            <b className={styles.groundFloor2}>Ground floor</b>
            <div className={styles.carParkingParent}>
              <b className={styles.carParking}>Car Parking</b>
              <div className={styles.frameChild10} />
              <b className={styles.storeRoom1}>Store room</b>
            </div>
          </div>
        </section>
        <section className={styles.rectangleContainer}>
          <div className={styles.frameChild11} />
          <div className={styles.frameParent4}>
            <div className={styles.frontGardenParent}>
              <b className={styles.frontGarden}>Front Garden</b>
              <div className={styles.gardenAreaParent}>
                <div className={styles.gardenArea}>Garden Area</div>
                <div className={styles.ellipseWrapper1}>
                  <div className={styles.frameChild12} />
                </div>
                <div className={styles.outdoor}>Outdoor</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent5}>
                <div className={styles.groundFloorWrapper}>
                  <b className={styles.groundFloor3}>Ground floor</b>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>--</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Step3;