import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

const ContainerDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  close: () => void;
}

function ContainerDialogTitle(props: DialogTitleProps) {
  const { children, close, ...other } = props;

  return (
    <Grid container flexWrap='nowrap' justifyContent='space-between' alignItems='center'>
      <DialogTitle sx={{ m: 0 }} {...other}>
       {children}
      </DialogTitle>
      {close ? (
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            width: '25px',
            height: '25px',
            marginRight: '10px'
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Grid>
  );
}

export default function DeleteActiveAccount() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tab onClick={handleClickOpen} label="Delete Account" />
      <ContainerDialog
        onClose={handleClose}
        open={open}
      >
        <ContainerDialogTitle id="customized-dialog-title" close={handleClose}>
          Delete active account
        </ContainerDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete your account?
          </Typography>
        </DialogContent>
        <DialogActions >
          <Button autoFocus onClick={handleClose}>
            Yes
          </Button>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </ContainerDialog>
    </div>
  );
}

