import './PricesTableResponsive.css'
export const PricesTableResponsive = () => {
    return (
        <div className="accordion pricesTableResponsive">
        <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
            <button
                className="accordion-button buttonAccordion"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="d-flex justify-content-between">
                    <div className="titlePricesResponsive">
                        <img className="criptoCards" src="./assets/bitcoin.svg" alt="bitcoin" />
                        <h2>Bitcoin</h2>
                    </div>
                    <div className="infoPricesResponsive">
                        <p>19,003 USD</p>
                        <p>+ 0.52%</p>
                    </div>
                </div>
              </button>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                    <p>
                        Volumen:
                    </p>
                    <p>
                        $ 1,000,000
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>
                        Market cap:
                    </p>
                    <p>
                        $ 1,000,000,000
                    </p>
                </div>
                <button className="btn btn-dark">Comprar</button>
              </div>
            </div>
          </div>
          </div>
    );
}

