import React,{Component} from 'react';
import './ComicList.css';
import {Link} from 'react-router-dom';
import './SmallScreen.css';

class SmallScreen extends Component{
    state={
        d:Date.now()
    }
    componentDidMount(){
    }

    render(){
        const img= this.props.comics.map((comic)=>(
            <div  id="div1-imgComicList">
                <div className="row" >
                    <div className="col-3">
                        <Link to={`/detail/${comic._id}`}>
                            <img src={comic.avatar} id="imgComicList"></img>         
                        </Link>
                    </div>
                    <div className="col-9">
                        <p>{comic.name}</p> 
                        {comic.chapters.length>=1? <Link to={`/read/${comic.chapters[comic.chapters.length-1]._id}`}>
                            <p>chapter {comic.chapters[comic.chapters.length-1].chapIndex}: {comic.chapters[comic.chapters.length-1].date.split("T")[0]}</p>
                        </Link>:""}
                    </div>
                </div>
                
               

            </div>               
        )
    )
        return(
            <div >
                <h5> <i>truyện đang theo dõi</i></h5>
                <div className="row" id='smallScreen'>
                    {img }
                </div>

            </div>
           
        )
    }
}

export default SmallScreen