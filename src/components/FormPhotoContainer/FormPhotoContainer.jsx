import React from "react";
import './FormPhotoContainer.scss';

class FormPhotoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urls: []
        }
    }

    update() {
        const urls = [];
        for (let file of this.props.files) {
            urls.push(URL.createObjectURL(file));
        }

        this.setState({urls});
    }

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.files) !== JSON.stringify(this.props.files)) {
            this.update();
        }
    }

    imageClick(e) {

    }

    render() {
        return (
            <div className="FormPhotoContainer">
                {this.state.urls.map((value, index, array) => {
                    return <div className="FormPhotoContainer__item" key={index} onClick={this.imageClick.bind(this)} style={{'background-image': `url(${value})`}}/>
                })}
            </div>
        );
    }
}

export default FormPhotoContainer;