// Mui imports
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

//components imports
import {navData} from '../../constants/data'

// mui custom styles
const Component = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 10px 0 10px',
})

const Container = styled(Box)({
    padding: '12px 8px',
    textAlign: 'center',

})

const Text = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  fontFamily: 'Roboto,Arial,sans-serif',
});

export default function Navbar() {
  return (
    <Component>
        {navData.map((data,i) => (
            <Container>
            <img  src={data.url} key={i} alt='navbar product images' style={{width: 74}}/>
            <Text>{data.text}</Text>
            </Container>
        ))}
    </Component>
  )
}
