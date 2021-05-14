import styled from '@emotion/styled'
import { RiPhoneFill } from 'react-icons/ri'
import { FaPaperPlane, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react';

const EmptyFooter = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  @media (max-width:733px){
    height:120vh;
  }
`
const WholeFooter = styled.div`
  margin:0;
  padding:0;
  background-color:white;
  transition-timing-function:ease-in-out;
  z-index:500;
  ${props => props.magicPower()}
`
const Footer = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  overflow:hidden;
  display:flex;
  justify-content:center;
  @media (max-width:733px){
    height:${props=>props.toggle===true?'100vh':'auto'}
  }
`
const Background = styled.div`
  color:rgba(247,255,2,0.4);
  font-size:1100px;
  position:absolute;
  line-height:730px;
  letter-spacing: -50px;
  top:20px;
  left:-200px;
  z-index:1;
  user-select:none;
`
const Menu = styled.div`
  margin:50px 5% 0px;
  height:574px;
  width:100%;
  max-width:1200px;
  display:flex;
  position:relative;
  z-index:100;
  & > div {
    width:33.3%;
    height:580px;
    padding:3% 5% 0px;
  };
  @media (max-width:733px){
    display:block;
    height:auto;
    & > div {
      width:100%;
      padding:5% 5% 0px;
      text-align:center;
      &:nth-of-type(1),:nth-of-type(3){
        display:${props=>props.toggle===true?'none':'block'};
      };
      &:nth-of-type(2){
        ${props=>props.toggle===true?`
          height:90vh;
          margin:0px 0px 50px;
          padding:25% 0px;
        `:`
        
        `};
      }
    };
  }
`
const Title = styled.div`
  font-size: 12px;
  color: #00c775;
  margin: 16px 0px;
`

const List = styled.ul`
  list-style:none;
  padding:0px;
  & > li{
    cursor:pointer;
    font-size: 30px;
    color: #000;
    transition: all .2s;
    font-weight: 600;
    line-height:40px;
    &:hover {
      opacity:0.6;
    }
  }
`

const Info = styled.div`
  margin:5px 0px;
  height:40px;
  display:flex;
  font-size: 14px;
  & > span {
    margin-right:10px;
    color:#00c775;
  }
`

const GreenLine = styled.span`
  display:flex;
  & > span {
    display:block;
    background-color: #00c775;
    width: 70px;
    height: 1px;
  };
  @media (max-width:733px){
    justify-content:center;
  }
  
`
const CopyRight = styled.p`
  position:absolute;
  top:50%;
  left:-170px;
  font-size:12px;
  color:#999;
  transform:rotate(90deg);
`

const Article = styled.div`
  cursor:pointer;
  transition: all .2s;
  &:hover{
    opacity:0.6;
  };
  & > div {
    margin-bottom: 5px;
    font-size: 18px;
    color:#2d2d2d;
    width:100%;
  };
  & > span {
    font-size: 14px;
    color: #474747;
    width:100%;
  };
  @media (max-width:733px){
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }
`

const Divider = styled.p`
    width: 72px;
    height: 1px;
    margin: 20px 0;
    border-top-style:dashed;
    border-width:1px;
`

const ViewButton = styled.div`
  display:inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #000;
  padding: 8px 20px 8px 25px;
  margin-top: 30px;
  border: 2px solid #00c775;
  vertical-align: bottom;
  position: relative;
  z-index: 3;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 100%;
    background-color: #00c775;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 0.3s;
  };
  &:hover:before {
    width:100%;
  }
`
const FooterMenu = ({ toggle }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [footerOffTop, setFooterOffTop] = useState(0);
  const [footerMove, setFooterMove] = useState(0);
  const scrolling = () => {
    setOffsetY(window.pageYOffset + window.innerHeight);
    setFooterMove(document.getElementById('footer').offsetTop - window.pageYOffset)
    setFooterOffTop(document.getElementById('footer').offsetTop)
  };
  const getFooterOffTop = () => {
    setOffsetY(window.pageYOffset + window.innerHeight);
    setFooterOffTop(document.getElementById('footer').offsetTop);
    setFooterMove(document.getElementById('footer').offsetTop - window.pageYOffset)
  };
  useEffect(() => {
    window.addEventListener('scroll', scrolling)
    window.addEventListener('resize', getFooterOffTop)
    setOffsetY(window.pageYOffset + window.innerHeight);
    setFooterMove(document.getElementById('footer').offsetTop - window.pageYOffset)
    setFooterOffTop(document.getElementById('footer').offsetTop)
    return () => {
      window.removeEventListener('scroll', scrolling)
      window.removeEventListener('resize', getFooterOffTop)
    }
  }, [])
  const magicPower = () => {
    if (offsetY >= footerOffTop) {
      if (toggle === false) {
        return `
          @media (min-width:734px){
            position:absolute;
            top:0px;
            transition:top 0.6s;
          };
          @media (max-width:733px){
            position:absolute;
            top:0px;
            margin-top:0px;
            transition:margin-top 0.6s;
          }
        `
      } else {
        return `
          @media (min-width:734px){  
            position:absolute;
            top:-${footerMove}px;
            transition:top 0.6s;
          };
          @media (max-width:733px){
            position:absolute;
            margin-top:-${footerMove}px;
            transition:margin-top 0.6s;
          }
        `
      }
    } else {
      if (toggle === false) {
        return `
          @media (min-width:734px){
            position:fixed;
            bottom:-100vh; 
            margin-bottom:0px;
            transition:margin-bottom 0.6s;
          };
          @media (max-width:733px){
            position:fixed;
            top:100vh;
            margin-top:0px;
            transition:margin-top 0.6s;
          }
        `
      } else {
        return `
          @media (min-width:734px){
            position:fixed;
            bottom:-100vh; 
            margin-bottom:100vh;
            transition:margin-bottom 0.6s;
          };
          @media (max-width:733px){
            position:fixed;
            top:100vh;
            margin-top:-100vh;
            transition:margin-top 0.6s;
          }
        `
      }
    }
  }
  return (
    <EmptyFooter id='footer'>
      <WholeFooter toggle={toggle} magicPower={magicPower}>
        <Footer toggle={toggle}>
          <Background>25sprout</Background>
          <Menu toggle={toggle}>
            <CopyRight>COPYRIGHTⓒ 2020 25sprout,LLC. All RIGHTS RESERVED</CopyRight>
            <div style={{ backgroundColor: "hsla(0,0%,95%,0.8)"}}>
              <Title>Trending</Title>
              <Article>
                <div>
                  2018，Bootstrapped, Profitable, & Proud
                </div>
                <span>2019-01-03 by Alex</span>
                <Divider />
              </Article>
              <Article>
                <div>
                  幸運與那些在創業路上點滴的串連
                </div>
                <span>2018-04-11 by Alex</span>
                <Divider />
              </Article>
              <Article>
                <div>
                  寫給五年後走在創業路上的自己
                </div>
                <span>2017-04-11 by Alex</span>
                <Divider />
              </Article>
              <ViewButton>View All <FaArrowRight style={{ fontSize: '10px' }} /></ViewButton>
            </div>
            <div style={{ backgroundColor: "hsla(0,0%,98%,0.8)" }}>
              <Title>Explore our site</Title>
              <List>
                <li>About</li>
                <li>Case Studies</li>
                <li>Press Center</li>
                <li>Career</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>25lab</li>
              </List>
              <Title>Handcrafted by 25sprout</Title>
              <List>
                <li>SurveyCake</li>
              </List>
              <GreenLine><span/></GreenLine>
            </div>
            <div style={{ backgroundColor: "hsla(0,0%,95%,0.8)" }}>
              <Title>Feel exciting to contact us</Title>
              <Info>
                <span><RiPhoneFill /></span>
                <div>02-77515075</div>
              </Info>
              <Info>
                <span><FaPaperPlane /></span>
                <div>hey@25sprout.com</div>
              </Info>
              <Info>
                <span><FaMapMarkerAlt /></span>
                <div>105 台北市松山區南京東路五段1號12樓</div>
              </Info>
              <Title>Let's keep in touch</Title>
            </div>
          </Menu>
        </Footer>
      </WholeFooter>
    </EmptyFooter>
  )
}

export default FooterMenu;
