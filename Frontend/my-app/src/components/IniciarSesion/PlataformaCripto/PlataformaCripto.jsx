import './PlataformaCripto.css'
import { Header } from './Header/Header';
import { AsideProfile } from './AsideProfile/AsideProfile';
import { DineroDisponible } from './DineroDisponible/DineroDisponible';
import { MiPortafolio } from './MiPortafolio/MiPortafolio';
import axios from '../../../api/axios';
import { useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


export const PlataformaCripto = () => {
    const {auth, setAuth} = useAuth();
    const [user, setUser] = useState("");
    const [wallet, setWallet] = useState("");
    const navigate = useNavigate()

       if (!localStorage.getItem("token")) {
        navigate("/iniciarsesion")
       }
<<<<<<< HEAD
    }, [navigate]);


=======
  

    setAuth(localStorage.getItem("token"))
   
    
    let token = auth
   
>>>>>>> 9afa7c0c52bcd2534bb097e9d2fb152012c28455
    useEffect(() => {
      
        const GETDATA_URL= 'users/me'

        axios.get(GETDATA_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setUser(res?.data)
    
        })
    
        .catch(()=>{
            console.log("No Server Response")
        })
       
        
    
    }, [token]);

<<<<<<< HEAD
        

=======
   
>>>>>>> 9afa7c0c52bcd2534bb097e9d2fb152012c28455
    useEffect(() => {

        const GETWALLET_URL= 'wallets/me'

        axios.get(GETWALLET_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setWallet(res?.data)
    
        })
    
        .catch(()=>{
            console.log("No Server Response")
        })
    }, [token]);

    


    return (
        <div >
           <Header/>
           <div className="platformContainer">
                <AsideProfile user = {user}/>
                <div className="mainPlatform">
                    <DineroDisponible wallet={wallet} />
                    <MiPortafolio wallet={wallet}/>
                </div>
           </div>
           
        </div>
    );
<<<<<<< HEAD
}
=======
}

>>>>>>> 9afa7c0c52bcd2534bb097e9d2fb152012c28455
