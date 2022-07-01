import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <div>
            <Link to='/cats'>
                <button>Enter</button>
            </Link>
        </div>
    )
}