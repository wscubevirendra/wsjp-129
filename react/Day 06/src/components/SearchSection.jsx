import React from 'react'

export default function SearchSection({ setQuery, query }) {
    return (
        <section className="search-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="input-group">
                            <input
                                id="inp"
                                value={query}
                                onChange={
                                    (e)=>{
                                     setQuery(e.target.value)

                                    }
                                }
                                type="text"
                                className="form-control"
                                placeholder="Search Movies..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
