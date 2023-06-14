import Nav from "../Nav/Nav";
import { Link, Outlet, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { fetchUserPlants } from '../../helpers/fetchUserPlants';
import Advertisement from "../Advertisement";
import { Avatar, Box, Container, Typography } from "@mui/material";


export default function Plant() {
    const dataPlants = fetchUserPlants();
    const params = useParams();
    const plantObj = dataPlants.find((plant: any) => plant.id === params.id)
    return (
        <Box className="App">
            <Nav />
            <Advertisement />
            <Container>
                <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar src={plantObj?.imgFile} alt="selected plant" sx={{ width: '300px', height: '300px' }} />
                    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h1">{plantObj?.latinName}</Typography>
                        <Typography variant="h3">{plantObj?.name}</Typography>
                    </Container>
                </Container>

                <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Link to='description'><Button variant="outlined">Plant description </Button></Link>
                    <Link to='care-plant'><Button variant="outlined">Care plan</Button></Link>
                    <Link to='note'><Button variant="outlined">Note</Button></Link>
                    <Link to='course-growth'><Button variant="outlined">Course growth</Button></Link>
                    <Link to='plant-gallery'><Button variant="outlined">Plant gallery</Button></Link>
                </Container>
                <div className="category_window">
                    <Outlet />
                </div>
            </Container>
        </Box>
    )
}
