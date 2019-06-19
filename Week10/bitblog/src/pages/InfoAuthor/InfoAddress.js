import React from 'react';

const InfoAddress = (props) => {
    return (
        <>
            {console.log(props)}

            <div className="infoAddress">
                {
                    <div>
                        <h3>Address</h3>
                        <p>street: {props.author.street}</p>
                        <p>city: {props.author.city}</p>
                        <p>zipcode: {props.author.zipCode}</p>
                    </div>
                }
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=" width="200" height="200" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default InfoAddress;