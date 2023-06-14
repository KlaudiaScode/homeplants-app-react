import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import userPhoto from '../../../img/userPhoto.png';

export default function Photo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="profile photo"
        src={userPhoto}
        sx={{ width: 500, height: 500 }}
      />
        <input type="file"></input>
        <Button variant="contained" sx={{m:4, height:50}}>Save Changes</Button>
    </Stack>
  );
}