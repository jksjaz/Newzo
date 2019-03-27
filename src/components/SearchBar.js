import React from "react"
import { connect } from "react-redux"

import { movieInitDis } from "../actions/actions"

const SearchBar = ({ dispatch, loc }) => {
    const disCall = (e) => {
        if (loc === "header") {
            return movieInitDis({ type: "MOVIE_RES", data: e.target.query.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(disCall(e))
        e.target.query.value = ""
    }

    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" name="query" type="search" placeholder="Search"/>
            <button className="btn btn-info my-2 btn-block" type="submit">Search</button>
        </form>
    )
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps)(SearchBar)