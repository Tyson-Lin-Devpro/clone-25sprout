import styled from '@emotion/styled';

const Image = styled.div`
  background-image: url(https://www.25sprout.com/assets/intro-bg__b4af211e93ca6c5b935d299bc5198dc1.jpg);
  background-size:cover  ;
  background-position: 50% 50%;
  position: relative;
  width:100%;
  height:100vh;
  background-repeat:no-repeat;
  & > div {
    position:absolute;
    top:130px;
    left:100px;
    background-color: #fff;
    width: 510px;
    height: 420px;
    padding: 100px 40px 0 60px;
    & h1 {
      font-size:48px;
    }
    & > p {
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
    }
  }
`

const Target = () => {
  return (
    <Image>
      <div>
        <h5>We provide innovative</h5>
        <h1>Digital Solutions</h1>
        <p>
          <div>在</div>
          數位的領域裡，我們專注於提供給客戶最有效的解決方案，透過友善的介面設計，以及出色的程式技術團隊，共同打造出優異的專案和數位產品，幫助客戶在網路世界裡，奠定最穩固的基礎。
        </p>
      </div>
    </Image>
  )
}

export default Target
