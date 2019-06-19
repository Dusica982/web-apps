import React from 'react';


const InfoCompany = (props) => {
    return (
        <>
            <div>
                <h3>Company</h3>
                <p>name: {props.author.companyName}</p>
                <p>slogan: {props.author.slogan}</p>
            </div>
        </>
    )
}

export default InfoCompany;