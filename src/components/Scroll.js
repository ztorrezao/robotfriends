import React from 'react';

const Scroll = props => {
	return (
		<div className="bt ma2 pa2" style={{overflowY: 'scroll', height: '432px', borderColor: '#0ccac4', borderWidth: '2px', }}>
			{props.children}
		</div>
		);
}

export default Scroll;