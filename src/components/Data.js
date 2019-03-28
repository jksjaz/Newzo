import React from "react"


const Data = (props) => {
    const { each } = props
    return (
        <div className="outterMovieContainer col mb-3 shadow-sm bg-white rounded">
            <div className="movieContainer">
                {
                    each.multimedia ? 
                    <img src={each.multimedia.src}
                        alt={each.summary_short}
                        className="poster"
                    /> :
                    <img src="http://www.filmfodder.com/reviews/images/poster-not-available.jpg"
                        alt="Poster Not Available"
                        className="poster"
                    />
                }
                <p className="displayTitle">{each.display_title}</p>
                <p className="description">{each.headline}</p>
            </div>
        </div>
    )
}

export default Data