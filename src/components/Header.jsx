function Header() {
    return (
              <header className="bg-black fixed-top">
        <div className="header-progress"></div>
        <div className="container">
          <div className="row d-flex justify-content-evenly align-items-center mx-3">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-8 col-8">
                <a
                  className="navbar-brand text-white fs-2 text-uppercase fw-bold"
                  href="#sobre-mim"
                  id="navbar-topo"
                >
                  <span className="text-blue">&lt;</span> Eduardo Saldanha{" "}
                  <span className="text-blue">/&gt;</span>
                </a>
              </div>
              <div className="col-xxl-0 col-xl-0 col-lg-0 col-md-0 col-sm-2 col-2">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Alternar navegação"
                >
                  <span className="navbar-toggler-icon text-white"></span>
                </button>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item">
                      <a
                        className="text-white text-uppercase px-3 py-2 fs-7 nav-link"
                        href="#projetos"
                      >
                        Projetos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-white text-uppercase px-3 py-2 fs-7 nav-link"
                        href="#certificacoes"
                      >
                        Certificações
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-white text-uppercase px-3 py-2 fs-7 nav-link"
                        href="#habilidades"
                      >
                        Habilidades
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="text-white text-uppercase px-3 py-2 fs-7 nav-link"
                        href="#rodape"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}

export default Header