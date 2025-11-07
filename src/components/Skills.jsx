
import mysqlLogo from "../assets/mysql.png";
import laravelLogo from "../assets/laravel_logo.png";
import phpLogo from "../assets/php_logo.png";
import bootstrapLogo from "../assets/bootstrap-icon.png";
import htmlLogo from "../assets/html5_logo.webp";
import cssLogo from "../assets/css3_logo.svg";
import javaScript from "../assets/javascript.png";
import ajaxLogo from "../assets/ajax_logo.webp";
import cLogo from "../assets/c_logo.png";
import jqueryLogo from "../assets/jquery_logo.png";
import javaLogo from "../assets/java_logo.webp";
import gitLogo from "../assets/git-logo.png";

function Skills() {
  return (
    <section id="habilidades" className="bg-black2 py-90">
      <div className="container">
        <div className="col-12">
          <div className="row justify-content-center align-items-center">
            <h2 className="text-center text-white mb-5 text-uppercase py-4 fw-light ls-3">
              Habilidades
            </h2>
            <div
              id="carouselHabilidades"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner text-center">
                <div className="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={laravelLogo} alt="" />
                        <span className="text-white fs-6">Laravel</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={phpLogo} alt="" />
                        <span className="text-white fs-6">PHP</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={mysqlLogo} alt="" />
                        <span className="text-white fs-6">MySQL</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={bootstrapLogo} alt="" />
                        <span className="text-white fs-6">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={htmlLogo} alt="" />
                        <span className="text-white fs-6">HTML</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={cssLogo} alt="" />
                        <span className="text-white fs-6">CSS</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={javaScript} alt=""/>
                        <span className="text-white fs-6">JavaScript</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={jqueryLogo} alt=""/>
                        <span className="text-white fs-6">jQuery</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={ajaxLogo} alt=""/>
                        <span className="text-white fs-6">AJAX</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={cLogo} alt=""/>
                        <span className="text-white fs-6">C</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={javaLogo} alt=""/>
                        <span className="text-white fs-6">Java</span>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={gitLogo} alt=""/>
                        <span className="text-white fs-6">Git</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHabilidades"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselHabilidades"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
