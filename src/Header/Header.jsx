import styled from '@emotion/styled';

const TopBar = styled.div`
  width:100%;
  background-color:hsla(0,0%,100%,.9);
  padding:15px 0;
  position:fixed;
  top:0;
  right:0;
  z-index:200;
  transition:all 0.5s;
`;
const Logo = styled.a`
  width:168px;
  height:32px;
  margin-left:65px;
  background-image:url(http://www.25sprout.com/8dfe94245.svg);
  background-size:cover;
  display:block;
`;
const Menu = styled.div`
  background-image:url(https://www.25sprout.com/assets/navi-btn__90eef9d746fa85ccca72159b3b7740fd.png);
  width:38px;
  height:38px;
  background-size:100%;
  position:absolute;
  top:14px;
  right:65px;
  cursor:pointer;
  transition:all 0.3s;
`

const Header = () => {
  return (
    <TopBar>
      <Logo href='/'/>
      <Menu/>
    </TopBar>
  )
}

export default Header
