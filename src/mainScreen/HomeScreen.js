import React,{Component} from 'react'
import NavBar from'../component/NavBar';
import Carosel from '../component/Carosel';
import ShowManga from '../component/ShowManga';
import FormPostChapter from '../component/FormPostChapter';
import FormPostTruyen from '../component/FormPostTruyen';
import FormDangKy from '../component/FormDangKy'
import Follow from './Follow';
import FollowInHome from '../component/FollowInHome';
class HomeScreen extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <NavBar/>
                <Carosel/>   
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <ShowManga/>
                        </div>
                        <div className="col-3">
                            <FollowInHome/>
                        </div>
                    </div>
                </div> 
                
                
            </div>
        )
    }
}

export default HomeScreen;