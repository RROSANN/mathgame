import React from 'react';
import './QuestionBox.css';

const QuestionBox = ({correctAnswer,x,y}) => {
	return (
		<div className="question">
			{x}x{y}
		 </div>
	);
}

export default QuestionBox;