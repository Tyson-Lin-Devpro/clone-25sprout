import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SurveyCake from './ProductPage/SurveyCake'
import BackStage from './ProductPage/BackStage'

const ProductContent = styled.div`
  width:100%;
  position:relative;
  overflow: hidden;
`

const Image = styled.div`
  background-image: url(https://www.25sprout.com/assets/project-bg__5384ec67396b09dd7c69f956c1811698.jpg);
  width: 100%;  
  height:100%;
  min-height:auto;
  background-position: 50% 50%;
  overflow-x: hidden;
  filter:brightness(30%);
  position:absolute;
  top:-100px:
  left:0px;
`

const Title = styled.div`
  text-align:center;
  top:10%;
  width:100%;
  color:white;
  position:relative;
  z-index:200;
  padding-top: 100px;
`

const Select = styled.div`
  margin-top: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  & > span {
    display:inline-block;
    background-color: hsla(0,0%,100%,.3);
    width: 1px;
    height: 70px;
  }
  & > div {
    display:inline-block;
    cursor:pointer;
    transition:opacity 0.3s;
    &:nth-of-type(1){
      opacity:${props => props.content === 'cake' ? 1 : 0.3};
    };
    &:nth-of-type(2){
      opacity:${props => props.content === '' ? 1 : 0.3};
    };
  };
`

const LeftImage = styled.div`
  width: 230px;
  height: 70px;
  background-image: url(https://www.25sprout.com/assets/logo-products__c41c1e32673b84b9379128c5e1a107ff.png);
  background-repeat:no-repeat;
  background-position:50% 0 ;
`
const RightImage = styled.div`
  width: 230px;
  height: 70px;
  background-image: url(https://www.25sprout.com/assets/logo-products__c41c1e32673b84b9379128c5e1a107ff.png);
  background-repeat:no-repeat;
  background-position:50% 100% ;
`

const Logo = styled.div`
  position:absolute;
  top:0px;
  color:rgba(247,255,2,0.2);
  font-size: 880px;
  user-select:none;
  transition:all 0.2s;
`
const ImageDisplay = styled.div`
  border: 35px solid transparent;
  border-bottom: none;
  max-width: 972px;
  width:80%;
  font-size: 0;
  position:relative;
  transition:transform 0.2s;
  margin: 0 auto;
  & > img {
    width: 100%;
    opacity: 0;
  }
`
const OpacityImage = styled.img`
  opacity: 0;
`
const ChangeImage = styled.img`
  border: 35px solid #000;
  border-bottom: none;
  position: absolute;
  left: 0;
  transition: all 0.7s ease-in-out;
`
const ImageCotainer = styled.div`
  width: 70%;
  margin-left: 15%;
  position: relative;
  overflow: hidden;
`
const Products = () => {
  const [content, setContent] = useState('cake')
  const [offsetY, setOffsetY] = useState([]);
  const [productHeight, setProductHeight] = useState([]);
  const handleScroll = () => setOffsetY([window.pageYOffset,document.getElementById('product').getBoundingClientRect().top]);
  const getProductHeight = () => {
    setProductHeight([document.getElementById('product').offsetTop, document.getElementById('product').offsetHeight])
  };
  useEffect(() => {
    let productY = document.getElementById('product');
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', getProductHeight)
    setOffsetY([window.pageYOffset,productY.getBoundingClientRect().top])
    setProductHeight([productY.offsetTop, productY.offsetHeight])
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', getProductHeight)
    }
  }, [])
  const rollingText = () => {
    if (
      window.innerHeight + offsetY[0] > productHeight[0] &&
      offsetY[0] < productHeight[0] + productHeight[1]
    ) {
      return Math.round(offsetY[0] / 100) * 20
    }
  }
  const rollingImage = () => {
    if (
      window.innerHeight + offsetY[0] > productHeight[0] + productHeight[1]/2 &&
      offsetY[1]>=0
      ){
        return  (productHeight[1] + offsetY[1]) / offsetY[0] * 500 - 250
      }
  }
  return (
    <ProductContent id='product'>
      <Image />
      <Logo style={{ left: `-${rollingText()}px` }}>25sprout</Logo>
      <Title>
        <h5>Our</h5>
        <h1>Products</h1>
        <span>[ 新芽產品 ]</span>
        <Select content={content}>
          <div onClick={() => { setContent('cake') }} >
            <LeftImage />
            企業級的雲端問卷服務
          </div>
          <span />
          <div onClick={() => { setContent('') }}>
            <RightImage />
            網路創新產品的最佳基石
          </div>
        </Select>
        {content === 'cake' ? <SurveyCake /> : <BackStage />}
        <ImageCotainer>
          <ImageDisplay style={{transform:`translateY(${rollingImage()}px)`}}>
            <OpacityImage src='https://www.25sprout.com/static/img/index/demo-surveycake.png' />
            <ChangeImage src='https://www.25sprout.com/static/img/index/demo-surveycake.png' style={{opacity:`${content === 'cake' ?1:0}`}} />
            <ChangeImage src='https://www.25sprout.com/static/img/index/demo-backstage.jpg' style={{opacity:`${content === '' ?1:0}`}}/>
          </ImageDisplay>
        </ImageCotainer>
      </Title>
    </ProductContent>
  )
}

export default Products
