import HTMLFlipBook from "react-pageflip";

export default function About() {
  return (
    <div className="flex justify-center pt-10 pb-10  items-stretch overflow-hidden">
      {/* todo : regler en mobile device */}
      {/* @ts-ignore */}
      <HTMLFlipBook width={495} height={700} size={"fixed"} showCover={true} maxShadowOpacity={0.5} flippingTime={700}>
        <div className="w-full h-auto">
          <img src="/front_cover.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/presentation.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/presentation_2.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/bounabassa.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/guilhem.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/axel.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/amandine.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/mickael.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/epilogue.webp" alt="" />
        </div>
        <div className="bg-white ">
          <img src="/back_cover.webp" alt="" />
        </div>
      </HTMLFlipBook>
    </div>
  );
}
