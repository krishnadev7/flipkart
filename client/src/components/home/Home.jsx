import React, { Fragment, useEffect } from 'react';
import styled from '@emotion/styled';

// components imports
import Navbar from './Navbar';
import Banner from './Banner';
import { Box } from '@mui/system';

// redux imports
import { getProducts } from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux'

//custom mui style
const Component = styled(Box)({
    padding: '10px',
    backgroundColor: '#F2F2F2'
})

function Home() {

  const {products} = useSelector(state => state.getProducts)
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

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
