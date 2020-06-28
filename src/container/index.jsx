import React from 'react';
import './style.css';
import InputBox from '../Component/InputBox'
import ImageBox from '../Component/ImageBox'
import Label from '../Component/Label'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: '',
            labelSrc: 'Image for example'
        };
        this.onValueChange=this.onValueChange.bind(this);
    }
    onValueChange(file, fileName) {
        this.setState({imageSrc: file});
        this.setState({labelSrc: fileName});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <InputBox onValueChange={this.onValueChange}/>
                    <ImageBox imageSrc={this.state.imageSrc}/>
                    <Label labelSrc={this.state.labelSrc}/>
                </header>
            </div>
        );
    }
}

export default App;
