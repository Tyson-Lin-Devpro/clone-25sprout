import styled from '@emotion/styled';
import { useState, useEffect } from 'react'
import { keyframes } from '@emotion/react'

const clientsUp = keyframes`
  0% {
    opacity: 0;
    transform:translateY(60px)
  }
  90% {
    opacity: 1;
    transform:translateY(-5px)
  }
  100% {
    opacity: 1;
    transform:translateY(0px)
  }
`

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
  }
`
const Image = styled.div`
  height:180px;
  background-color:gray;
  animation:0.7s ${props => props.toggleClients===true?clientsUp:''};
  animation-delay:${props =>props.index*0.1}s;
  animation-fill-mode:both;
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
  const [offsetY, setOffsetY] = useState(0);
  const [toggleClients, setToggleClients] = useState(false);
  const [clientsHeight, setClientsHeight ] = useState([]);
  const handleScroll = () => setOffsetY(window.pageYOffset + window.innerHeight);
  const getClientsHeight = () => setClientsHeight([document.getElementById('Clients').offsetTop, document.getElementById('Clients').offsetHeight]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', getClientsHeight)
    setOffsetY(window.pageYOffset + window.innerHeight)
    setClientsHeight([document.getElementById('Clients').offsetTop,document.getElementById('Clients').offsetHeight])
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', getClientsHeight)
    }
  }, [])
  useEffect(() => {
    if(offsetY>clientsHeight[0]+clientsHeight[1]/4){
      setToggleClients(true)
    }else{
      setToggleClients(false)
    }
  }, [offsetY,clientsHeight])
  return (
    <OurClients id='Clients'>
      <h5>Our</h5>
      <h1>Clients</h1>
      <div>[ 服務客戶 ]</div>
      <Grid toggleClients={toggleClients}>
        <div>
          {brands.map((brand,index)=>(
            <Image style={{
              backgroundImage:`url(${imageUrl})`,
              backgroundPosition:`-${brand.x*220}px -${brand.y*180}px`
            }} key={index} toggleClients={toggleClients} index={index}/>
          ))}
        </div>
      </Grid>
    </OurClients>
  )
}

export default Clients
