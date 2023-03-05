import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="234" rx="16" ry="16" width="125" height="28" /> 
    <rect x="7" y="11" rx="0" ry="0" width="258" height="202" /> 
    <rect x="-2" y="277" rx="10" ry="10" width="280" height="74" /> 
    <rect x="0" y="375" rx="11" ry="11" width="95" height="30" /> 
    <rect x="126" y="376" rx="19" ry="19" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;