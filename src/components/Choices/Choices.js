import React from 'react';
import './Choices.css';

const Choices = () => {
	return (
		<div className="flex choices">
		  <div className="box grow-large ">
		    <code>1</code>
		  </div>
		  <div className="box grow-large">
		    <code>2</code>
		  </div>
		  <div className="box grow-large">
		    <code>3</code>
		  </div>
		  <div className=" box box4 grow-large">
		    <code>4</code>
		  </div>
		 </div>
	);
}

export default Choices;