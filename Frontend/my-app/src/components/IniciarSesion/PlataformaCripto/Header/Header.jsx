import './Header.css'
export const Header = () => {
    return (
        <div className="headerContainer">
            <span onClick={()=>{localStorage.removeItem("token")}} className="btn btn-danger buttonQuit">Salir</span>
        </div>
    );
}

