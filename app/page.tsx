import Image from "next/image";
import hero_bg from "./assets/hero_img.jpeg";
const Home = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Image src={hero_bg} alt="Hero Image" fill className="object-cover" />
      <div className=" z-10 absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-5 text-center text-white">
        <h1 className="text-2xl md:text-5xl md:max-w-1/3 font-bold">
          Welcome to Next-Trip!
        </h1>
        <p className="mt-4 text-lg md:text-2xl md:max-w-1/2">
          Discover new destinations, plan your trips, and make unforgettable
          memories with Next-Trip. Start your adventure today!
        </p>
      </div>
    </div>
  );
};

export default Home;
