interface IAverageRatingProps {
  value: number;        // La note, ex: 4.3
  subtitle: string;     // Le sous-texte, ex: "46 Ratings" ou "Last Month"
};

const AverageRating = ({ value, subtitle }: IAverageRatingProps) => {
  // On arrondit pour savoir combien d'étoiles pleines afficher
  const fullStars = Math.round(value);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* Note moyenne */}
      <h2 className="text-5xl text-black mb-4">{value.toFixed(1)}</h2>

      {/* Étoiles */}
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill={i < fullStars ? '#FBBF24' : '#E5E7EB'}
          >
            <path d="M17.1 2.7c.37-.74 1.43-.74 1.8 0l4.16 8.43c.15.3.43.51.76.56l9.3 1.35c.82.12 1.14 1.14.55 1.71l-6.73 6.56a.94.94 0 00-.27.84l1.6 9.27c.13.82-.7 1.45-1.43 1.07l-8.32-4.38a.95.95 0 00-.9 0l-8.32 4.38c-.73.38-1.56-.25-1.43-1.07l1.6-9.27a.94.94 0 00-.27-.84L2.33 14.75c-.59-.57-.27-1.59.55-1.71l9.3-1.35c.33-.05.61-.26.76-.56L17.1 2.7z" />
          </svg>
        ))}
      </div>

      {/* Sous-titre */}
      <p className="text-lg text-gray-500">{subtitle}</p>
    </div>
  );
};

export default AverageRating;