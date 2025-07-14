import { useState } from 'react';
import Button from '../components/Button/Button.jsx';
import Display from '../components/Display/Display.jsx';
import quizData from '../data/quiz.js';

export default function QuizPage() {

	//handleClickでquizDataを1進めるための問題番号を状態管理する。
	const [quizIndex, setQuizIndex] = useState(0);

	//quizDataが進んだら回答の正解を配列に保存する。
	// useEffect(() => { })

	//Buttonをクリックしたときの処理
	const handleClick = (clickedIndex) => {
		setQuizIndex(prev => prev + 1);
	}

	return (
		<>
			{/* 問題文 */}
			<Display>
				{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
			</Display>

			{/* 選択肢 */}
			{quizData[quizIndex].options.map((option, index) => (
				<Button key={index} onClick={() => { handleClick(index) }}>
					{option}
				</Button>
			))}
		</>
	)
}

// PRテスト