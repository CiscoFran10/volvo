"use client";

import { Car } from "@/interfaces";
import React from "react";

interface SliderIndicatorProps {
	data: Car[];
	sliderRef: React.RefObject<HTMLUListElement>;
}

const SliderIndicator = ({ data, sliderRef }: SliderIndicatorProps) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const handleScroll = React.useCallback(() => {
		const scrollPosition = sliderRef.current?.scrollLeft;
		const slideWidth = sliderRef.current?.offsetWidth;
		const totalWidth = sliderRef.current?.scrollWidth;
		const lastItemIndex = data.length - 1;

		if (scrollPosition && slideWidth && totalWidth) {
			const maxScrollPosition = totalWidth - slideWidth;
			const activeIndex =
				scrollPosition === maxScrollPosition
					? lastItemIndex
					: Math.round(scrollPosition / slideWidth);
			setActiveIndex(activeIndex);
		}
	}, [data.length, sliderRef]);

	React.useEffect(() => {
		const slider = sliderRef.current;

		slider?.addEventListener("scroll", handleScroll);
		return () => {
			slider?.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll, sliderRef]);

	return (
		<ul className="flex justify-center items-center gap-2 mt-10">
			{data.map((item, index) => (
				<li
					key={index}
					className={`w-2 h-2 rounded-full ${
						activeIndex === index ? "bg-primary-foreground" : "bg-gray-300"
					}`}
				></li>
			))}
		</ul>
	);
};

export default SliderIndicator;
