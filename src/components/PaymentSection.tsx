import { CircleCheck } from "lucide-react";
import { pricingOptions } from "../localData"

export default function PaymentSection() {
    return (
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h2 className="text-3xl md:text-5xl tracking-wide">Payment</h2>
        <div className="flex gap-3 mt-10 ">
          {pricingOptions.map((item, index) => (
            <PaymentCard
              key={index}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    );
}
function PaymentCard({ title, price, features }: { title: string, price: string, features: string[] }) {
    return (
      <div className="md:w-1/3 flex-shrink-0     border rounded-md border-neutral-500 shadow-neutral-500 shadow-md p-10">
        <h2 className="text-2xl mb-10">{title}</h2>
        <div className="flex items-end mb-10">
          <h3 className="text-5xl">{price} </h3>{" "}
          <span className="text-xs text-neutral-500">/Month</span>
        </div>
        <div>
          {features.map((item, index) => (
            <div key={index} className="flex gap-3 mb-6 flex-shrink-0 min-w-max">
                  <CircleCheck />
                  <h5 className="text-base">{item}</h5>
            </div>
          ))}
            </div>
            
            <button className="border border-orange-500 rounded-md px-10 py-2 min-w-max hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 shadow-md shadow-orange-500">Subscribe</button>
      </div>
    );
 }