import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
const PromoInfoBox = ({ title, children }) => (
  <Layout>
    <TitleText>{title}
  </TitleText>
  <SubText>{children}</SubText>
  </Layout>
)

PromoInfoBox.propTypes = {
  title: PropTypes.string,
}

PromoInfoBox.defaultProps = {
  title: "",
}
const SubText = styled.div`
  font-size: 18px;
  letter-spacing: 0.12px;
  text-align: center;
  word-break: break-word;
  line-height: 1em;
`
const TitleText = styled.div`
  border: none;
  font-size: 64px;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1em;
  padding:0.2em;
  margin-left: auto;
  margin-right: auto;
`
const Layout = styled.div`
  display: flex;
  font-size: 64px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  line-height: 1em;
  border: 1px solid rgba(38, 38, 38, 0.5);
  border-radius: 2px;
  max-width:5.0em;
  min-height: 1.6em;
  padding:1.4rem;
  color: #262626;
  opacity: 0.55;
`
export default PromoInfoBox
