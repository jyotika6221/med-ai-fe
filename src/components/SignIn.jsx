import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://med-ai-be.onrender.com/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                navigate("/home");
            } else {
                console.error("Sign-in failed");
            }
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <div style={{display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <div className="auth-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <input
                        type="text"
                        placeholder="Username (admin)"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password (admin)"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign In</button>
                </form>
                <p>
                    Dont have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
