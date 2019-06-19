import React from "react";
import InfoNameSurname from './InfoNameSurname';
import InfoAddress from './InfoAddress';
import InfoCompany from './InfoCompany';
import { Link } from "react-router-dom";
// import getUserInfo from ''

const InfoSingleAuthorBox = () => {

    return (
        <>
            <div className="container">
                <Link to="/authors">Back</Link>
                <InfoNameSurname />
                <InfoAddress />
                <InfoCompany />
            </div>
        </>
    )
}

export default InfoSingleAuthorBox;