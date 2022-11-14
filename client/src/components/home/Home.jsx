import React, { Fragment, useEffect } from 'react';

// mui imports
import styled from '@emotion/styled';
import { Box } from '@mui/system';

// components imports
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import Midslide from './Midslide';


// redux imports
import { getProducts } from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux'
import Midsection from './Midsection';

//custom mui style
const Component = styled(Box)({
    padding: '10px',
    backgroundColor: '#F2F2F2'
})

function Home() {

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title={'Deal of the day'} timer={true}/>
        <Midsection />
        <Slide products={products} title={'Discounts for you'} timer={false}/>
        <Slide products={products} title={'Suggesting Items'} timer={false}/>
        <Slide products={products} title={'Top Selection'} timer={false}/>
        <Slide products={products} title={'Recomended Items'} timer={false}/>
        <Slide products={products} title={'Trending Offers'}  timer={false}/>
        <Slide products={products} title={'Season"s top picks'} timer={false}/>
        <Slide products={products} title={'Top Deals'} timer={false}/>
      </Component>
    </Fragment>
  );
}

export default Home;
