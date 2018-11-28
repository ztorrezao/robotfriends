import React from 'react';


const Card = ({id, name, email}) => {
	return (
			<div className="tc dib bg-light-green br3 pa3 ma2 shadow-5 grow bw2">
				<img src={`https://robohash.org/${email}`} alt={name}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
};

export default Card;