import '../css/Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ny from './pics/homepage/ny.jpg';
import sf from './pics/homepage/sf.jpg';
import chi from './pics/homepage/chi.jpg';
import la from './pics/homepage/la.jpg';
import mia from './pics/homepage/mia.jpg';
import sea from './pics/homepage/sea.jpg';
import bx from './pics/homepage/bx.jpg';

function Home() {
	const TYPING_INTERVAL = 300;
	const PAUSING_INTERVAL = 3000;
	const DELETING_INTERVAL = 50;
	const pics = [ny, sf, chi, la, mia, sea, bx];
	const cities = [
		'New York',
		'San Francisco',
		'Chicago',
		'Los Angeles',
		'Miami',
		'Seattle',
		'Anywhere',
	];

	const [currentBg, setCurrentBg] = useState(pics[0]);

	const useTypedWord = (words) => {
		const [index, setIndex] = useState(0);
		const [word, setWord] = useState('');
		const [phase, setPhase] = useState('typing');

		useEffect(() => {
			if (phase === 'pausing') return;

			switch (phase) {
				case 'typing': {
					const nextLetter = words[index].slice(0, word.length + 1);

					if (nextLetter === word) {
						setPhase('pausing');
						setTimeout(() => {
							setPhase('deleting');
						}, PAUSING_INTERVAL);
					}

					const timeout = setTimeout(() => {
						setWord(nextLetter);
					}, TYPING_INTERVAL);

					return () => clearTimeout(timeout);
				}

				case 'deleting': {
					if (!word) {
						setPhase('typing');
						if (index + 1 < words.length) {
							setIndex(index + 1);
							setCurrentBg(pics[index + 1]);
							return;
						} else {
							setIndex(0);
							setCurrentBg(pics[0]);
							return;
						}
					}
					const nextRemaining = words[index].slice(
						0,
						word.length - 1
					);

					const timeout = setTimeout(() => {
						setWord(nextRemaining);
					}, DELETING_INTERVAL);

					return () => clearTimeout(timeout);
				}
				default:
					break;
			}
		}, [words, word, index, phase]);

		return word;
	};

	const changeBackground = () => {};

	const word = useTypedWord(cities);

	return (
		<>
			<div
				className="container"
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentBg}) no-repeat`,
					'background-size': 'cover',
				}}
			>
				<div className="uk-background-cover">
					<div className="center">
						<h1 className="hometext">
							Tour <span>{word}</span>
							<span className="cursor-blink">|</span> from the
							comfort of your home
						</h1>
						<Link
							className="uk-button uk-button-default homebutton"
							to="/CollectionsPage"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
