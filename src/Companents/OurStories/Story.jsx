import React from 'react'
import { useNavigate } from 'react-router-dom'
function Story({story}) {
  const navigate = useNavigate();
  return (
        <div to={`/storydetails/${story.id}`} className="story">
        <div className="story-text">
  <h5>{story.date}</h5>
      <h3>{story.title}</h3>
      <p>{story.text}</p>
      <div className='btn' onClick={()=>navigate(`/storydetails/${story.id}`)}>Davamını Oxu</div>
  </div>
<div className="story-image">
<img src={story.image} alt="" />
</div>
    </div>
  )
}

export default Story