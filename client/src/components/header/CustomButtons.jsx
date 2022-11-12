// mui imports
import LoginDialog from '../login/LoginDialog';
import { Box, Button, Typography } from '@mui/material';

//icon imports
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { useState } from 'react';


// custom Mui styles
const Wrapper = styled(Box)({
  display: 'flex',
  margin: '0, 3%, 0, auto',
  '& > button, & > p, & div': {
    marginRight: '40px',
    fontSize: '16px',
    alignItems: 'center'
  },
});

const Container = styled(Box)({
    display: 'flex'
})

const LoginButton = styled(Button)({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    padding: '5px, 40px',
    borderRadius: '2px',
    boxshadow: 'none',
    fontWeight: 600,
    height: '32px',
})

export default function CustomButtons() {
  const [open,setOpen] = useState(false);
  const OpenDialog = () => {
    setOpen(true)
  }
  return (
    <Wrapper>
      <LoginButton variant='contained' onClick={()=> OpenDialog()}>Login</LoginButton>

      <Typography style={{ marginTop: 3 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  );
}
