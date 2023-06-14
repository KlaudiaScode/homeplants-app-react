import { Typography } from "@mui/material";
import {dataPlants} from "../../UserPlants/components/dataUserPlants";
import { useParams } from "react-router-dom";


export default function Description() {
    const params = useParams();
    const plantObj = dataPlants.find((plant) => plant.id === params.id)
    return (
        <Typography variant="h5">{plantObj?.description}</Typography>
    )
}