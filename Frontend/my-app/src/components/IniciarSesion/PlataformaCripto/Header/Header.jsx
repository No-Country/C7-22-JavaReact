import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../../../../hooks/useAuth';
export const Header = () => {

    const {setAuth} = useAuth();

    const navigate = useNavigate();


    const quitButton = () => {
        localStorage.removeItem("token")
        navigate("/iniciarsesion")
        setAuth({})
    }

    return (
        <div className="headerContainer">
            <span onClick={quitButton} className="btn btn-danger buttonQuit">Salir</span>
        </div>
    );
}

