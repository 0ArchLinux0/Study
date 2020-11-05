import React, { Component } from 'react'

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            id: 0,
            name: '',
            phone: ''
        }

    }
   
    render() {
    const { id, name, phone } = this.props.info;
    const style = {
        border: '1px solid blue',
        margin: '10px',
        padding: '10px'
    };
    return(
        <div style={style}>
			<div>id(index):{id}</div>
			<div>name:{name}</div>
			<div>phone:{phone}</div>
		</div>
		);
    }
}

export default PhoneInfo