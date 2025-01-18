import Image from "next/image";
import menu from "../menu/menu1";
const Menu4 = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-[#ffffff] max-w-[1920px]    h-fit">
    <div className="h-fit px-6 sm:px-[100px]   md:block bg-[#0D0D0D] max-w-[1320px]  flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-[#0D0D0D]  text-[#ffffff]">
        <div className="grid grid-cols-1  sm:grid-cols-3  md:grid-cols-4  bg-[#0D0D0D] text-[#ffffff] lg:grid-cols-4 gap-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className=" bg-[#0D0D0DD9] h-fit py-16 "
            >
              <Image
                src={item.img}
                alt="chef"
                width={120}
                height={119}
                className="h-fit justify-center p-3   bg-[#0D0D0DD9] text-[#ffffff]"
              />
              <div className=" bg-[#0D0D0DD9] text-[#ffffff]">
                <h2 className="text-lg bg-[#0D0D0DD9]  text-[#ffffff] font-bold text-center">{item.price}</h2>
                <p className="text-sm bg-[#0D0D0DD9] text-[#ffffff] text-center  ">{item.title}</p>
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