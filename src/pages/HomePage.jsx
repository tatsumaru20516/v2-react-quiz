import { Link } from "react-router-dom"
import { ROUTES } from "../const"

export default function HomePage() {
	return (
		<div>
			<h1>Quiz App</h1>
			<Link to={ROUTES.QUIZ}>Quiz start!</Link>
		</div>
	)
}