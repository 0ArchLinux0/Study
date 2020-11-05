import React,{Component}from 'react'
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component{

	/*static defaultProps={
		information: []
	}*/

	render(){
		const information=this.props.information;
		const list=information.map(
			info=>(<PhoneInfo key={info.id} info={info}/>));

		return(
			<div>
				{list}
			</div>
		);
	}
}

PhoneInfoList.defaultProps={
		information: []
};

export default PhoneInfoList;