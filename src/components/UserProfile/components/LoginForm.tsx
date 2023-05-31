import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function LogForm(){
    return(
        <form>
            <TextField
                required
                id="outlined-old-login"
                label="Login"
                defaultValue="Old login"
            />
            <TextField
                required
                id="outlined-old-login"
                label="Login"
                defaultValue="New login"
            />
            <Button>Save</Button>
        </form>
    )
}