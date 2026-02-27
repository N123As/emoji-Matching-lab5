import { useLocation, useNavigate } from "react-router-dom";
import { useGameStore } from "../store/gameStore";

export default function ResultPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const { results } = useGameStore();
	const lastMoves = location.state?.moves || (results.at(-1)?.moves ?? "—");
	
	return (
	<div className="page result text-center">
		<h1>🎉 Result</h1>
		<p>You completed the game in <b>{lastMoves}</b> moves!</p>
	
		{results.length > 0 && (
		<div className="mt-6 flex flex-col items-center text-center">
			<h2 className="text-lg font-semibold mb-3">Recent Games</h2>
			<div className="overflow-x-auto">
			<table className="border-collapse border border-gray-400">
				<thead>
				<tr className="bg-gray-500">
					<th className="border border-gray-400 px-4 py-2">#</th>
					<th className="border border-gray-400 px-4 py-2">Moves</th>
					<th className="border border-gray-400 px-4 py-2">Date</th>
				</tr>
				</thead>
				<tbody>
				{results.slice(-5).map((r, i) => (
					<tr key={r.id}>
					<td className="border border-gray-400 px-4 py-2">{i + 1}</td>
					<td className="border border-gray-400 px-4 py-2">{r.moves}</td>
					<td className="border border-gray-400 px-4 py-2">{r.date}</td>
					</tr>
				))}
				</tbody>
			</table>
			</div>
		</div>
		)}
	
		<div className="mt-5 space-x-3">
		<button
			onClick={() => navigate("/")}
			className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
		>
			🔁 Return to Main Menu
		</button>
		<button
		onClick={() => navigate("/game/" + Math.floor(Math.random() * 10000))}
		className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
		>
		🔂 Play Again
		</button>
		</div>
	</div>
	);
}

