"use client";

import { Car } from "@/interfaces";
import React from "react";
import Card from "./card";
import Image from "next/image";

const CarList = ({ data }: { data: Car[] }) => {
	const slider: React.RefObject<HTMLUListElement> = React.useRef(null);

	const handleNext = () => {
		if (slider.current) slider.current.scrollLeft += 400;
	};

	const handlePrev = () => {
		if (slider.current) slider.current.scrollLeft -= 400;
	};

	return (
		<div className="w-full sm:max-w-7xl overflow-hidden">
			<ul
				ref={slider}
				className="flex items-center gap-6 overflow-auto [&::-webkit-scrollbar]:hidden transition-all duration-300 scroll-smooth snap-x snap-mandatory"
			>
				{data.map((car) => (
					<Card key={car.id} {...car} />
				))}
			</ul>

			<div className="flex gap-2 items-center justify-end mt-10 p-2">
				<button
					onClick={handlePrev}
					aria-label="Anterior"
					className="rounded-full hover:shadow-[0_0_2px_2px_#4b9afa] h-[42px] w-[42px]"
				>
					<Image
						className="scale-[-1] "
						width={42}
						height={42}
						src={"/assets/icons/chevron-circled.svg"}
						alt=""
						aria-hidden
					/>
				</button>
				<button
					onClick={handleNext}
					aria-label="Próximo"
					className="rounded-full hover:shadow-[0_0_2px_2px_#4b9afa] h-[42px] w-[42px]"
				>
					<Image
						width={42}
						height={42}
						src={"/assets/icons/chevron-circled.svg"}
						alt=""
						aria-hidden
					/>
				</button>
			</div>
		</div>
	);
};

export default CarList;
