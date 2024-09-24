import { useState } from "react";
import { Menu } from "react-feather";

function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Menu size={30} />
      </div>
      <div className="relative inline-block text-left w-screen">
        {isOpen && (
          <div className="absolute z-10 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-blue-400 hover:text-white duration-150
                    rounded-t-md
                    "
              >
                Conta
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Hamburguer;
