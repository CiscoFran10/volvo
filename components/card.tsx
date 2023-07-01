import React from "react";
import { Car } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, bodyType, imageUrl, modelName, modelType }: Car) => {
	return (
		<li className="flex flex-col gap-1 shrink-0 snap-start">
			<h3 className="text-xs font-bold uppercase text-secondary-foreground">
				{bodyType}
			</h3>

			<div className="flex items-center gap-1 mb-3">
				<h2 className="text-base font-bold text-primary-foreground">
					{modelName}
				</h2>
				<p className="text-sm text-secondary-foreground font-medium">
					{modelType}
				</p>
			</div>

			<Image
				className="w-full h-full object-cover"
				width={280}
				height={280}
				src={imageUrl}
				alt={modelName}
			/>

			<div className="flex items-center justify-center gap-7 mt-8">
				<Link
					className="flex items-center gap-2 text-base font-bold uppercase text-accent hover:text-accent/70"
					href={`/learn/${id}`}
				>
					learn
					<Image
						width={14}
						height={14}
						src={"assets/icons/chevron-small.svg"}
						alt=""
						aria-hidden
					/>
				</Link>

				<Link
					className="flex items-center gap-2 text-base font-bold uppercase text-accent hover:text-accent/70"
					href={`/shop/${id}`}
				>
					shop
					<Image
						width={14}
						height={14}
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
