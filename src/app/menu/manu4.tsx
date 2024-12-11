import Image from "next/image";
import menu from "./menu1";
const Menu4 = () => {
  return (
    <div className="relative max-w-full bg-[#0D0D0D] text-[#ffffff] md:my-4 my-32">
    <div className="min-h-screen px-6 sm:px-[250px] bg-[#0D0D0D] flex items-center h-[468px] justify-center">
      <div className="w-full max-w-[1200px] bg-[#0D0D0D] text-[#ffffff]">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 bg-[#0D0D0D] text-[#ffffff] lg:grid-cols-4 gap-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className=" bg-[#0D0D0DD9] md:block lg:block md:ml-8 sm:mx-12 ml-20 flex shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.img}
                alt="chef"
                width={120}
                height={119}
                className="h-[119px] justify-center   bg-[#0D0D0DD9] text-[#ffffff] md:pt-[40px] w-[120px]"
              />
              <div className="pt-4 bg-[#0D0D0DD9] text-[#ffffff]">
                <h2 className="text-lg bg-[#0D0D0DD9]  text-[#ffffff] font-bold text-center">{item.price}</h2>
                <p className="text-sm bg-[#0D0D0DD9] text-[#ffffff] text-center  pt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu4;
