import { communityLinks, platformLinks, resourcesLinks } from "../localData";

export default function Footer() {
    return <div className="border-t border-neutral-600 pt-5 flex justify-between">
        <div className="flex flex-col p-2">
            <h6 className="mb-7">Resources Links</h6>
            {resourcesLinks.map((item) => (
                <a className="text-thin text-sm text-neutral-500 mb-3" href={item.href}>{item.text}</a>
            ))}
        </div>
        <div className="flex flex-col p-2">
            <h6 className="mb-7">Platform Links</h6>
            {platformLinks.map((item) => (
                <a className="text-thin text-sm text-neutral-500 mb-3" href={item.href}>{item.text}</a>
            ))}
        </div>

        <div className="flex flex-col p-2">
            <h6 className="mb-7">Community Links</h6>
            {communityLinks.map((item) => (
                <a className="text-thin text-sm text-neutral-500 mb-3" href={item.href}>{item.text}</a>
            ))}
        </div>
     </div>
 }