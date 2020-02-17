import React,{Component} from 'react';
import axios from'../axios';
import ComicList from './ComicList' ;
var array_length;
class ShowManga extends Component{
    state={
        comics:[],
        comicNope:[]
    }
    heap_root=(input, i) =>{
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;
        // console.log(input[left])
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
    componentDidMount() {
        axios.get('/api/manga')
          .then(res => {
            // console.log(res.data.data);
            var A=[];
            var comicNoChapter=[]
            var count=0;
            for(var i=0;i<res.data.data.length;i++){
                if(res.data.data[i].chapters.length>0)
                A[i]=res.data.data[i];
                else{
                    comicNoChapter[count]=res.data.data[i];
                    count++;
                }
            }
            // console.log(A)
            this.heapSortByDateOfNewChapter(A);
            this.setState({
                comics:A,
                comicNope:comicNoChapter
            })
          })
          .catch(error => console.log(error));
    }
    render(){

        return(
            <div>
                {this.state.comics.length >0 ? <ComicList comics={this.state.comics}/>:""}
                {this.state.comicNope.length >0? <ComicList comics={this.state.comicNope}/>:"" }
            </div>
        )
    }
}

export default ShowManga