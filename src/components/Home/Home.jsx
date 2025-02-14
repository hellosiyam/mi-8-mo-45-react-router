
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(location);
    
    const navigation = useNavigate()

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'Loading' ? <p>Loading ...</p> :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;