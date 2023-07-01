import React from "react";
import { Car } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, bodyType, imageUrl, modelName, modelType }: Car) => {
	return (
		<li className="grid gap-3">
			<h3 className="text-xs font-medium uppercase text-secondary-foreground">
				{bodyType}
			</h3>
			<h2 className="text-lg font-bold text-primary-foreground">{modelName}</h2>
			<p className="text-sm text-secondary-foreground">{modelType}</p>

			<Image width={200} height={200} src={imageUrl} alt={modelName} />

			<div className="flex items-center gap-5 mt-2">
				<Link
					className="flex items-center gap-1 text-lg font-medium uppercase text-accent"
					href={`/learn/${id}`}
				>
					learn
					<Image
						width={24}
						height={24}
						src={"assets/icons/chevron-small.svg"}
						alt=""
						aria-hidden
					/>
				</Link>

				<Link
					className="flex items-center gap-1 text-lg font-medium uppercase text-accent"
					href={`/shop/${id}`}
				>
					shop
					<Image
						width={24}
						height={24}
						src={"/assets/icons/chevron-small.svg"}
						alt=""
						aria-hidden
					/>
				</Link>
			</div>
		</li>
	);
};

export default Card;
