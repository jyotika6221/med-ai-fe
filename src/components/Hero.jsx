function Hero() {

    return (
        <div>
            <div style={{ height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div style={{ backgroundImage: 'url(./img/banner/banner.png)', height: '100vh' }} className="d-flex align-items-center overlay px-5">
                    <div className="slider_text">
                        <span>the best medical center</span>
                        <h3> <span>Bringing health</span> <br />
                            to life for the whole family.</h3>
                        <a href="#" className="boxed-btn5">Discover More
                        </a>
                    </div>
                </div>
            </div>

            <div className="welcome_clicnic_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome_thumb">
                                <div className="thumb_1">
                                    <img src="./img/google-gemini.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="welcome_docmed_info">
                                <h3>Welcome To
                                    <span>Modern Clinic.</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.</p>
                                <ul>
                                    <li> <i className="flaticon-verified"></i> Lorem ipsum dolor sit amet </li>
                                    <li> <i className="flaticon-verified"></i> Consectetur adipisicing elit, sed do</li>
                                    <li> <i className="flaticon-verified"></i> Eiusmod tempor incididunt ut labore </li>
                                </ul>
                                <a href="about.html" className="boxed-btn6">About us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
