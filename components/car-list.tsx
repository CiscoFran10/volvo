import { Car } from "@/interfaces";
import React from "react";
import Card from "./card";
import Image from "next/image";
import SliderIndicator from "./slider-indicator";
import useMedia from "@/hooks/useMedia";

interface CarListProps {
	data: Car[];
	searchValue: string;
}

const CarList = ({ data, searchValue }: CarListProps) => {
	const sliderRef: React.RefObject<HTMLUListElement> = React.useRef(null);
	const isMobile = useMedia("(max-width: 768px)");

	const handleNext = () => {
		if (sliderRef.current) sliderRef.current.scrollLeft += 600;
	};

	const handlePrev = () => {
		if (sliderRef.current) sliderRef.current.scrollLeft -= 600;
	};

	const filteredData = data.filter((item) =>
		item.bodyType.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<div className="w-full overflow-hidden">
			{filteredData.length === 0 ? (
				<p className="flex justify-center items-center min-h-[405px] md:min-h-[375px]">
					Nenhum modelo encontrado.
				</p>
			) : (
				<ul
					ref={sliderRef}
					className="flex gap-6 overflow-auto [&::-webkit-scrollbar]:hidden transition-all duration-300 scroll-smooth snap-x snap-mandatory md:snap-none h-fit"
				>
					{filteredData.map((car) => (
						<Card key={car.id} {...car} />
					))}
				</ul>
			)}

			{!isMobile ? (
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
			) : (
				<SliderIndicator data={filteredData} sliderRef={sliderRef} />
			)}
		</div>
	);
};

export default CarList;
