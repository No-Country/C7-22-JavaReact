import { createContext, useState} from "react";


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState("");
    const [token,setToken] = useState("")
   

    

   



    return (
        <AuthContext.Provider value = {{auth, setAuth, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;