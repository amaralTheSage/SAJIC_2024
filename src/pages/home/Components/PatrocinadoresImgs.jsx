export default function PatrocinadoresImgs({img, alt, tailwindWidth, className}){
  return(
    <figure className={`${tailwindWidth} aspect-square text-center rounded-full border border-gray-300 h-auto`}>
      <img
        src={img}
        alt={alt}
        className={`min-h-full min-w-full object-cover rounded-full ${className}`}
      />
    </figure>
  )

}
