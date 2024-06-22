function Content() {
  return (
    <div>
      <div className="quality_area">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6">
              <div className="section_title text-center">
                <h3>Make your life easier</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-find"></i>
                </div>
                <h3>Essential medicines for home</h3>
                <p>
                  Health is a treasure, and having the right medications at your
                  fingertips can make a crucial difference in times of need.
                  While it's imperative to consult a doctor having a
                  well-stocked medicine cabinet at home can offer comfort.
                </p>
                <a
                  href="https://watchdoq.com/blog/post/17-essential-medicines-you-should-keep-at-home"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-find"></i>
                </div>
                <h3>Managing Hypertension and stress</h3>
                <p>
                  Hypertension is a prevalent issue in India, often termed the
                  “silent killer” due to its asymptomatic nature. It
                  significantly increases the risk of heart attacks and kidney
                  problems.
                </p>
                <a
                  href="https://www.ncbi.nlm.nih.gov/books/NBK547161/"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-doctor"></i>
                </div>
                <h3>Breaking common health myths</h3>
                <p>
                  Dispelling health myths is essential for making informed
                  decisions about our well-being. Let's unravel common
                  misconceptions and uncover the truth behind them to empower
                  healthier choices.
                </p>
                <a
                  href="https://gleneagles.com.sg/health-plus/article/10-health-myths-debunked"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-customer-service"></i>
                </div>
                <h3>First aid essentials</h3>
                <p>
                  ‌A first aid kit is a must in any house. It keeps you prepared
                  for in-home emergencies such as cuts, scrapes, and other
                  injuries. Whether you buy one or build one yourself, here are
                  the items you should keep in your home’s first aid kit.
                </p>
                <a
                  href="https://www.webmd.com/first-aid/features/tip-sheet-what-to-keep-in-your-first-aid-kit"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-find"></i>
                </div>
                <h3>Side effects of medication</h3>
                <p>
                  Drug side effects can vary based on patient, drug, and
                  environmental factors. Discover how these factors influence
                  and learn effective strategies to manage potential side
                  effects.
                </p>
                <a
                  href="https://www.drugs.com/article/drug-side-effects.html"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_quality">
                <div className="icon">
                  <i className="flaticon-doctor"></i>
                </div>
                <h3>Chronic Disease Management</h3>
                <p>
                  A chronic condition is an illness that lasts for at least 6
                  months. Effective management of chronic conditions can help
                  improve your overall health and prevent or delay
                  complications.
                </p>
                <a
                  href="https://www.healthdirect.gov.au/management-of-chronic-conditions"
                  className="learn_more_btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Emergency_contact">
        <div className="Emergency_contact_inner ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="single_emergency">
                  <div className="info">
                    <span>We are here for you</span>
                    <h3>Book Appointment</h3>
                  </div>
                  <div className="info_button">
                    <a href="#" className="boxed-btn3-white">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_emergency align-items-center d-flex justify-content-end">
                  <div className="icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="info">
                    <span>Emergency Medical Care</span>
                    <h3>911</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
