import { useState, useEffect} from "react"; 

export function useGameLogic(initialEmojis) {
  const[cards,setCards] = useState([]); 
  const[flipped,setFlipped] = useState([]); 
  const[matched,setMatched] = useState([]); 
  const[moves,setMoves] = useState(0); 
  const[isComplete,setIsComplete] = useState(false); 
	const flipDelay =800;
	
	useEffect(() => { 
	const doubled = [...initialEmojis, ...initialEmojis];
	
	for (let i = doubled.length - 1; i >0;i--) {
		const j = Math.floor(Math.random() *(i+1));/*lets make it randomised*/
		[doubled[i], doubled[j]] = [doubled[j],doubled[i]];
	}
	setCards(doubled.map((emoji, i) =>({ id: i, emoji })));
	},[]);
	
	const flipCard = (id) =>{ 
		if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
		
		const newFlipped = [...flipped, id];
		setFlipped(newFlipped);
		
		if (newFlipped.length === 2){
			setMoves((m) => m + 1);
			const [a,b] = newFlipped;
			if (cards[a].emoji === cards[b].emoji) {
			setMatched((prev) => [...prev,a,b]);
			}
			setTimeout(() => setFlipped([]),flipDelay);
		}
	};
	
	
	useEffect(() => {
		if (cards.length === 0)  return;
		const uniqCount = new Set(matched).size;
		if (uniqCount === cards.length) {setIsComplete(true);}
	}, [matched,cards.length]);
	
	return { cards, flipped, matched, moves, isComplete, flipCard };

	return{
		cards,
		flipped,
		matched,
		moves,
		isComplete,
		flipCard,
	};
}

