import React from 'react'
import {servicesApi} from '../../Service/apiService'
import { useParams } from "react-router-dom";
function StoryDetails() {
    const { id } = useParams();
    const { data } = servicesApi.useGetourStoriesDetailsQuery(id);
  return (
    <>
    {data && (
        <section>
          <div className="story-details">
              <div className="story-details__first">
                <h1>{data.BaseTitle}</h1>
                <p>{data.BaseTitleText}</p>
              </div>
              <div className="story-details__twice">
                <div className="story-details__twice__text">
                  <h3>{data.FirstTitle}</h3>
                  <p>{data.FirstTitleText}</p>
                </div>
                <div className="story-details__twice__image">
                  <img src={data.FirstImage} alt="" />
                </div>
              </div>
              <div className="story-details__third">
                <div className="story-details__third__image">
                  <img src={data.SecondImage} alt="" />
                </div>
                <div className="story-details__third__text">
                  <h3>{data.SecondTitle}</h3>
                  <p>{data.SecondTitleText}</p>
                </div>
              </div>
          </div>
        </section>
      )}
      </>
  )
}

export default StoryDetails