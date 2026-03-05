import { useState, useEffect, useRef } from "react";

const useTypewriterCycle = (
	items,
	{ speed = 40, eraseSpeed = 25, pauseDuration = 2000 } = {}
) => {
	const [displayText, setDisplayText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const indexRef = useRef(0);

	useEffect(() => {
		if (!items || items.length === 0) return;

		let timeout;
		let charIndex = 0;
		let erasing = false;
		indexRef.current = 0;

		const tick = () => {
			const current = items[indexRef.current];

			if (!erasing) {
				// Typing
				charIndex++;
				setDisplayText(current.slice(0, charIndex));
				setIsTyping(true);

				if (charIndex >= current.length) {
					// Done typing — pause then erase
					timeout = setTimeout(() => {
						erasing = true;
						setIsTyping(false);
						tick();
					}, pauseDuration);
					return;
				}
				timeout = setTimeout(tick, speed);
			} else {
				// Erasing
				charIndex--;
				setDisplayText(current.slice(0, charIndex));
				setIsTyping(false);

				if (charIndex <= 0) {
					// Done erasing — move to next item
					erasing = false;
					indexRef.current = (indexRef.current + 1) % items.length;
					timeout = setTimeout(tick, speed);
					return;
				}
				timeout = setTimeout(tick, eraseSpeed);
			}
		};

		timeout = setTimeout(tick, speed);

		return () => clearTimeout(timeout);
	}, [items, speed, eraseSpeed, pauseDuration]);

	return { displayText, isTyping };
};

export default useTypewriterCycle;
