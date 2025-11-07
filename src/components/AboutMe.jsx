import eduardoFigure from "../assets/eduardo-figure.png";
import mysqlLogo from "../assets/mysql.png";

function AboutMe() {
  return (
    <section id="sobre-mim" className="rgb text-white py-45">
      <div className="container px-5">
        <div className="col-12 py-90" id="sobre-mim-titulo">
          <div className="row align-items-center justify-content-between pt-1">
            {/* Informações do perfil  */}
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
              id="eduardo-perfil"
            >
              <div className="d-flex flex-column justify-content-center align-items-xxl-start align-items-xl-start align-items-lg-start align-items-md-start align-items-sm-center align-items-center">
                <img
                  src={eduardoFigure}
                  alt="Imagem do Eduardo"
                  className="borda-50"
                  id="img-eduardo"
                />
                <h1 className="fw-bold fs-1 mt-2">Eduardo Saldanha</h1>
                <h3 className="text-blue fw-light">Desenvolvedor Web</h3>
                <div id="resume-icons">
                  <a
                    href="https://www.linkedin.com/in/eduardo-saldanha-94b678217/"
                    className="bg-black4 px-1 me-2 fs-4 "
                    target="_blank"
                  >
                    <i className="fa-brands text-white fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/eduardosaldanhacs"
                    className="px-1 me-2 bg-black4 fs-4 "
                    target="_blank"
                  >
                    <i className="fa-brands fa-github text-white"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/_eduardogss/?hl=pt-br"
                    className="px-1 me-2 bg-black4 fs-4"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Ícones --> */}
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-5 mt-5"
              id="habilidades-principais"
            >
              <div className="row justify-content-center">
                <div className="col-5">
                  <div className="d-flex flex-column">
                    <span className="icon-title fs-3">Laravel</span>
                    <i className="fa-brands fa-laravel"></i>
                  </div>
                </div>
                <div className="col-5">
                  <div className="d-flex flex-column">
                    <span className="icon-title fs-3">PHP</span>
                    <i className="fa-brands fa-php"></i>
                  </div>
                </div>
                <div className="col-5">
                  <div className="d-flex flex-column">
                    <span className="icon-title fs-3">JavaScript</span>
                    <i className="fa-brands fa-js"></i>
                  </div>
                </div>
                <div className="col-5">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="icon-title fs-3">MySQL</span>
                    <img src={mysqlLogo} alt="" id="fa-mysql" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 py-90" id="sobre-mim-texto">
          <div className="row align-items-center justify-content-center">
            <div className="col-8">
              <h2 className="text-center text-white mb-4 text-uppercase py-4 fw-light ls-3">
                Sobre mim
              </h2>
            </div>
            <div
              className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mt-4"
              id="texto-sobre"
            >
              <p className="fs-6 text-start">
                Me chamo <span className="text-blue">Eduardo</span>, tenho 24
                anos e resido em <span className="text-blue">Porto Alegre</span>
                . Cultivo uma profunda paixão pelo mundo Tech, maravilhando-me
                constantemente com a interação entre o ser humano e a
                tecnologia. A forma que criamos, diariamente algo novo, através
                da lógica, da programação e do pensamento abstrato, faz com que
                eu sinta que estou na área certa.
              </p>
              <p className="fs-6">
                No momento, estou no segundo semestre de{" "}
                <span className="text-blue">Engenharia de Software</span> na
                PUCRS, estudo presencialmente no período da noite. Além
                disso, também curso{" "}
                <span className="text-blue">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                na Uniasselvi(EAD), onde estou no quinto semestre. Por fora,
                faço cursos pela plataforma Udemy, focando no{" "}
                <span className="text-blue">Desenvolvimento Fullstack</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
