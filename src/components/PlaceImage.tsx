type Props = {
  src: string | null;
  alt: string;
  className?: string;
};

// Renders a real image when available, otherwise a clearly-marked placeholder.
// TODO(real-photo): when src is null, search the place's name, swap into PLACES.image
export function PlaceImage({ src, alt, className = "" }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }
  return (
    <div className={`photo-placeholder w-full h-full ${className}`}>
      <span className="text-sm">{alt}</span>
    </div>
  );
}
