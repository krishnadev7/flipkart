import React, { Fragment } from 'react';
import styled from '@emotion/styled';

// components imports
import Navbar from './Navbar';
import Banner from './Banner';
import { Box } from '@mui/system';

//custom mui style
const Component = styled(Box)({
    padding: '10px',
    backgroundColor: '#F2F2F2'
})

function Home() {
  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </Fragment>
  );
}

export default Home;
