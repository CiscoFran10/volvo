import CarList from "@/components/car-list";
import cars from "@/data/cars.json";

export default function Home() {
	if (cars)
		return (
			<main className="flex items-center justify-center m-4">
				<CarList data={cars} />
			</main>
		);
}
