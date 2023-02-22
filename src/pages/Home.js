import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="flex md:flex-row flex-col m-10">
            <div className="basis-1/2 flex justify-center md:mt-56 md:mb-56">
                <img className="w-[400px] h-[400px]" alt="Home Image" src="./static/images/home_image.png" />
            </div>
            <div className="basis-1/2 flex justify-center md:mt-96 mt-10 mb-10">
                <Button className="w-[200px] h-[60px]" variant="contained" onClick={(e) => { navigate('all_images') }}>Get Started</Button>
            </div>
        </div>
    );
};

export default Home;