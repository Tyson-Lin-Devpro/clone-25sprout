import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const FirstPart = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Div = styled.div`
  height:100vh;
  width:100vw;
  background-size: cover;
  background-position: 50% 50%;
  overflow:hidden;
  position: relative;
`;

const Slogan = styled.div`
  position:absolute;
  top:160px;
  left:100px;
  user-select:none;
  & > p {
    color:white;
    margin:0px;
    font-weight: bold;
  };
  & > p:nth-of-type(1){
    padding-left:5px;
    font-size:18px;
    line-height:24px;
  };
  & > p:nth-of-type(2),p:nth-of-type(3){
    font-size:64px;
  };
  & > p:nth-of-type(4),p:nth-of-type(5){
    font-size:18px;
  };
  @media (max-width:533px){
    top:90px;
    left:20px;
    & > p:nth-of-type(1){
      display:none;
    };
    & > p:nth-of-type(2),p:nth-of-type(3){
      font-size:40px;
    };
    & > p:nth-of-type(4),p:nth-of-type(5){
      font-size:15px;
    };
  }
`
const cyberAnimation = keyframes`
  0%{
    clip-path:inset(95% -6px 0 0);
    transform:translate(-10px,5px);
  }
  10%{
    clip-path:inset(30% -6px 35% 0);
    transform:translate(10px,5px);
  }
  20%{
    clip-path:inset(60% -6px 32% 0);
    transform:translate(10px,5px);
  }
  30%{
    clip-path:inset(70% -6px 10% 0);
    transform:translate(-10px,5px);
  }
  40%{
    clip-path:inset(10% -6px 75% 0);
    transform:translate(15px,-5px);
  }
  50%{
    clip-path:inset(90% -6px 5% 0);
    transform:translate(5px,8px);
  }
  60%{
    clip-path:inset(70% -6px 15% 0);
    transform:translate(10px,-5px);
  }
  70%{
    clip-path:inset(4% -6px 80% 0);
    transform:translate(-5px,8px);
  }
  80%{
    clip-path:inset(85% -6px 5% 0);
    transform:translate(10px,-5px);
  }
  90%{
    clip-path:inset(20% -6px 70% 0);
    transform:translate(-10px,-5px);
  }
  100%{
    clip-path:inset(10% -6px 75% 0);
    transform:translate(0)
  }
`

const CyberPunk = styled.div`
  display:block;
  z-index:150;
  position:absolute;
  top:160px;
  left:100px;
  user-select:none;
  & > p {
    color:white;
    margin:0px;
    font-weight: bold;
  };
  & > p:nth-of-type(1){
    padding-left:5px;
    font-size:18px;
    line-height:24px;
  };
  & > p:nth-of-type(2),p:nth-of-type(3){
    font-size:64px;
  };
  & > p:nth-of-type(4),p:nth-of-type(5){
    font-size:18px;
  };
  @media (max-width:533px){
    top:90px;
    left:20px;
    & > p:nth-of-type(1){
      display:none;
    };
    & > p:nth-of-type(2),p:nth-of-type(3){
      font-size:40px;
    };
    & > p:nth-of-type(4),p:nth-of-type(5){
      font-size:15px;
    };
  }
    text-shadow:-3px -3px 0px #F8F005, 3px 3px 0px #00E6E6;
    clip-path:inset(85% 0 15% 0);
    animation:1.5s ${cyberAnimation} infinite;
    animation-delay:7s;
    animation-timing-function:steps(2,end);
  
`
const Image = styled.img`
  height:100vh;
  min-height:585px;
  width:auto;  
  min-width:1040px;
  transform: scale(1.3);
  filter:brightness(70%);
  @media (min-aspect-ratio: 16 / 9) {
    display: block;
    width: 100%;
    height: auto;
  }
`;



const Introduce = () => {
  return (
    <FirstPart>
      <Div>
        <Image src="https://www.25sprout.com/static/img/index/banner.jpg" />
        <CyberPunk>
          <p>25sprout</p>
          <p><span>DIGITAL </span><span>CREATIVE</span></p>
          <p>CONSULTANT</p>
          <p>新芽網路專注於持續創造出，</p>
          <p>下一個網路創新產品。</p>
        </CyberPunk>
        <Slogan>
          <p>25sprout</p>
          <p><span>DIGITAL </span><span>CREATIVE</span></p>
          <p>CONSULTANT</p>
          <p>新芽網路專注於持續創造出，</p>
          <p>下一個網路創新產品。</p>
        </Slogan>
      </Div>
    </FirstPart>

  )
}

export default Introduce
