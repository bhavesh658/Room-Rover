import React from 'react';
// Assuming Bootstrap CSS is linked globally

export default function PropertyList({ properties }) {
    // We would typically fetch this data using useEffect and useState,
    // but for this example, we use the properties prop.

    return (
        <div className="container py-5">
            <h2 className="mb-4 fw-bold">Recommended Properties</h2>

            {/* The row will contain all the automatically generated cards */}
            <div className="row g-4"> 
                {/* The .map() function iterates over the array (properties)
                  and returns a new array of Bootstrap Card components.
                */}
                {properties.map((property) => (
                    // The key prop is REQUIRED by React for lists to track elements efficiently
                    <div className="col-lg-3 col-md-6 col-12" key={property.id}>
                        <div className="card property-card border-0 shadow-sm h-100">
                            
                            {/* Image from the data object */}
                            <img 
                                src={property.imgUrl} 
                                className="card-img-top property-img" 
                                alt={property.title}
                            />
                            
                            <div className="card-body p-3">
                                {/* Title from the data object */}
                                <h6 className="card-subtitle mb-1 fw-bold text-dark">{property.title}</h6>
                                
                                {/* Location from the data object */}
                                <p className="card-text text-muted small mb-1">in {property.location}</p>
                                
                                {/* Posted time from the data object */}
                                <p className="card-text small mb-0 posted-by">
                                    Posted by <span className="fw-bold">Owner</span> 
                                    <span className="float-end text-success">{property.posted}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
}