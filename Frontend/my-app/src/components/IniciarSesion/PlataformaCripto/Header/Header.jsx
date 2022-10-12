import './Header.css'
export const Header = () => {
    return (
        <div className="headerContainer">
            <img
              className="imgLogoPlatform"
              src="/images/logo.png"
              alt="Logo CriptoAlgo"
            />
            <span className="btn btn-danger buttonQuit">Salir</span>
        </div>
    );
}

