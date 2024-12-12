import React, { useState } from "react";
import "./Login.css"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Email: ", email, "Password:", password);
    };

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type = "email"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form=group">
                    <label>Password:</label>
                    <input
                        type = "password"
                        value ={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type ="submit"> Login</button>
            </form>
        </div>
    );

}

export default Login;