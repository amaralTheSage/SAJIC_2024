export default function EmpresasImgs({img, alt}){
  return (
    <figure className="w-full aspect-[16/11]">
      <img
        src={img}
        alt={alt}
        className="h-full w-full object-cover rounded-md"
      />
    </figure>
  )
}
