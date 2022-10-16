import React from 'react'

function BasePartner({partner}) {
  return (
    <div className="base-partner-box">
      <div className='base-partner'>
<img src={partner.image} alt="" />
    </div>
    </div>
  )
}

export default BasePartner