import React from "react"
import "./layout.css"

export const Layout = (props) => (
    <div className="mx-auto container">
        {props.children}
    </div>
)