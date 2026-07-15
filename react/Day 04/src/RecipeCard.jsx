import React from "react";

export default function RecipeCard({ image, name }) {
    return (
        <div className="col-md-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={image}
                    className="card-img-top"
                    alt={name}
                    style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{name}</h5>

                </div>

            </div>
        </div>

    );
}



