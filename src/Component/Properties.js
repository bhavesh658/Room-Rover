import React from 'react'

export default function Properties() {
    return (
        <div><section class="options-section py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5 fw-bold text-dark">PROPERTIES</h2>

            <div class="row g-4">
                
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card option-card shadow-sm h-100 text-center">
                        <div class="card-body p-4">
                            <i class="fa-solid fa-flask fa-3x text-primary mb-3"></i>
                            <h5 class="card-title fw-bold">Hostels</h5>
                            <a href="/" class="btn btn-sm btn-outline-primary mt-2">Find Hostel</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card option-card shadow-sm h-100 text-center">
                        <div class="card-body p-4">
                            <i class="fa-solid fa-laptop-code fa-3x text-success mb-3"></i>
                            <h5 class="card-title fw-bold">Rooms</h5>
                           
                            <a href="/" class="btn btn-sm btn-outline-success mt-2">Find Rooms</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card option-card shadow-sm h-100 text-center">
                        <div class="card-body p-4">
                            <i class="fa-solid fa-handshake fa-3x text-warning mb-3"></i>
                            <h5 class="card-title fw-bold">Flates</h5>
                            <a href="/" class="btn btn-sm btn-outline-warning mt-2">Find Flates</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="card option-card shadow-sm h-100 text-center">
                        <div class="card-body p-4">
                            <i class="fa-solid fa-calendar-days fa-3x text-danger mb-3"></i>
                            <h5 class="card-title fw-bold">Mess</h5>
                            <a href="/" class="btn btn-sm btn-outline-danger mt-2">Find Mess</a>
                        </div>
                    </div>
                </div>

            </div> 
        </div> 
    </section></div>
    )
}
