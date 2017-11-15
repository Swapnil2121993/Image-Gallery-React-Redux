import React,{Component} from 'react';
import {connect} from 'react-redux';
import './image-detail.css';

class ImageDetail extends Component {
    render() {
         const { defaultImage , activeImage }= this.props;
            
        if (!this.props.activeImage){
            const { source , title, description } = defaultImage;
            return (
                <div className="content-wrapper">
                    <img src={source} style={{width:600,height:500}} alt="" className="img-responsive" />
                    <div className="text-wrapper">
                        <h2>Title:{title}</h2>
                        <h2>Description:{description}</h2>
                    </div>
                </div>
            );
        }

        const { source , title, description } = activeImage;
        
        return (
            <div className="content-wrapper">
                <img src={source} style={{width:600,height:500}} alt="" className="img-responsive" />
                <div className="text-wrapper">
                    <h2>Title:{title}</h2>
                    <h2>Description:{description}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    activeImage: state.activeImage.selectedImage,
    defaultImage: state.activeImage.defaultImage,
  };
}

export default connect(mapStateToProps)(ImageDetail)