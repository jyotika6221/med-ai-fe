function Hero() {
  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: "url(./img/banner/banner.png)",
            height: "100vh",
            position: "relative",
          }}
          className="d-flex align-items-center overlay px-5"
        >
          <div className="slider_text">
            <span>Smart Medication Adherence:</span>
            <h3>
              <span>Your AI-Driven Health Companion</span> <br />
            </h3>
          </div>
        </div>
      </div>

      <div className="welcome_clicnic_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="welcome_thumb">
                <div className="thumb_1">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="welcome_docmed_info">
                <h3>
                  Welcome To
                  <span>Med-AI</span>
                </h3>
                <p>
                  Welcome to Med-AI, where AI meets healthcare innovation. We're
                  dedicated to revolutionizing the healthcare system by
                  leveraging artificial intelligence for social impact. Our
                  mission is to enhance medical diagnostics, treatment planning,
                  and healthcare delivery through AI technologies
                  making it more accessible, efficient, and personalized. 
                </p>
                <ul>
                  <li>
                    <i className="flaticon-verified"></i> Personalized medicine
                    reminders
                  </li>
                  <li>
                    <i className="flaticon-verified"></i> Prescription Summary
                  </li>
                  <li>
                    <i className="flaticon-verified"></i> Booking appointments
                  </li>
                  <li>
                    <i className="flaticon-verified"></i> Multi-language support
                  </li>
                </ul>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
