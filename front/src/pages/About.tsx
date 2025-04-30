import HTMLFlipBook from "react-pageflip";
export default function About() {
  return (
    <div className="flex justify-center p-20 pb-25 items-stretch  ">
      <HTMLFlipBook width={500} height={600} size={"fixed"} showCover={true} maxShadowOpacity={0.5} flippingTime={700}>
        <div className="bg-white">Page 1</div>
        <div className="bg-white">Page 2</div>
        <div className="bg-white">Page 3</div>
        <div className="bg-white">Page 4</div>
      </HTMLFlipBook>
    </div>
  );
}
