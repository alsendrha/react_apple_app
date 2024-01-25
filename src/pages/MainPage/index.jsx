import styled from 'styled-components'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import request from '../../api/request'


const MainPage = () => {
  return (
    <Container>
      <Banner />
      <Row title='Trending Now' id='TN' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' id='TR' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' id='AM' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' id='CM' fetchUrl={request.fetchComedyMovies} />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default MainPage