import React, {Component} from 'react';

class Membership extends Component{
    state={
        id: '',
        password: '',
        rePassword: '',
        birthday: '',
        name: '',
        phoneNumber: '',
        gender: ''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick=()=>{
        alert('id: '+this.state.id+'\n이름: '+this.state.name+'\n생년월일: '+this.state.birthday+'\n성별: '+this.state.gender+'\n전화번호: '+this.state.phoneNumber);
        this.setState({
            id: '',
            password: '',
            rePassword: '',
            birthday: '',
            name: '',
            phoneNumber: '',
            gender: ''
        })
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
            <input
            type="text"
            name="rePassword"
            placeholder="비밀번호 재확인"
            value={this.state.rePassword}
            onChange={this.handleChange}
            /><br />
            <input
            type="text"
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            /><br />
            <input
            type="text"
            name="phoneNumber"
            placeholder="전화번호"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            /><br />
            <input
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.handleChange}
            /><br />
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                <option value="여">여</option>
                <option value="남">남</option>
            </select>
            <button onClick={this.handleClick}>가입하기</button>
            </center>
            </div>
        );
    }
}

Membership.defaultState={
    gender: '여'
};

export default Membership;