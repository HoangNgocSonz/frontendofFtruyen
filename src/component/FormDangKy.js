import React, { Component } from 'react';
import axios from '../axios'

class FormDangKy extends Component {
    state = {
       
      }
    componentDidMount(){
      
    }

    handleSubmit=()=>{
        axios.post('/api/auth/register',{
            name:document.getElementById("userName").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
        }).then(
            res=>{
                console.log(res.data)
            }
        ).catch(
            err=>console.log("err: "+ err)
        )
    }
  render(){
      return(
<div className="App">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input class="form-control" type="text" placeholder="tên đăng nhập" id="userName" readonly></input>
                    <input class="form-control" type="text" placeholder="email" id="email" readonly></input>
                    <input class="form-control" type="password" placeholder="mật khẩu" id="password" readonly></input>
                    
                    <button type="submit" class="btn btn-primary mb-2" onClick={this.handleSubmit}>Confirm identity</button>
                </div>
            </div>
        </div>
    </div>
      )
  }
    
}
export default FormDangKy;
