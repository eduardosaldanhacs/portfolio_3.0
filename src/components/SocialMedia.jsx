function SocialMedia() {
    return (
        <section id="redes-sociais" className="bg-black3 py-90">
        <div className="container">
          <div className="col-12">
            <div className="row justify-content-between align-items-center">
              <h2 className="text-xxl-start text-xl-start text-lg-start text-md-start text-sm-center text-center text-white mb-4 text-uppercase fw-light ls-3">
                Contato
              </h2>
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                id="contato-perfil"
              >
                <div className="d-flex justify-content-center align-items-sm-center align-items-md-start align-items-lg-start align-items-xl-start align-items-xxl-start align-items-center flex-column">
                  <p className="text-center text-white-50 fs-7 m-1">
                    <i className="fa-solid fa-envelope text-blue"></i>{" "}
                    eduardosaldanhacs@gmail.com
                  </p>
                  <p
                    className="text-center text-white-50 fs-7 m-1"
                    // onclick="abrirWhatsapp()"
                    role="button"
                  >
                    <i
                      className="fa-brands fa-whatsapp text-blue"
                      // onclick="abrirWhatsapp()"
                      role="button"
                    ></i>{" "}
                    +55 (51) 998695019
                  </p>
                  <p className="text-center text-white-50 fs-7 m-1">
                    <i className="fa-solid fa-location-dot text-blue"></i> Porto
                    Alegre - RS
                  </p>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                id="redes-sociais-perfil"
              >
                <div
                  className="d-flex justify-content-center justify-content-sm-center justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end align-items-sm-center align-items-md-end align-items-lg-end align-items-xl-end align-items-xxl-end align-items-center"
                  id="redes-sociais-footer"
                >
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/eduardo-saldanha-94b678217/"
                  >
                    <i className="fa-brands text-blue fs-3 ms-3 fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/eduardosaldanhacs"
                  >
                    <i className="fa-brands text-blue fs-3 ms-3 fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/_eduardogss/?hl=pt-br"
                  >
                    <i className="fa-brands text-blue fs-3 ms-3 fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@eduardosaldanhadev"
                  >
                    <i className="fa-brands text-blue fs-3 ms-3 fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SocialMedia