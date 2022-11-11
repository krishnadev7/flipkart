// mui imports
import styled from '@emotion/styled';
import { InputBase } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// icon imports
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)({
    backgroundColor: 'white',
    width: '38%',
    borderRadius: '2px',
    marginLeft: '10px',
    display: 'flex'

})

// custom mui styles
const InputSearchBase = styled(InputBase)({
    width: '100%',
    paddingLeft: '10px',
    fontSize: 'unset',
})

const SearchIconWrapper = styled(SearchIcon)({
    color: 'blue',
    padding: '5px'
})

export default function Search() {
  return (
    <SearchContainer>
      <InputSearchBase placeholder='Search for products, brands and more'/>
      <Box>
        <SearchIconWrapper/>
      </Box>
    </SearchContainer>
  );
}
