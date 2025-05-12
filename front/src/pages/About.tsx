import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function About() {
  const [flipPageDimensions, setFlipPageDimensions] = useState({
    width: 495,
    height: 700,
  });
  const [windowWidth, setWindowWidth] = useState(0);

  // Utiliser useEffect pour détecter le chargement initial de la page
  useEffect(() => {
    // Définir la largeur initiale de la fenêtre
    setWindowWidth(window.innerWidth);

    // Fonction pour mettre à jour la largeur de la fenêtre
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize);

    // Nettoyer
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mettre à jour les dimensions lorsque windowWidth change
  useEffect(() => {
    if (windowWidth < 550) {
      setFlipPageDimensions({
        width: 354,
        height: 500,
      });
    } else {
      setFlipPageDimensions({
        width: 495,
        height: 700,
      });
    }
  }, [windowWidth]);

  return (
    <div className="flex justify-center pt-10 pb-10 overflow-hidden">
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={flipPageDimensions.width}
        height={flipPageDimensions.height}
        showCover={true}
        maxShadowOpacity={0.5}
        flippingTime={700}
      >
        <div className="w-full h-auto">
          <img
            srcSet="front_cover.webp 495w, front_cover_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/front_cover.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="presentation.webp 495w, presentation_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/presentation.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="presentation_2.webp 495w, presentation_2_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/presentation_2.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="bounabassa.webp 495w, bounabassa_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/bounabassa.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="guilhem.webp 495w, guilhem_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/guilhem.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="axel.webp 495w, axel_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/axel.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="amandine.webp 495w, amandine_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/amandine.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="mickael.webp 495w, mickael_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/mickael.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="epilogue.webp 495w, epilogue_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/epilogue.webp"
            alt=""
          />
        </div>
        <div className="w-full h-auto">
          <img
            srcSet="back_cover.webp 495w, back_cover_mobile.webp 354w"
            sizes="(max-width: 550px) 354px, 495px"
            src="/back_cover.webp"
            alt=""
          />
        </div>
      </HTMLFlipBook>
    </div>
  );
}
