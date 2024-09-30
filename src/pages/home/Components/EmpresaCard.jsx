export default function EmpresaCard({ img, alt, classes }) {
  return (
    <img
      src={img}
      alt={alt}
      className={`${classes} w-full max-w-[250px] object-contain aspect-video rounded-lg`}
    />
  );
}
