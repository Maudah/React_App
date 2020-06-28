import React from 'react';
import './Style.css';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderImage=this.renderImage.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.imageSrc !== this.props.imageSrc){
            this.renderImage();
        }
    }
    renderImage(){
        const fr = new FileReader();
        fr.onload = function () {
            document.getElementById('outImage').src = fr.result;
        };
        fr.readAsDataURL(this.props.imageSrc);
    }
    render() {
        return (
            <div>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAM1BMVEXw8fXExcnHyMzy8/fCw8e/wMTu7/PQ0dXJys7b3ODLzNDr7PD19vrU1dnf4OTl5uq6u7/L4yGbAAADDklEQVR4nO3c7W7bIBhAYb6DAdu5/6vd++JmzTY1Nj+qduU86p9UmZQeAbETmDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UXyt3qfk09V/kGpNxvvPfE3fmTfJNH/R8URzue3P0v/ytxIXni4Dy7Rm6qe/rm9JEzWzr+J2gTxtq9NOQ23V9tWGEK8IwZZ1l7wzkknom1lszs45a607IbVCXuusseRnK9qgs+dCLNtXv+yv4Y1vdbXxQqSjlMsh2mXSBV5ytT4Br3Iy+sqc05BYQ4g1gFgDiDWAWAOINYBYAwZjBY2VJ72RJtYIYg0g1gBiDSDWAGININaA17FczOUeSyZWdxIrWHdctRPLnE5DF6K1kViH17FCCdHZyDQ8vI4Vpc26Ptcj1scjS1qlersTqztZs8Jtb21nGh7OFvhNw2zE6o5YwRUtFkoMt7VY/YW723KXVj755ld3DzInHbF0ZD1GVyjbvuSolwyu2LBW3Q3h/XZ7+2qfWM4eqZyLbkmtrjHmEIvTVs1UiZW2wjT8M5ZYa2syju5O1vRYpFUfWcbXJfexRaweS9ajGNZdy6S9BJfvdmu6b00Hlve6fYQ161izgs0So+ympSor+u4kzCKjqu+h1Kf5/cYC/xRLFncdRb3Pkp3MyKQP+qbTvo2LafiI5ULQLX3JNBlc3qxl7zvdpF41Ta8f0irPIpbEKu4el4/3iuqm22aWqLfVLua5v2SNcsV52993Ifu/dnvX/rMVHVcuTB5L3gil1ccNfJM3xuZr0VVr9mmYg1uqrE4vDlckve25ySAkls3rtpwjli7wMWS5Zs/vhwMOj8fHLnh5H2Aa6qVD1DK/P2t/HBJ4/hSw/54FXsaK3u88feP1z8daIfaAU186jB4akDtImZOTHhp4HEe5HEtXt7LNed7w/aDTcdLp7KCTrmt5mfSg09MRuktn6KY+Qjd+OHOZ+XDm+7FffZhO1JomPiM9eKBc7hHnjfX7vypQF57fR1d6cccNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9Yvb2Yj4TDruukAAAAASUVORK5CYII=' className='Image' id='outImage' alt=''/>
            </div>
        );
    }
}

export default ImageBox;
