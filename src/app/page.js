import Image from "next/image";
import GameCarousel from "./gamesCarousel";

export default function Home() {
  return (
    <div className="grid grid-rows-4 space-x-8 grid-flow-col gap-6 max-w-full">
      {/* Viking Image */}
      <div className="scale-110 row-span-4 w-[15vw] h-[72vh] hidden md:block">
        <Image
          fill={true}
          src="/viking.svg"
          alt="Favorite"
          className="object-cover"
        />
      </div>

      {/* First Carousel */}
      <div className="row-span-2 w-full h-100 justify-center sm:h-[50] sm:w-[50] py-2 overflow-y-hidden overflow-x-hidden">
        <GameCarousel />
      </div>

      {/* Second Carousel */}
      <div className="row-span-2 w-full h-100 justify-center sm:h-[50] sm:w-[50] py-2 overflow-y-hidden overflow-x-hidden">
        <GameCarousel />
      </div>
    </div>
  );
}
