import React from "react";
import InfoNameSurname from './InfoNameSurname';
import InfoAddress from './InfoAddress';
import InfoCompany from './InfoCompany';
import { Link } from "react-router-dom";
import getUserInfo from '../../shared/Fetch/fetchInfoUser';

class InfoSingleAuthorBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoAboutUser: null

        }
    }


    componentDidMount() {
        fetch(getUserInfo() + this.props.match.params.id)
            .then((data) => {
                console.log(data);
                this.setState({
                    infoAboutUser: data
                })
            })
    }
    render() {
        return (
            <>



            </>
        )
    }
}

export default InfoSingleAuthorBox;