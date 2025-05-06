import HTMLFlipBook from "react-pageflip";

export default function Mentions() {
  return (
    <div className="flex justify-center p-20 pb-25 items-stretch">
      {/* @ts-ignore */}
      <HTMLFlipBook width={500} height={600} size={"fixed"} showCover={true} maxShadowOpacity={0.5} flippingTime={700}>
        <div
          className="bg-red-800 h-full flex flex-col items-center justify-center 
    rounded-md bg-[linear-gradient(to_right,_rgb(60,_13,_20)_3px,_rgba(255,_255,_255,_0.5)_10px,_rgba(255,_255,_255,_0.25)_7px,_rgba(255,_255,_255,_0.25)_20px,_transparent_24px,_transparent_32px,_rgba(255,_255,_255,_0.25)_34px,_transparent_44px)]"
        >
          <div className="flex flex-col items-center justify-center h-full text-gray-300">
            <p className=" text-4xl text-center leading-[1.5]">Mentions Légales</p>
            <p className="text-center mt-4">Un livre edition O'clock</p>
          </div>
        </div>
        <div className="bg-white">Page 2</div>
        <div className="bg-white">Page 3</div>
        <div className="bg-white">Page 4</div>
      </HTMLFlipBook>
    </div>
  );
}
