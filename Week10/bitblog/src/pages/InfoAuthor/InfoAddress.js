import React from 'react';

const InfoAddress = (props) => {
    return (
        <>
            {console.log(props.infos)}

            <div className="infoAddress">
                {
                    <div>
                        <h3>Address</h3>
                        <p>street: bla</p>
                        <p>city: bla</p>
                        <p>zipcode: bla</p>
                    </div>
                }
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=" width="200" height="200" frameborder="0" allowfullscreen></iframe>
            </div>

        </>
    )
}

export default InfoAddress;