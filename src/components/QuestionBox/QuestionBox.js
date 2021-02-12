import React from 'react';
import './QuestionBox.css';
import { useSelector } from 'react-redux';

const QuestionBox = () => {
	const x = useSelector(state => state.x);
	const y = useSelector(state => state.y);
	return (
		<div className="question">
			{x}x{y}
		 </div>
	);
}

export default QuestionBox;