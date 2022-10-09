import React from 'react'

import { Route } from 'react-router-dom'

import Content from './Content'

const Planning = () => {
    return (
        <div>
            <div style={{backgroundColor:"#333333", height:"9.6rem"}}></div>
            <h1 style={{paddingTop:"8%", paddingBottom:"5%", color: "#AC623D"}}>Plan Your Experience</h1>
            <Route path='/planning/type'><Content/></Route>
        </div>
    )
}

export default Planning