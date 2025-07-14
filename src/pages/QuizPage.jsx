import Button from '../components/Button/Button.jsx';
import Display from '../components/Display/Display.jsx';
import quizData from '../data/quiz.js';

export default function QuizPage() {
	return (
		<>
			{/* 問題文 */}
			<Display>
				{`Q1. ${quizData[0].question}`}
			</Display>

			{/* 選択肢 */}
			{quizData[0].options.map((option, index) => (
				<Button key={index}>
					{option}
				</Button>
			))}
		</>
	)
}