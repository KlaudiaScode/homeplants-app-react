import Nav from "../Nav";
import plant from '../../img/plant.jpg';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";


export default function Plant (){
    const location= useLocation();
    const params= useParams();
    console.log(location, params)
    return (
        <div className="App">
            <div className="houseplants">
                <div className="plant_Id">
                    <Nav/>
                    <div className="basic_data">
                        <img src={plant} alt="selected plant" />
                        <div className="names_plant">
                            <label className="latin_name">Chlorophytum laxum 'Ocean's</label>
                            <label><strong>Zielistka czubiasta</strong></label>
                        </div>
                        <div className="category_bar">
                        <Link to='description'><Button>Plant description </Button></Link>
                        <Link to='care-plant'><Button>Care plan</Button></Link>
                        <Link to='note'><Button>Note</Button></Link>
                        <Link to='course-growth'><Button>Course growth</Button></Link>
                        <Link to='plant-gallery'><Button>Plant gallery</Button></Link>
                        </div>
                    </div>
                    <div className="category_window">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
