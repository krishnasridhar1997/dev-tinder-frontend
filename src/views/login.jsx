import axios from "axios";
import {useState} from "react";
import {userSliceActions} from "../store/slice/user_slice";
import {useDispatch} from "react-redux";
import {BASE_URL} from "../utils/server";
import {useNavigate} from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${BASE_URL}/login`,
                {
                    email: email,
                    password: password,
                },
                {withCredentials: true}
            );
            dispatch(userSliceActions.setDetails(response.data.result));
            navigate("/feed");
        } catch (err) {
            console.error("Login failed:", err);
            setError(err?.message);
            setTimeout(() => {
                setError("");
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card bg-base-200 w-96 shadow-sm mx-auto w-1/3">
            <div className="card-body">`
                <span className="text-2xl font-bold text-center">Login</span>
                <span className="text-left">Email ID</span>
                <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span>Password</span>
                <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <span className="text-red-500">{error}</span>}
                <div className="card-actions justify-center my-5">
                    <button className="btn btn-primary" onClick={handleLogin}>
                        {loading && (
                            <span className="loading loading-spinner loading-sm"></span>
                        )}
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
