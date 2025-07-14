import { useState } from 'react';
import Button from '../components/Button/Button.jsx';
import Display from '../components/Display/Display.jsx';
import quizData from '../data/quiz.js';

export default function QuizPage() {

	const [quizIndex, setQuizIndex] = useState(0); // 現在の問題のインデックス
	const [answers, setAnswers] = useState([]); // 正誤結果を保存

	//quizDataが進んだら回答の正解を配列に保存する。
	// useEffect(() => { })

	// 選択肢がクリックされたときの処理
		const handleClick = (clickedIndex) => {
		//正誤判定
		if (clickedIndex === quizData[quizIndex].answer) {
			setAnswers(prev => [...prev, true]); // 正解ならtrueを追加
		} else {
			setAnswers(prev => [...prev, false]); // 不正解ならfalseを追加
		}
		// 次の問題へ進む
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