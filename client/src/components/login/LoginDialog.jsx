import React from 'react';

import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material';

// custom mui styles
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 100%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #fb641b;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

function LoginDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: 'unset' } }}
    >
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant='h5'>Login</Typography>
            <Typography>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>
          <Wrapper>
            <TextField variant='standard' label='Enter Email/Mobile number' />
            <TextField variant='standard' label='Enter Password' />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography sx={{ textAlign: 'center' }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
