import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";

export default function ResultPage() {
	const location = useLocation(); // QuizPageからの状態を取得
	const totalQuestions = location.state.totalQuestions; // 総問題数
	const correctCount = location.state.correctCount; // 正解数

	return (
		<>
			<h1>ResultPage</h1>
			<p>{`あなたの正解数は...全${totalQuestions}問中${correctCount}問でした！`}</p>
			<Link to={ROUTES.QUIZ}>もう一度チャンレンジ！</Link>
		</>
	)
}