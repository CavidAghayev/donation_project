import React from 'react'
import Story from '../Companents/OurStories/Story';
import { useState } from 'react'
function News() {
  const [ourStories, setOurStories] = useState(null)
  React.useEffect(()=>{
fetch("http://localhost:7700/ourStories")
.then((response) => response.json())
.then((data) => setOurStories(data))
  },[]);
  return (
    <section>
    <div data-aos="fade-up" className='news-page-image'>
      <div  className="news-page-image__overlay">
        <h1>
HEKAYƏLƏRİMİZ
        </h1>
      </div>
      <div className="news-page-image__animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
    </div>
    <div className='our-stories'>
        {
           ourStories && ourStories.map((a) => 
          <Story key={a.id} story={a}/>
          )
        }
 </div>
    </section>
  )
}

export default News;