import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mt-6 lg:mt-20">
      <div className="text-4xl sm:text-7xl lg:text-8xl text-center tracking-wider">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </div>
      <p className="max-w-4xl mt-10 text-center text-xs md:text-sm lg:text-base text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className="flex justify-center my-10 gap-10">
        <a href="#" className="border px-4 py-2 rounded">
          Star for free
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded"
        >
          Documentation
        </a>
      </div>
      <div className="flex justify-center gap-2 my-10">
        <video
          src={video1}
          className="w-1/2 border border-orange-500 rounded-lg"
          autoPlay
          muted
          loop
        ></video>
        <video
          src={video2}
          className="w-1/2 border border-orange-500 rounded-lg"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
