import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {selectImage} from '../../redux/actions/select_image';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import './image-list.css';

class ImageList extends Component {
  
	onClickSelectImage(image) {
      this.props.selectImage(image)
      this.props.history.push(`/${image.title}`);
  	}

  	renderImages(){
		return this.props.images.map((image)=>{
        	return (
				<li key={image.title} onClick={()=>this.onClickSelectImage(image)}>
					<img src={image.source} alt=""/>
        		</li>
            )
    	});
    }

	render(){
		return( 
			<div className="pull-right">
				{this.renderImages()}
			</div>
		);
	} 
}

function mapStateToProps(state){
	return{images:state.activeImage.images};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectImage:selectImage},dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageList));
