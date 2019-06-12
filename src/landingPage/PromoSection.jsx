import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
const PromoSection = ({headerImage, children, title}) => (
  <Layout>
<TitleImage 
    src={headerImage}
    height="auto"
    width="auto"
    alt = {title}
/>
<TitleText>
    {title}
</TitleText>
<TextBody>
    {children}
</TextBody>
  
  </Layout>
)
PromoSection.propTypes = {

    headerImage:PropTypes.node
}

PromoSection.defaultProps = {
    headerImage:"",
}

export default PromoSection

const TitleImage = styled.img`
align-self:center;
max-height:80px;
`
const Layout = styled.div`
display:flex;
flex-direction:column;
max-width:230px;
margin-top:0.1rem;
    @media screen and (max-width:768px) {
    flex-direction: column;
   
      max-width:100%;
  
    
  }
  
  @media screen and (max-width:575px) {
    flex-direction: column;
    max-width:100%;
  }


margin-bottom:auto;
font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
    word-wrap: break-word;
`
const TextBody = styled.div`

 @media screen and (max-width:768px) {
    text-align:center;
   
    
  }
`
const TitleText = styled.div`
font-size: 40px;
letter-spacing: 0.18px;
margin-bottom:2.1rem;
text-align:center;
`