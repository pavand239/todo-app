import React from "react"

export const Header = ({todo,done}) => (
    <div>
        <h1>Simple Todo App </h1>
        <p className='text-muted'>{todo} more to do, {done} done</p>
    </div>
)