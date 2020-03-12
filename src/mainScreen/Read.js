import React, {Component} from 'react';
import NavBar from '../component/NavBar';
import axios from '../axios';
import './Read.css'

class Read extends Component{
    state={
        chapter:0
    }
    getRandomInt=(max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }
    componentDidMount(){
        // localStorage.removeItem(`0`)
        // localStorage.clear()
        var test=0;
        for(var i=0; i<localStorage.length;i++){
            var iString=i.toString();
            if(localStorage.getItem(iString)==this.props.match.params.chapterId){
                test=1;
            }
        }
            
        if(test==0){
            //thêm chapter mới đọc vào lịch sử
            // var name =localStorage.length.toString();
            // localStorage.setItem (`${name}`, `${this.props.match.params.chapterId}`);

            //nếu đọc chapter tiếp theo thì xóa chapter cũ đi ( vì đã thêm chapter đọc gần nhất vào lịch sử)
            axios.get(`/api/chapter/${this.props.match.params.chapterId}`)
            .then(res=>
                {
                    for(var k=0;k<localStorage.length;k++){
                        var kString = k.toString()
                        axios.get(`/api/chapter/${localStorage.getItem(kString)}`)
                        .then(res2=>
                            {
                                if(res.data.data.manga._id==res2.data.data.manga._id){
                                    
                                    console.log("re")
                                }
                            }
                        ).catch(
                            err=>console.log("err:" + err),
                        )
                    }
                }              
            ).catch(
                err=>console.log("err:" + err),
            )
        }

        for(var j=0;j<localStorage.length;j++){
            var jString=j.toString();
            console.log(j + ": ")
            console.log(localStorage.getItem(jString));
        }

        axios.get(`api/chapter/${this.props.match.params.chapterId}`)
        .then(
            (res)=>(
                this.setState({chapter:res.data.data}),
                    axios.put(`/api/manga/${res.data.data.manga._id}`,{
                        view: res.data.data.manga.view+1
                    }).then(
                    ).catch(
                    err=>console.log("err:" + err),
                    )
            )
        )
        .catch(err=>console.log(err));
    }

    render(){
        var allImages;
        if(this.state.chapter!=0){
            allImages=this.state.chapter.imageLink.map((link)=>(
                <div className="content-2">
                    <img src={link} className="img"></img>
                </div> 
            ))
        }

        return(
            <div>
                <NavBar/>
                <div className="content">
                    <center>
                        {allImages} 
                    </center>

                </div>
                
            </div>
        )
    }
}

export default Read