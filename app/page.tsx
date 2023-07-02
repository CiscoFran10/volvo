"use client";

import CarList from "@/components/car-list";
import SearchInput from "@/components/search-input";
import cars from "@/data/cars.json";
import React from "react";

export default function Home() {
	const [searchValue, setSearchValue] = React.useState("");

	if (cars)
		return (
			<main className="flex flex-col gap-8 items-center justify-center p-4 w-full min-h-screen">
				<div className="flex flex-col w-full max-w-7xl gap-10">
					<SearchInput
						placeholder="Buscar modelo"
						value={searchValue}
						onChange={({ target }) => setSearchValue(target.value)}
					/>
					<CarList data={cars} searchValue={searchValue} />
				</div>
			</main>
		);
}
