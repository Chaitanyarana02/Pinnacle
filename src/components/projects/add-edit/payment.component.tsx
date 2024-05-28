import styles from "./payment.module.css"

const Payment = () => {
  return (
    <div className={styles.paymentPage}>
      <header className={styles.header1}>
        <h1 className={styles.testProject}>Test Project</h1>
        <div className={styles.xWrapper}>
          <img
            className={styles.xIcon}
            loading="lazy"
            alt=""
            src="/x.svg"
          />
        </div>
      </header>
      <section className={styles.paymentPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.congratulationsWrapper}>
            <h1 className={styles.congratulations}>{`Congratulations! `}</h1>
          </div>
          <div
            className={styles.projectCompleteReview}
          >{`Project complete! Review contract & pay to get your smart home shipped. Track delivery & receive a rebate upon arrival`}</div>
        </div>
      </section>
      <div className={styles.paymentPageChild}>
        <div className={styles.frameChild} />
      </div>
      <section className={styles.frameSection}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.projectSummaryParent}>
              <input
                className={styles.projectSummary}
                placeholder="Project Summary"
                type="text"
              />
              <div className={styles.frameItem} />
            </div>
            <div className={styles.testProjectParent}>
              <h3 className={styles.testProject1}>Test Project</h3>
              <div className={styles.residentialParent}>
                <div className={styles.residential}>Residential</div>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.flat}>Flat</div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.newBuild}>New Build</div>
              </div>
              <div className={styles.addressParent}>
                <div className={styles.address}>Address:</div>
                <div className={styles.kemmerOverpassSuite}>
                  39547 Kemmer Overpass Suite 971
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.radiobgParent}>
                  <div className={styles.radiobg} />
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.projectStructure}>Project Structure</div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.radiobgGroup}>
                  <div className={styles.radiobg1} />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.projectFunctions}>Project Functions</div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.radiobgContainer}>
                    <div className={styles.radiobg2} />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.projectTechDetails}>
                    Project Tech Details
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.radiobgParent1}>
                      <div className={styles.radiobg3} />
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                    <div className={styles.contractApproval}>
                      Contract Approval
                    </div>
                    <div className={styles.pending}>PENDING</div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.radiobgParent2}>
                      <div className={styles.radiobg4} />
                      <img className={styles.icon1} alt="" src="/icon-1.svg" />
                    </div>
                    <div className={styles.finalPayment}>Final Payment</div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.radiobgParent3}>
                    <div className={styles.radiobg5} />
                    <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  </div>
                  <div className={styles.delivery}>Delivery</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameParent9}>
                <div className={styles.frameParent10}>
                  <div className={styles.finalPriceWrapper}>
                    <div className={styles.finalPrice}>Final Price:</div>
                  </div>
                  <div className={styles.div}>£2,350</div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.rebateWrapper}>
                    <div className={styles.rebate}>Rebate:</div>
                  </div>
                  <div className={styles.div1}>£164</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <img
                  className={styles.fileDownload03Icon}
                  loading="lazy"
                  alt=""
                  src="/filedownload03.svg"
                />
                <div className={styles.downloadTechSpecification}>
                  Download Tech Specification Sheet
                </div>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.fileDownload03Icon1}
                  alt=""
                  src="/filedownload03-1.svg"
                />
                <div className={styles.downloadSalesBrochure}>
                  Download Sales Brochure
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent12}>
            <div className={styles.frameWrapper}>
              <div className={styles.reviewSignContractParent}>
                <h1
                  className={styles.reviewSign}
                >{`Review & Sign Contract`}</h1>
                <div className={styles.contractSignedSuccessfully}>
                  Contract Signed Successfully
                </div>
              </div>
            </div>
            <div className={styles.frameParent13}>
              <div className={styles.paymentParent}>
                <h1 className={styles.payment}>Payment</h1>
                <div className={styles.oncePaymentIs}>
                  Once payment is received, the package will be prepared and
                  shipped to you
                </div>
              </div>
              <div className={styles.deliveryAddress39547Container}>
                <p className={styles.deliveryAddress}>{`Delivery Address: `}</p>
                <p className={styles.kemmerOverpassSuite971}>
                  <b>39547 Kemmer Overpass Suite 971</b>
                </p>
              </div>
              <button className={styles.button2}>
                <div className={styles.label}>Proceed to Pay</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;