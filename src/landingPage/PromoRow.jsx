import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
const PromoRow = ({ headerImage, alt, children }) => (
  <Layout>
    <PromoImage src={headerImage} width="auto" height="auto" alt={alt} />
    <PromoText>{children}</PromoText>
  </Layout>
)

PromoRow.propTypes = {
  headerImage: PropTypes.node,
  alt: PropTypes.string.isRequired,
}

PromoRow.defaultProps = {
  alt: "",
  headerImage: null,
}
const PromoImage = styled.img`
position: relative;
align-self: center;
  max-height: 40px;
  max-width:40px;
`
const PromoText = styled.div`
  padding: 0.8rem;
  align-self: center;

  font-size: 16px;
  letter-spacing: 0.16px;
`
const Layout = styled.div`
  display: flex;
  width:100%;
  padding-left:3.4rem;
  padding-right:3.4rem;

  align-content:center;
  justify-content: flex-start;
    vertical-align: baseline;
  flex-wrap: row;
`
export default PromoRow
