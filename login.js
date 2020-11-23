import React ,{Component} from 'react';

class Login extends Component{
    state={
        id: '',
        password: ''
    };

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick=()=>{
        alert("id: "+this.state.id);
        this.setState({
            id: '',
            password: ''
        });
    }

    render(){
        return(
            <div>
                <center>
                <input
                type="text"
                name="id"
                placeholder="아이디"
                value={this.state.id}
                onChange={this.handleChange}
                /><br />
                <input
                type="text"
                name="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handleChange}
                /><br />
                <button onClick={this.handleClick}>로그인</button>
                <button>회원가입</button>
                </center>
            </div>
        )
    }
}

export default Login;