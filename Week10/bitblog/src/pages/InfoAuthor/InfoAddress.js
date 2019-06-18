import React from 'react';


const InfoAddress = () => {
    return (
        <>
            <div className="infoAddress">
                <div>
                    <h3>Address</h3>
                    <p>street: Bla Bla Str</p>
                    <p>city: Belgrade</p>
                    <p>zipcode: 1000</p>
                </div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=" width="200" height="200" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default InfoAddress;