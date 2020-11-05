import React,{Component} from 'react'


class PhoneForm extends Component{
	state={
		name:'',
		phone: ''
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value //computed value of expression in []  becomes property name
		});
	}
	handleSubmit=(e)=>{
		e.preventDefault();  //Submit을 하게 되면 아예 페이지가 새로고침되면서
		//로그기록이 저장되지않은 상태로  preventDefault()로 방지

		this.props.onCreate(this.state);
		this.setState({
			name:'',
			phone:''
		})
	}
	render(){
		return (
		<form onSubmit={this.handleSubmit}>
			<input
				placeholder="name"
				value={this.state.name}
				onChange={this.handleChange}
				name="name"
			/>
			<input 
				placeholder="input phone number"
				value={this.state.phone}
				onChange={this.handleChange}
				name="phone"
			/>
			<button type="submmit">submmit!</button>
		</form>
		);
	}
}

export default PhoneForm;