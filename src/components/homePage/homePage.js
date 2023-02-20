import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { homePageData } from '../../constants';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Container = styled.div`
display: grid;
`

const Item = styled.div`
  display: grid;
  text-align: center;
  width: 300px;
  height: 35vh;
  background-size: cover;
  background-image: url(${props => props.backroundImage});
  margin: auto;
  @media (min-width: 600px) and (max-width: 1023px) {
    width: 100%;
    min-width: 290px;
    max-width: 400px;
  }
  @media (min-width: 1024px) and (max-width: 1399px) {
    width: 320px;
  }
  @media (min-width: 1400px) {
    width: 400px;
  }
  `

const HomeCardText = styled.h1`
  color: #000;
  align-self: center;
  justify-self: center;
  font: 600 28px/22px Roboto;
`




const HomePage = () => {
  return (
    <HomePageContainer>
      <Box>
        <Grid container spacing={3}>
          {
            homePageData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Container>
                  <Item backroundImage={item.backgroundImage} sx={{ minWidth: 275, maxWidth: 330, minHeight: 300 }}>
                    <HomeCardText>{item.text}</HomeCardText>
                  </Item>
                </Container>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </HomePageContainer>
  )
}

export default HomePage
