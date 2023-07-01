import CarList from "@/components/car-list";
import cars from "@/data/cars.json";

export default function Home() {
	if (cars)
		return (
			<main className="flex items-center justify-center p-4 w-full min-h-screen">
				<CarList data={cars} />
			</main>
		);
}
