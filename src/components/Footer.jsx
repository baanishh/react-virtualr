import { communityLinks, platformLinks, resourcesLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="mt-20 border-t  py-20 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">   
        <ul>
        <h3 className="text-md font-semibold mb-4">Resources</h3>
            {resourcesLinks.map((item,index)=>(
                <li key={index} className="space-y-2">
                    <a href={item.href} className="text-neutral-300 hover:text-white">{item.text}</a>
                </li>
            ))}
        </ul>
        <ul>
        <h3 className="text-md font-semibold mb-4">Platform</h3>
            {platformLinks.map((item,index)=>(
                <li key={index} className="space-y-2">
                    <a href={item.href} className="text-neutral-300 hover:text-white">{item.text}</a>
                </li>
            ))}
        </ul>
        <ul>
        <h3 className="text-md font-semibold mb-4">Community</h3>
            {communityLinks.map((item,index)=>(
                <li key={index} className="space-y-2">
                    <a href={item.href} className="text-neutral-300 hover:text-white">{item.text}</a>
                </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
