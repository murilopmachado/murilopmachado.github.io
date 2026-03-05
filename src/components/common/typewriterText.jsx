import React from "react";
import useTypewriter from "../../hooks/useTypewriter";
import useTypewriterCycle from "../../hooks/useTypewriterCycle";
import "./styles/typewriterText.css";

const TypewriterText = ({
	text,
	items,
	speed,
	delay,
	className,
	style,
	as: Tag = "h1",
}) => {
	const singleResult = useTypewriter(text || "", { speed, delay });
	const cycleResult = useTypewriterCycle(items || [], { speed });

	const isCycling = !!items;
	const displayText = isCycling ? cycleResult.displayText : singleResult.displayText;
	const cursorHidden = !isCycling && singleResult.isComplete;

	return (
		<Tag className={className} style={style}>
			{displayText}
			<span
				className={`typewriter-cursor${
					cursorHidden ? " typewriter-cursor--hidden" : ""
				}`}
			>
				|
			</span>
		</Tag>
	);
};

export default TypewriterText;
