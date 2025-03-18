import { testimonials } from "../localData"

export default function Testimonials() {
    return (
      <div className="flex flex-col items-center mt-10 md:mt-20  ">
        <h2 className="my-10 lg:my-20 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-20 mx-3 lg:mx-1">
          {testimonials.map((item, index) => (
            <TestiCard
              user={item.user}
              company={item.company}
              image={item.image}
              text={item.text}
              key={index}
            />
          ))}
        </div>
      </div>
    );
}

function TestiCard({user, company, image, text} : {user: string, company:string, image:string, text:string}) { 
    return <div className="bg-neutral-800 p-6 flex flex-col justify-between rounded-sm w-full">
        <p className="mb-5 text-sm font-thin tracking-wide">{text}</p>
        <div className="flex items-center">
            <img src={image} alt="user's image" className="rounded-full w-10 h-10 mr-5"/>
            <div>
                <h5 className="text-sm">{user}</h5>
                <h6 className="text-xs text-neutral-400">{company}</h6>
            </div>
        </div>    
    </div>
}