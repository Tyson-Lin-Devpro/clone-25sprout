import styled from '@emotion/styled';

const Content = styled.div`
  & > p{
    line-height:30px;
    padding:5%;
  };  
  & > a {
      text-align:center;
      cursor:pointer;
      display:block;
      width:100px;
      margin:30px auto 20px;
      text-decoration: none;
      width: 178px;
      height:50px;
      & :hover{
        background-color: hsla(0,0%,100%,.2);
      };
      & > div {
        width:100%;
        height:100%;
        background-color: hsla(0,0%,100%,0);
        border: 1px solid #fff;
        color:white;
        font-size:20px;
        line-height:48px;
        position:relative;
        transition:all 0.3s;
        &:hover{
          padding-right:15px;
          background-color: hsla(0,0%,100%,0.2);
        };
        &:after{
          content:'»';
          opacity:0;
          position:absolute;
          right:15px;
          top:-2px;
          transition:all 0.3s;
          font-size:30px;
        }
        &:hover:after{
          opacity:1;
          right:30px;
        }
      }
    }
  };
`
const SurveyCake = () => {
  return (
    <Content>
      <p>
        SurveyCake 是一個企業級的雲端問卷軟體 (SaaS)，提供企業強大且安全的問卷調查、分析與商業自動化功能。<br/>
        我們致力打造出最友善的問卷軟體，讓做問卷就像 a piece of cake!
      </p>
      <a href='https://www.surveycake.com/'>
        <div>瞭解更多</div>
      </a>
    </Content>
  )
}

export default SurveyCake
