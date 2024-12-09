import Image from "next/image";
import menu from "../manu/menu1";
const Menu4 = () => {
  return (
    <div className="relative max-w-full bg-[#0D0D0D] text-[#ffffff] mb-24 h-[468px]">
    <div className="min-h-screen px-6 sm:px-[250px] py-12 bg-[#0D0D0D] flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-[#0D0D0D] text-[#ffffff]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#0D0D0D] text-[#ffffff] lg:grid-cols-4 gap-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className=" bg-[#0D0D0DD9]  shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.img}
                alt="chef"
                width={120}
                height={119}
                className="h-[119px] justify-center md:pl-[60px] bg-[#0D0D0DD9] text-[#ffffff] md:pt-[40px] w-[120px]"
              />
              <div className="pt-4 bg-[#0D0D0DD9] text-[#ffffff]">
                <h2 className="text-lg bg-[#0D0D0DD9] text-[#ffffff] font-bold text-center">{item.price}</h2>
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
