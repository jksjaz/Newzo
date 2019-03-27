import React from "react"


const Data = (props) => {
    const { each } = props
    return (
        <div className="col-3">
            {
                each.multimedia ? 
                <img src={each.multimedia.src}
                    width="210"
                    height="140"
                    alt={each.summary_short}
                /> :
                <img src="http://www.filmfodder.com/reviews/images/poster-not-available.jpg"
                    alt="Poster Not Available"
                    height="140"
                />
            }
            <h6>{each.display_title}</h6>
            <p>{each.headline}</p>
        </div>
    )
}

export default Data