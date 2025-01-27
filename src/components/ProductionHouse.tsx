import disney from "../assets/img/disney.png";
import marvel from "../assets/img/marvel.png";
import nationalGeographic from "../assets/img/nationalGeographic.png";
import pixar from "../assets/img/pixar.png";
import starWars from "../assets/img/starWars.png";

import starWarsV from "../assets/video/starWarsV.mp4";
import disneyV from "../assets/video/disneyV.mp4";
import marvelV from "../assets/video/marvelV.mp4";
import nationalGeographicV from "../assets/video/nationalGeographicV.mp4";
import pixarV from "../assets/video/pixarV.mp4";

const productionHouseList = [
	{ id: 1, image: disney, video: disneyV },
	{ id: 2, image: pixar, video: pixarV },
	{ id: 3, image: marvel, video: marvelV },
	{ id: 4, image: starWars, video: starWarsV },
	{ id: 5, image: nationalGeographic, video: nationalGeographicV },
];

export default function ProductionHouse(): JSX.Element {
	return (
		<div className="flex flex-col md:flex-row gap-5 p-2 px-10 md:px-16">
			{productionHouseList.map((item) => (
				<div
					key={item.id}
					className="group  border-[#33343c] rounded-lg 
					hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer
					relative shadow-gray-800 box-s"
				>
					<video
						src={item.video}
						autoPlay
						loop
						playsInline
						muted
						className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50
						h-full"
					/>
					<img src={item.image} className="w-full z-[1] opacity-100" />
					<div className="hover-border opacity-20"></div>
				</div>
			))}
		</div>
	);
}
