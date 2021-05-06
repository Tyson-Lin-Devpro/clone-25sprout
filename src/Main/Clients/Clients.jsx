import styled from '@emotion/styled';

const OurClients = styled.div`
  min-height:100vh;
  width:100vw;
  text-align:center;
  font-weight: 600;
  margin-bottom:100px;
  & > h5 {
    padding-top:70px;
  }
`

const Grid = styled.div`
  padding:100px 20% 0px;
  display: grid;
  justify-content:center;
  grid-template-columns:1fr;
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit,220px);
    justify-content:center;
    grid-gap:0.7rem;
    & > div {
      height:180px;
      background-color:gray;
    }
  }
`

const brands = [
  {x:0,y:0},
  {x:1,y:0},
  {x:2,y:0},
  {x:3,y:0},
  {x:4,y:0},
  {x:0,y:1},
  {x:1,y:1},
  {x:2,y:1},
  {x:3,y:1},
  {x:4,y:1},
  {x:0,y:2},
  {x:1,y:2},
  {x:2,y:2},
  {x:3,y:2},
  {x:4,y:2},
]
const Clients = () => {
  const imageUrl = 'https://www.25sprout.com/assets/clients__3181a8dfd7b70bd6b5153346ae72ecd9.jpg';

  return (
    <OurClients>
      <h5>Our</h5>
      <h1>Clients</h1>
      <div>[ 服務客戶 ]</div>
      <Grid>
        <div>
          {brands.map((brand,index)=>(
            <div style={{
              backgroundImage:`url(${imageUrl})`,
              backgroundPosition:`-${brand.x*220}px -${brand.y*180}px`
            }} key={index}/>
          ))}
        </div>
      </Grid>
    </OurClients>
  )
}

export default Clients
