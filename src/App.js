import React,{Component} from 'react';
import ImageList from '../src/containers/ImageList/ImageList';
import ImageDetail from '../src/containers/ImageDetail/ImageDetail';
import './App.css';


const Header = (WrappedComponent) => class extends Component{
    render(){
        return(
        <div>
            <h1> Welcome to my Image Gallery!</h1>
            <span>Please click on one of the images from right to see the metadata</span>
            <WrappedComponent/>
         </div>
        );
    }
}
          

const TopBar = () => <h3 style={{marginTop:-35}}> </h3>
  
const Layout = Header(TopBar)

export default class App extends Component{
    render(){
        return(
        <div>
            <Layout/>
            <ImageList/>
            <ImageDetail/>
            
        </div>
         );
     }
}


 
