import React,{Component} from 'react';
import axios from'../axios';
import ComicList from '../component/ComicList' ;
import NavBar from '../component/NavBar';
var array_length;
class SearchByCategory extends Component{
    state={
        comics:[]     ,
        ages : ["32", "33", "16", "40"] ,
        arr:[{
            "name":["a","h","k","u","v"],
            "age":1
        },{
            "name":"b",
            "age":2
        },
        {
            "name":["b","h"],
            "age":3
        }
    ]
    }
    heap_root=(input, i) =>{
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;
        if (left < array_length && input[left].chapters[input[left].chapters.length-1].date < input[max].chapters[input[max].chapters.length-1].date) {
            max = left;
        }
        if (right < array_length && input[right].chapters[input[right].chapters.length-1].date < input[max].chapters[input[max].chapters.length-1].date)     {
            max = right;
        }
        if (max != i) {
            this.swap(input, i, max);
            this.heap_root(input, max);
        }
    }
    swap =(input, index_A, index_B) => {
        var temp = input[index_A];
        input[index_A]= input[index_B];
        input[index_B] = temp;
    }
    heapSortByDateOfNewChapter = (input) => {
        array_length = input.length;
        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
            this.heap_root(input, i);
        }
        for (i = input.length - 1; i > 0; i--) {
            this.swap(input, 0, i);
            array_length--;
            this.heap_root(input, 0);
        }
    }


    checkAdult=(age)=> {
    return age == "16";
    }
    checkAdult2=(comic)=> {
        return comic == "Action";
    }
    componentDidMount() {
        var categoryToSearch=`${this.props.match.params.cate}`;
        axios.get(`/api/manga`, {
            headers: {
              'Authorization': `${document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
            }
          })
          .then(res => {
            console.log(res.data.data.data)
            var A=res.data.data.data.filter(comic=>comic.category.includes(this.props.match.params.cate))
            this.heapSortByDateOfNewChapter(A);
            this.setState({comics:A})
          })
          .catch(error => console.log(error));
    }
    refreshPage=()=>{
        window.location.reload();
    } 
    render(){
        return(
            <div>
                <NavBar/>
                {this.state.comics.length >0 ? <ComicList comics={this.state.comics}/>:""}
                <button onClick={this.refreshPage}>Refresh Page</button>
            </div>
        )
    }
}

export default SearchByCategory