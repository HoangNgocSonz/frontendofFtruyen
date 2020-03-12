import React, { Component } from 'react';
import './App.css';
import HomeScreen from './mainScreen/HomeScreen'
import FormPostTruyen from './component/FormPostTruyen';
import FormPostChapter from './component/FormPostChapter';
import DetailComic from './mainScreen/DetailComic';
import Read from './mainScreen/Read';
import SearchByCategory from './mainScreen/SearchByCategory';
import Follow from './mainScreen/Follow';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component{
  getRandomInt=(max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact path='/'
              render={(props) =>{
                return <HomeScreen {...props}/>}
              } 
          />
  
          <Route
            exact path='/detail/:comicId'
              render={(props) =>{
                return <DetailComic {...props} />}
              } 
          />
  
          <Route
            exact path='/detail/read/:chapterId'
              render={(props) =>{
                return <Read {...props}/>}
              } 
          />
  
          <Route
            exact path='/category/:cate'
              render={(props) =>{
                return <SearchByCategory {...props} key={this.getRandomInt(100)}/>}
              } 
          />  

          <Route
            exact path='/follow'
              render={(props) =>{
                return <Follow {...props}/>}
              } 
          />
          
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;
