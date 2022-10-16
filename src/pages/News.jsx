import React from 'react'
import Story from '../Companents/OurStories/Story';
import { servicesApi } from '../Service/apiService';
function News() {
  const { data: stories } = servicesApi.useGetOurStoriesQuery()
  return (
    <section>
    <div className='news-background-image'>
      <div  className="news-background-image-overlay">
        <h1>
HEKAYƏLƏRİMİZ
        </h1>
      </div>
      <div className="news-animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
    </div>
    <div className='our-stories'>
        {
          stories && stories.map((a) => 
          <Story key={a.id} story={a}/>
          )
        }
 </div>
    </section>
  )
}

export default News;