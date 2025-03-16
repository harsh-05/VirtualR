import logo from "../assets/logo.png";
import { navItems } from "../localData";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  border-b border-neutral-700/80 ">
      <div className="container px-8 mx-auto relative text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-1" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex gap-5">
            {navItems.map((item: { label: string; href: string }) => (
              <li>
                <a className="hover:border-b" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
                  </ul>
                  <div className="hidden lg:flex justify-center items-center gap-10 ">
                      <a className="border px-4 py-2 rounded" href="#">Sign in</a>
                      <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-2 rounded hover:from-orange-800 hover:to-orange-500 transtition transition-all duration-500 ease-in-out">Create an account</a>
                  </div>
        </div>
      </div>
    </nav>
  );
}
