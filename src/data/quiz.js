// クイズの問題データを配列の中にオブジェクトで定義している。現在は3問で選択肢は各3つ。
const quizData = [
	// プロパティには問題文、選択肢、正解のキーと値を設定
	{
		question: 'HTMLの正式名称は？',
		options: ['Hyper Text Markup Language', 'Hyper Text Markup Link', 'Hyper Text Markup Level'],
		answer: 0
	},
	{
		question: 'CSSの正式名称は？',
		options: ['Cascading Style Sheet', 'Cascading Style Script', 'Cascading Style System'],
		answer: 0
	},
	{
		question: 'JavaScriptの正式名称は？',
		options: ['JavaScript', 'Java Script', 'Java Script Language'],
		answer: 0
	}
]

export default quizData