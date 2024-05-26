import React from 'react'
import './simmer.css'

const ShimmerCard = () => {
  return (

    <div className="blog-card-container ">
        {Array.from({length:10}).map((item,index)=>{
          return  <div className="blog-card-box boxItem shimmerCard gray" key={index}>
        <div className="blog-card-img simmerImg">

        </div>
       <div>
       <div className="long-simmer-details moregray"></div>
        <div className="short-simmer-details moregray"></div>
        <div className="long-simmer-details moregray">

        </div>
       </div>
        </div>
        })}
    </div>
  )
}

export default ShimmerCard
