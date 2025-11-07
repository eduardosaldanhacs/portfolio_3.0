function Footer() {
  return (
    <footer id="rodape" className="bg-black3">
      <div className="container">
        <div className="col-12 border-top border-2 border-dark">
          <div className="row justify-content-between align-items-center py-5">
            <div className="col-6 text-white text-start fs-7">
              Eduardo Saldanha &copy; 2025. Todos os direitos reservados.
            </div>
            <div className="col-6 text-white text-end">
              <a href="#sobre-mim">
                <i
                  className="fa-solid fa-chevron-up fs-3 text-blue"
                  title="Voltar ao topo"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
