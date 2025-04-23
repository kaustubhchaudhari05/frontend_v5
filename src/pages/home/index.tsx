import { useNavigate } from "react-router-dom"
import Register from "../register";

const HomePage = () => {
    const navigate = useNavigate();


    // const registerPageNav = () => {
    //     navigate('/register')
    // }

    return (
        <>
            <div>
                <h4>Home Page</h4>
                <div className="btn btn-primary" onClick={() => navigate( `/register`)}>Register</div>
                <div className="btn btn-primary ms-4" onClick={() => navigate( `/login`)}>Login</div>
            </div>
        </>
    )
}

export default HomePage;