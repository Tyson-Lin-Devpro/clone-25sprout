import styled from '@emotion/styled';
import { useState, useEffect } from 'react'
import { keyframes } from '@emotion/react'

const turnAround = keyframes`
0% {
  transform: perspective(400px) rotateY(90deg);
  animation-timing-function: ease-in;
  opacity: 0;
}
40% {
  transform: perspective(400px) rotateY(-20deg);
  animation-timing-function: ease-in;
}
60% {
  transform: perspective(400px) rotateY(10deg);
  opacity: 1;
}
80% {
  transform: perspective(400px) rotateY(-5deg);
}
100% {
  transform: perspective(400px);
}
`

const Image = styled.div`
  background-image: url(https://www.25sprout.com/assets/intro-bg__b4af211e93ca6c5b935d299bc5198dc1.jpg);
  background-size:cover ;
  background-position: 50% 50%;
  position: relative;
  width:100%;
  height:100vh;
  background-repeat:no-repeat;
  overflow-x:hidden;
  & > div {
    position:absolute;
    backface-visibility:hidden;
    animation:1s ${props=>props.toggleCard===true?turnAround:``};
    animation-fill-mode:forwards;
    transform: perspective(400px) rotateY(90deg);
    top:130px;
    left:100px;
    background-color: #fff;
    width: 510px;
    height: 420px;
    padding: 100px 40px 0 60px;
    & h1 {
      font-size:48px;
    }
    & > div {
      font-size: 16px;
      line-height: 29px;
      margin-top: 20px;
      & > div {
        display:inline-block;
        font-size: 32px;
        line-height: 46px;
        color: #00c775;
        border: 2px solid #00c775;
        padding: 0 8px;
        margin: 5px 5px 0 0;
        float:left;
        &:after{
          content:'';
          display:block;
          clear:both;
        }
      }
    };
    @media(max-width:616px){
      top:130px;
      left:30px;
      width:68%;
      height: auto;
      padding: 30px 4%;
    };
    @media(max-width:480px){
      width:90%;
      top:20%;
      left:5%;
      right:5%;
    }
  }
`

const Target = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [toggleCard, setToggleCard] = useState(false);
  const [targetHeight, setTargetHeight ] = useState([]);
  const handleScroll = () => setOffsetY(window.pageYOffset + window.innerHeight);
  const getTargetHeight = () => setTargetHeight([document.getElementById('target').offsetTop, document.getElementById('target').offsetHeight]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', getTargetHeight)
    setOffsetY(window.pageYOffset + window.innerHeight)
    setTargetHeight([document.getElementById('target').offsetTop,document.getElementById('target').offsetHeight])
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', getTargetHeight)
    }
  }, [])
  useEffect(() => {
    if(offsetY>targetHeight[0]+targetHeight[1]/3){
      setToggleCard(true)
    }else{
      setToggleCard(false)
    }
  }, [offsetY,targetHeight])
  return (
    <Image id='target' toggleCard={toggleCard}>
      <div>
        <h5>We provide innovative</h5>
        <h1>Digital Solutions</h1>
        <div>
          <div>在</div>
          數位的領域裡，我們專注於提供給客戶最有效的解決方案，透過友善的介面設計，以及出色的程式技術團隊，共同打造出優異的專案和數位產品，幫助客戶在網路世界裡，奠定最穩固的基礎。
        </div>
      </div>
    </Image>
  )
}

export default Target
