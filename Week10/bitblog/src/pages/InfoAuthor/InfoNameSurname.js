import React from 'react';

const InfoNameSurname = (props) => {
    return (
        <>
            <div className="InfoNameSurname">
                {console.log(props.author)}

                <img src="https://www.dcaa.gov.ae/PublishingImages/no-image.jpeg" />
                <div>
                    <h3>{props.author.name}</h3>
                    <p>username:{props.author.username}</p>
                    <p>email:{props.author.email}</p>
                    <p>phone:{props.author.phone}</p>
                </div>
            </div>
        </>
    )
}

export default InfoNameSurname;