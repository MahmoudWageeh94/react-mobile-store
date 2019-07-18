import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row title">
            <div className="mx-auto text-center">
               <h1 className="text-capitalize font-weight-bold">{name} <strong>{title}</strong></h1>
            </div>
        </div>
    )
}
