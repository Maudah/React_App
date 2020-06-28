import React from 'react';
import './Style.css';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    onSelectFileClick = (event) => event.target.value = null;
    handleChange(event)
    {
        const tgt = event.target || window.event.srcElement,
            files = tgt.files;
        if (FileReader && files && files.length) {
            this.props.onValueChange(files[0], event.target.attributes[0].ownerElement.files[0].name);
        }
    }
     render() {
         return (
             <div>
                 <label className='chooseFileStyle'>
                     Select file
                     <input style={{display: 'none'}} id='inputFile' type='file' accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange}
                            onClick={this.onSelectFileClick}/>
                 </label>
             </div>
         );
     }
}

export default InputBox;
