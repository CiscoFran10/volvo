import { Car } from "@/interfaces";
import React from "react";
import Card from "./card";

const CarList = ({ data }: { data: Car[] }) => {
	return (
		<div className="max-w-5xl overflow-hidden">
			<ul className="flex items-center gap-3 overflow-auto [&::webkit-scrollbar]:hidden">
				{data.map((car) => (
					<Card key={car.id} {...car} />
				))}
			</ul>
		</div>
	);
};

export default CarList;
