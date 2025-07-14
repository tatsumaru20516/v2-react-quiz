import { useEffect, useState } from 'react';
import Button from '../components/Button/Button.jsx';
import Display from '../components/Display/Display.jsx';
import quizData from '../data/quiz.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const.js';

export default function QuizPage() {

	const [quizIndex, setQuizIndex] = useState(0); // 現在の問題のインデックス
	const [answers, setAnswers] = useState([]); // 正誤結果を保存
	const totalQuestions = quizData.length; //　問題数
	const navigate = useNavigate(); // 遷移判定用のナビゲーション

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

	//遷移判定
	useEffect(() => {
		if (quizIndex === totalQuestions) {
			// 正当数を計算
			const correctCount = answers.filter(answer => answer === true).length;
			// 結果ページへ遷移
			navigate(ROUTES.RESULT, {
				state: {
					totalQuestions: totalQuestions,
					correctCount: correctCount
				}
			})
		}
	}, [answers]);

	return (
		<>
			{ // 問題文（現在の問題が存在する場合のみ表示）
				quizData[quizIndex] &&
				<Display>
					{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
				</Display>
			}

			{ // 選択肢（現在の問題が存在する場合のみ表示）
				quizData[quizIndex] &&
				quizData[quizIndex].options.map((option, index) => (
					<Button key={index} onClick={() => { handleClick(index) }}>
						{option}
					</Button>))
			}
		</>
	)
}