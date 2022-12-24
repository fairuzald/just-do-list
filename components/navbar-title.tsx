import Image from "next/image";

export default function NavbarTitle() {
  return (
    <div className="flex justify-center gap-24 bg-[#3E3E3E] border-b-[1px] border-[#959595]">
      <div className="flex gap-3 ml-8 my-1">
        <div className="relative m-auto w-[3rem] h-[3rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-[1.2rem] font-['Montserrat']">
            Just Do List!
          </div>
          <div className="text-[0.55rem] text-[#908787]">
            by our team project
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="py-2 rounded-[15px] bg-white flex flex-col flex-1 ">
          <input
            placeholder="Search ..."
            className="w-[40vw] text-black text-xs m-auto text-center bg-transparent outline-none placeholder:text-gray-600"
          ></input>
        </div>
      </div>
      <div className="flex mr-8">
        <div className="relative m-auto w-[3rem] h-[3rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="relative m-auto w-[3rem] h-[3rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
        <div className="relative m-auto w-[3rem] h-[3rem]">
          <Image
            src={"/logo-app.png"}
            layout="fill"
            alt="gambar"
            className="rounded-full  max-w-full h-auto align-middle border-none"
          ></Image>
        </div>
      </div>
    </div>
  );
}
