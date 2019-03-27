import React from "react"
import { connect } from "react-redux"
import uuid from "uuid"

import Data from "./Data"

const DataList = (props) => {

    const renderData = () => {
        return props.data.results.map((each) => {
            return <Data key={uuid.v4()} each={each}/>
        })
    }

    return (
        <div>
            {
                props.data ?
                <div className="row">
                    {renderData()}
                </div> : undefined
            }
        </div>
    )
}

const mapStateToProps = state => ({ data: state.movieData.data })

export default connect(mapStateToProps)(DataList)