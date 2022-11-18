// Mui imports
import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { padding } from '@mui/system';

//--------MUI custom styles--------------//
const LeftContainer = styled(Box)(({theme}) => ({
padding: '40px 0 0 80px',
[theme.breakpoints.down('lg')]:{
  padding: '20px 40px'
}
}))
 


const Image = styled('img')({
    width: '90%',
    padding: '15px'
})

const StyledButton = styled(Button)(({theme}) => ({
 width: '48%',
 height: '50px',
 bordeRadius: '2px',
 [theme.breakpoints.down('lg')]:{
  width: '46%'
 },
 [theme.breakpoints.down('md')]:{
  width: '48%'
 }
}))


//----xxxxxx----MUI custom styles-------xxxxxxx-------//


function ActionItem({product}) {
  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
        <Image src={product.detailUrl} />
      </Box>
      <StyledButton
        variant='contained'
        style={{ marginRight: 10, background: '#ff9f00', fontSize: '12px' }}
      >
        <Cart /> Add to Cart
      </StyledButton>
      <StyledButton variant='contained' style={{ background: '#fb541b' }}>
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItem