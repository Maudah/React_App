import React from 'react';

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.renderText=this.renderText.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.labelSrc !== this.props.labelSrc){
            this.renderText();
        }
    }
    renderText(){
            document.getElementById('outImage').text = this.props.labelSrc;
    }
    render() {
        return (
            <p>{this.props.labelSrc}</p>
        );
    }
}

export default Label;
