import {Route, Routes} from 'react-router';
import Home from './Home/Home';
import LandingPage from './landingPage';


export default function RoutesP(){
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
                <Route path='/cats' element={<Home/>}/>
                
            </Routes>
        </div>
    )
}