import styled from '@emotion/styled';

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
  & > div {
    position:absolute;
    z-index:190;
    top:160px;
    left:100px;
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
    }
  }
`;

const Image = styled.img`
  height:100vh;
  min-height:585px;
  width:auto;  
  min-width:1040px;
  transform: scale(1.3);
  filter:brightness(70%);
  
`;



const Introduce = () => {
  return (
    <FirstPart>
      <Div>
        <Image src="https://www.25sprout.com/static/img/index/banner.jpg" />
        <div>
          <p>25sprout</p>
          <p><span>DIGITAL </span><span>CREATIVE</span></p>
          <p>CONSULTANT</p>
          <p>新芽網路專注於持續創造出，</p>
          <p>下一個網路創新產品。</p>
        </div>
      </Div>
    </FirstPart>

  )
}

export default Introduce
