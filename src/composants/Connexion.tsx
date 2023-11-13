import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connexion = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <label htmlFor="login" id="login">Login</label>
            <input type="text" name="login" value={login}   onChange={(event) => setLogin(event.target.value)} />

            <label htmlFor="password" id="password">Password</label>
            <input type="password" name="password" value={password} onChange={handleChangePassword} />

            <button onClick={() => {
                if (login==='admin' && password === 'admin') {
                    console.log("login : ", login)
                    navigate("/")
                }
                
            }}>Connexion</button>
        </div>
    )
}

export default Connexion