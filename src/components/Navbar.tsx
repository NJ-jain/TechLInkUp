import { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import Logo from ".././assets/Logotipo-h.svg";

const Navigation = [
  {name: "Home", href: "hero"},
  // {name: "About Us", href: "about"},
  {name: "Services", href: "services"},
  {name: "Industries", href: "industries"},
  {name: "Contact ", href: "contacts"},
]

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBg();
    window.addEventListener('scroll', changeBg);

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', changeBg);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`${scroll || isOpen ? 'bg-black !border-none' : 'bg-transparent'} w-full fixed z-50 border-b-zinc-600 border-b-2 transition-all duration-700`}
    >
      <div
        className="max-w-5xl w-full flex flex-wrap justify-between items-center mx-auto p-4"
        ref={menuRef}
      >
        <div
          className="font-bold text-white"
        >
          <img src={Logo} alt="logotipo" className="w-28 sm:w-32 md:w-40"/>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 cursor-pointer`}
        >
          {Navigation.map((item, i) => (
            <Link
              className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6 text-base font-semibold text-gray-100 hover:text-yellowLogo transition-all"
              key={i}
              to={item.href}
              spy={true} smooth={true} offset={-100} duration={1000}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar