import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const TopBar = styled.div`
  padding:15px 0;
  position:fixed;
  right:0;
  z-index:600;
  transition:all 0.5s;
  ${props=>props.offsetY>=800 || props.toggle===true?`
    width:232px;
    background-color:#fff;
    top:50px;
  `:`
    width:100%;
    background-color:hsla(0,0%,100%,.9);
    top:0px;
  `
  }
`;
const Logo = styled.a`
  background-image:url(http://www.25sprout.com/8dfe94245.svg);
  background-size:100%;
  background-repeat:no-repeat;
  transition:all 0.5s;
  display:block;
  ${props=>props.offsetY>=800 || props.toggle===true?`
    width:116px;
    height:22px;
    margin-left:14px;
    `:`
    width:168px;
    height:32px;
    margin-left:65px;
    `
  }
  `;
const Menu = styled.div`
  background-image:url(https://www.25sprout.com/assets/navi-btn__90eef9d746fa85ccca72159b3b7740fd.png);
  background-size:100%;
  position:absolute;
  transition:all 0.3s;
  cursor:pointer;
  ${props=>props.offsetY>=800 || props.toggle===true?`
    width:auto;
    height:0px;
    top:0px;
    right:0px;
    background-color:#00c775;
    padding:26px 31px;
  `:`
    width:38px;
    height:38px;
    top:14px;
    right:65px;
    padding:0px;
  `
  }
`;
const MenuIcon = styled.div`
  width: 28px;
  height: 3px;
  background-color: ${(props)=>props.cross===true?'transparent':'#fff'};
  transition: all .3s;
  &:before{
    content: "";
    display: block;
    width: 28px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 31px;
    transition: all 0.3s;
    ${(props)=>props.cross===true?`
      top: 26px;
      transform: rotate(-135deg);
    `:`
      top: 18px;
    `}
  };
  &:after{
    content: "";
    display: block;
    width: 28px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 31px;
    transition: all .3s;
    ${(props)=>props.cross===true?`
      top: 26px;
      transform: rotate(135deg);
    `:`
      top: 34px;
    `}
  }
`;

const Header = ({toggle,setToggle}) => {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [cross,setCross] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  const crossPower = () => {
    setCross((prev)=>!prev)
    setToggle((prev)=>!prev)
  }
  return (
    <TopBar offsetY={offsetY} toggle={toggle}>
      <Logo href='/'offsetY={offsetY} toggle={toggle}/>
      <Menu offsetY={offsetY} toggle={toggle} onClick={()=>{crossPower()}}>{offsetY>=800 || toggle===true?<MenuIcon cross={cross}/>:''}</Menu>
    </TopBar>
  )
}

export default Header
