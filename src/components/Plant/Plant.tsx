import Nav from "../Nav";
import plant from '../../img/plant.jpg';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";



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
                        <Link to='description'><button>Plant description </button></Link>
                        <Link to='care-plant'><button>Care plan</button></Link>
                        <Link to='note'><button>Note</button></Link>
                        <Link to='course-growth'><button>Course growth</button></Link>
                        <Link to='plant-gallery'><button>Plant gallery</button></Link>
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
