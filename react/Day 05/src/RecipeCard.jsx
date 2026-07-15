import React from "react";

export default function RecipeCard({ name,image }) {
    return (
        <div className=" col-4">
             <div className="card shadow-sm h-100">
            <img
                src={image}
                className="card-img-top"
                alt={name}
              
            />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </div>
        </div>
       
    );
}