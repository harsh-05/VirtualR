import { features } from "../localData";

export default function FeatureSection() {
  return (
    <div className="flex flex-col items-center border-b border-neutral-800 py-5">
      <h4 className="mt-10 mb-20 text-center text-xs md:text-base bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent uppercase">
        Feature
      </h4>
      <h1 className=" text-4xl md:text-5xl lg:text-7xl text-center tracking-wide">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          your code
        </span>
      </h1>

      <div className="flex flex-wrap mt-10 md:mt-20 ">
        {features.map((item, index) => (
          <Features
            key={index}
            icon={item.icon}
            text={item.text}
            description={item.description}
          ></Features>
        ))}
      </div>
    </div>
  );
}

function Features({
  icon: Icon,
  text,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  description: string;
}) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
      <div className="flex ">
        <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 md:h-10 md:w-10 rounded-full text-orange-700 bg-neutral-800 mx-4">
          <Icon />
        </div>
        <div>
          <h5 className="mb-5 mt-1 text-xl ">{text}</h5>
          <p className="text-md text-neutral-500 mb-20">{description}</p>
        </div>
      </div>
    </div>
  );
}
