import { useState, useEffect } from "react";

const useTypewriter = (text, { speed = 40, delay = 200 } = {}) => {
	const [displayText, setDisplayText] = useState("");
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		setDisplayText("");
		setIsComplete(false);

		const timeout = setTimeout(() => {
			let i = 0;
			const interval = setInterval(() => {
				if (i < text.length) {
					setDisplayText(text.slice(0, i + 1));
					i++;
				} else {
					setIsComplete(true);
					clearInterval(interval);
				}
			}, speed);

			return () => clearInterval(interval);
		}, delay);

		return () => clearTimeout(timeout);
	}, [text, speed, delay]);

	return { displayText, isComplete };
};

export default useTypewriter;
