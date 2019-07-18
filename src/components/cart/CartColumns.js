import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid d-none d-lg-block mt-1">
            <div className="row">
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>products</h3>
                </div>
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>name</h3>
                </div>
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>price</h3>
                </div>
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>count</h3>
                </div>
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>remove</h3>
                </div>
                <div className="col-lg-2 text-center text-capitalize mx-auto">
                    <h3>total</h3>
                </div>
            </div>
        </div>
    )
}
