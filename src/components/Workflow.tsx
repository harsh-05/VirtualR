import { CircleCheckBig } from "lucide-react";
import code from "../assets/code.jpg";
import { checklistItems } from "../localData";
export default function Workflow() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20">
      <h3 className="text-xl md:text-4xl lg:text-6xl  ">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding workflow
        </span>
      </h3>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mt-4">
        <div className="md:w-1/2 ">
          <img src={code} alt="Code image" />
        </div>
        <div className="md:w-1/2">
          {checklistItems.map(
            (item: { title: string; description: string }, index) => (
              <div key={index} className="flex my-10">
                      <CircleCheckBig className="text-green-500 mx-5" />
                      <div>
                          <h5 className="capitalize mb-3">
                              {item.title}
                          </h5>
                          <p className="text-neutral-500">{item.description}</p>
                      </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
