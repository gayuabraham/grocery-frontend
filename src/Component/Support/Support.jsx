import React from 'react'
import "./Support.css"
const Support = () => {
  return (
    <div className='support'>
        <div className='deliv'>
            <img src="./scooty.svg" className="img-1"alt="" />
            <h2>Free delivery across the us!</h2>
            <span>Free delivery for all orders above 500</span>

        </div>
        <div className='guarantee'>
            <img src="./guarantee.svg" className = "img-2" alt="" />
            <h2>100% satisfaction guarantee!</h2>
            <span>Providing help in case of dissatisfaction</span>

        </div>
        <div className='card-support'>
            <img src="./support.svg" className='img-3'alt="" />
             <h2>Top-Notch Support</h2>
             <span>Chat with us if you have any questions</span>             
        </div>
        <div className='payment'>
            <img src="./pay.svg" className='img-4' alt="" />
            <h2>Secure Payment</h2>
            <span>we use safety payment technologies</span>
        </div>
      
    </div>
  )
}

export default Support
