import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoSingleAuthorBox from './InfoAuthor/InfoSingleAuthorBox';

class InfoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <InfoSingleAuthorBox />
            </>
        )
    }
}

export default InfoUser;