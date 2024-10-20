import Image from "next/image";
import GameCarousel from "./gamesCarousel";

export default function Home() {
  return (
    <div class="grid grid-rows-4 mx-auto grid-flow-col gap-6 px-4">
      {/* Viking Image */}
      <div className="scale-110 row-span-4  w-[15vw] h-[72vh]  xs:hidden">
        <Image
          fill="true"
          src="/viking.svg"
          alt="Favorite"
          className="object-fit"
      
        />
      </div>
        {/* First Carousel */}
        <div className="row-span-2 w-100 h-100 justify-center sm:w-[50] py-2 overflow-y-hidden overflow-x-hidden">
          <GameCarousel />
        </div>

        {/* Second Carousel */}
        <div className=" row-span-2 w-100 h-100 justify-center sm:w-[50] py-2 overflow-y-hidden overflow-x-hidden">
          <GameCarousel />
        </div>
    
    </div>
  );
}