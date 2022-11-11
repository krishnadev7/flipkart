// Mui imports
import {AppBar, Toolbar} from '@mui/material';
import styled from '@emotion/styled';
import { Box, height } from '@mui/system';

// components imports
import Search from '../Search';
import CustomButtons from './CustomButtons';

// mui custom css styles
const StyledHeader = styled(AppBar)({
    backgroundColor: '#2874f0',
    height: '56px',
})

const Component = styled(Box)({
    margin: '12%',
    marginRight: '0px'
})

const CustomButtonWrapper = styled(Box)({
    margin: '0 5% 0 auto',
})

export default function Header() {
    const logoUrl =
      'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png';
  return (
    <div>
        <StyledHeader>
            <Toolbar style={{ minHeight: 56 }}>
                <Component>
                    <img src={logoUrl} alt="flipkart logo" style={{width: 75}}/>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    </div>
  )
}
