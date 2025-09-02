import { useState, useEffect } from 'react';
import { hamburgerMenu, close } from '../assets';
import { Link } from 'react-router-dom';

const Header = ({fixed=false}) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (fixed) {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }

  }, []);

  return (
    <div className={`py-2 w-full h-[90px] ${isScrolled ? 'bg-[#0052CC]' : 'bg-transparent'} fixed z-20 top-0 left-0 transition-all duration-300`}>
      <div className="container h-full flex justify-between items-center px-5">
        <Link to="/" >
          <img className="h-10 w-auto" src="https://cdn-images-1.medium.com/v2/resize:fit:1280/1*4Q6PIWw7n6bGpvEH7bDgkQ.png" alt="" />
        </Link>

        <div className="hidden md:flex">
          <button className="px-8 py-3 rounded-[100px] bg-white text-[#0052cc] font-circularStdMedium">
            Post a job $29
          </button>
        </div>

        <div className="md:hidden pr-4" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : hamburgerMenu} alt="Menu Icon" />
        </div>
      </div>

      <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-6 md:hidden border-b' : 'hidden'}>
        <ul>
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-medium">
              Post a job $29
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
