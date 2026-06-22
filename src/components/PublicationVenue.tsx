const HIGHLIGHTED_JOURNAL = 'Nature Communications';

type PublicationVenueProps = {
  venue: string;
  className?: string;
};

export default function PublicationVenue({ venue, className }: PublicationVenueProps) {
  const parts = venue.split(HIGHLIGHTED_JOURNAL);

  if (parts.length === 1) {
    return <p className={className}>{venue}</p>;
  }

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-semibold text-emerald-300">{HIGHLIGHTED_JOURNAL}</span>
          )}
        </span>
      ))}
    </p>
  );
}
