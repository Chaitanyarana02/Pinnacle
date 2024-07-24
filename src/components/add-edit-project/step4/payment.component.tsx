import styles from "./payment.module.css"

const Payment = () => {
  return (
    <div className={styles.paymentPage}>
    
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
                    alt=""
                    src="./Vector.svg"
                  />
                </div>
                <div className={styles.projectStructure}>Project Structure</div>
                <img
                    alt=""
                    src="/edit.svg"
                  />
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.radiobgParent}>
                  <div className={styles.radiobg} />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/Vector.svg"
                  />
                </div>
                <div className={styles.projectStructure}>Project Functions</div>
                <img
                    alt=""
                    src="/edit.svg"
                  /> 
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent1}>
                  <div className={styles.radiobgParent}>
                    <div className={styles.radiobg} />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/Vector.svg"
                    />
                    
                  </div>
                  <div className={styles.projectTechDetails}>
                    Project Tech Details
                  </div>
                  <img
                    alt=""
                    src="/edit.svg"
                  />
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.radiobgParent1}>
                      <div className={styles.radiobg3} />
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="./Icon.svg"
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
                      <img className={styles.icon} alt="" src="./Icon.svg" />
                    </div>
                    <div className={styles.finalPayment}>Final Payment</div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.radiobgParent3}>
                    <div className={styles.radiobg5} />
                    <img className={styles.icon} alt="" src="./Icon.svg" />
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
                  src="/file-download-03.svg"
                />
                <div className={styles.downloadTechSpecification}>
                  Download Tech Specification Sheet
                </div>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.fileDownload03Icon1}
                  alt=""
                  src="/file-download-03.svg"
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
                <p className={styles.pMessage}>
                Review the contract details and electronically sign to secure your dream smart home.
                </p>
                <button className={styles.button3}>
                <div className={styles.label}>Review & Sign Contract</div>
              </button>
              <p className={styles.pMessage}>
              Want to sign physically? 
              </p>
              <button className={styles.button4}>
                <img src="/printer.svg"/>
                <div className={styles.labelBlue}>Print Contract</div>
              </button>
              </div>
            </div>
            <div className={styles.frameParent13}>
              <div className={styles.dFlexColum}>
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