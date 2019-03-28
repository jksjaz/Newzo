import React from "react"

import Header from "./Header"
import DataList from "./DataList"

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header/>
                <DataList/>
            </div>
        )
    }

}

export default App