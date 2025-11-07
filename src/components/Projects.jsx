import saborGauderioImage from "../assets/sabor_gauderio.png";
import miniErpImage from "../assets/mini-erp.png";
import quizLolImage from "../assets/quiz_lol.png";
import barbeariaEstiloImage from "../assets/barbearia_estilo.png";
import controleFinanceiro from "../assets/controle_financeiro2.png";
import myTask from "../assets/mytask.png";

function Projects() {
    return (
          <section id="projetos" className="bg-blur py-90">
            <div className="container">
              <div className="row justify-content-center">
                <h2 className="text-center text-white text-uppercase fw-light ls-3 mb-5">
                  Projetos
                </h2>
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="5"
                      aria-label="Slide 6"
                    ></button>
                    {/* <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="6"
                      aria-label="Slide 7"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="7"
                      aria-label="Slide 8"
                    ></button> */}
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img
                            className="d-block w-100 mx-auto img-fluid"
                            src={saborGauderioImage}
                            alt="Sabor Gaudério"
                          />
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">
                                    Sabor Gaudério
                                  </h5>
                                  <p className="text-white">
                                    Site e Admin para uma pizzaria fictícia.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/sabor_gauderio"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar<i>(em andamento)</i>:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/sabor_gauderio"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img
                            className="d-block w-100 mx-auto img-fluid"
                            src={miniErpImage}
                            alt="Mini ERP"
                          />
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">Mini ERP</h5>
                                  <p className="text-white">
                                    Um sistema para controle de estoque e vendas.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/mini-erp"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/mini-erp"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img
                            className="d-block w-100 mx-auto img-fluid"
                            src={quizLolImage}
                            alt="Controle Financeiro"
                          />
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">Quiz LOL</h5>
                                  <p className="text-white">
                                    Quiz sobre o jogo League of Legends.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/quiz_lol"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/quiz_lol"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img
                            className="d-block w-100 mx-auto img-fluid"
                            src={barbeariaEstiloImage}
                            alt="Barbearia Estilo"
                          />
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">
                                    Barbearia Estilo
                                  </h5>
                                  <p className="text-white">
                                    Site e Admin para uma barbearia fictícia
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/barber_system"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/barbearia_estilo/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img className="d-block w-100 mx-auto img-fluid" src={controleFinanceiro} alt="Controle Financeiro"/>
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">
                                    Controle Financeiro
                                  </h5>
                                  <p className="text-white">
                                    Sistema para gerenciar gastos e receitas.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/controle_financeiro"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/controle_financeiro/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img className="d-block w-100 mx-auto img-fluid" src={myTask} alt="MyTask"/>
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">MyTask</h5>
                                  <p className="text-white">
                                    Organizador de tarefas simples e prático.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/mytask"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/mytask/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img className="d-block w-100 mx-auto img-fluid" src="https://eduardosaldanha.online/imagens/poa10.png" alt="Barco Porto Alegre 10"/>
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">POA10</h5>
                                  <p className="text-white">
                                    Clone do site do barco Porto Alegre 10.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/BARCOPOA10_CLONE"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/poa10"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
    
                    {/* <div className="carousel-item">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                          <img className="d-block w-100 mx-auto img-fluid" src="https://eduardosaldanha.online/imagens/jd_iptv.png" alt="Jd IPTV"/>
                          <div className="carousel-caption p-3 rounded">
                            <div className="row justify-content-center align-items-center">
                              <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-10 col-10 text-center">
                                <div className="bg-dark text-center w-100 px-3 py-3 d-flex flex-column justify-content-center align-items-center mx-auto bg-opacity-75 rounded">
                                  <h5 className="text-blue fw-bold">JD IPTV</h5>
                                  <p className="text-white">
                                    Site fictício de venda de IPTV.
                                  </p>
                                  <p className="text-white">
                                    Repositório:{" "}
                                    <a
                                      href="https://github.com/eduardosaldanhacs/JD_IPTV"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                    Aplicação no ar:{" "}
                                    <a
                                      href="https://eduardosaldanha.online/jd_iptv"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      Clique aqui
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
    
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
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
                    data-bs-target="#carouselExampleIndicators"
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
          </section>
    )
}

export default Projects