import React from 'react'

function Itineraries({ detail }) {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200 md:p-10">
                <div className="card bg-base-100 shadow-xl md:w-[60vw] p-3 sm:p-10 max-width">
                    <div className='flex flex-col md:flex-row'>
                        <div className="avatar flex flex-col pt-5">
                            <div
                                className="w-36 mask mask-squircle"
                                style={{
                                    'background': 'url(https://unavatar.io/starlord)',
                                    'backgroundSize': 'contain',
                                    'backgroundPosition': 'center'
                                }}>

                            </div>
                            <p className='text-white z-50'>
                                User tu mami!
                            </p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <div>
                                <h1 className="text-5xl font-bold">Itinerary</h1>
                                <p className="py-6"></p>
                            </div>
                            <div className="badge badge-outline">default</div>
                            <div className="badge badge-primary badge-outline">primary</div>
                            <div className="badge badge-secondary badge-outline">secondary</div>
                            <div className="badge badge-accent badge-outline">accent</div>
                        </div>
                    </div>
                    <div className='card-actions'>
                        <div className="collapse bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Itineraries