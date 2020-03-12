import React,{Component} from 'react';
import './ComicList.css';
import {Link} from 'react-router-dom';

class ComicList extends Component{
    state={
        d:Date.now()
    }
    componentDidMount(){
    }

    render(){
        const img= this.props.comics.map((comic)=>(
            <div  id="div1-imgComicList">
                <Link to={`/detail/${comic._id}`}>
                    <img src={comic.avatar} id="imgComicList"></img> 
                    <p>{comic.name}</p>
                    <p>view: {comic.view}</p>
                    <p>like: {comic.like}</p>
                    <p>follow: {comic.follow}</p>
                    
                </Link>
                {comic.chapters.length>=1? <Link to={`/detail/read/${comic.chapters[comic.chapters.length-1]._id}`}>
                    <p>chapter {comic.chapters[comic.chapters.length-1].chapIndex}: {comic.chapters[comic.chapters.length-1].date.split("T")[0]}</p>
                </Link>:""}
                {comic.chapters.length>=2?<Link to={`/detail/read/${comic.chapters[comic.chapters.length-2]._id}`}>
                    <p>chapter {comic.chapters[comic.chapters.length-2].chapIndex}: {comic.chapters[comic.chapters.length-2].date.split("T")[0]}</p> 
                </Link>:""}
                {comic.chapters.length>=3?<Link to={`/detail/read/${comic.chapters[comic.chapters.length-3]._id}`}>
                    <p>chapter {comic.chapters[comic.chapters.length-3].chapIndex}: {comic.chapters[comic.chapters.length-3].date.split("T")[0]}</p> 
                </Link>:""}
            </div>               
        )
    )
        return(
            <div >
                <h3>Truện mới cập nhật</h3>
                <div className="row">
                    {img }
                </div>

            </div>
           
        )
    }
}

export default ComicList