export default function PalestranteFoto({foto, nome, empresa, tema}){
  return(
    <figure className="flex justify-center items-center flex-col">
      <img src={foto} alt={nome} className="w-48 h-48 rounded-full object-cover"/>
      <figcaption className="text-center font-light pt-4">
        <ul>
          <li><strong className="font-bold">{nome}</strong></li>
          <li><span className="text-sm">{empresa}</span></li>
          <li><span className="text-sm">{tema}</span></li>
        </ul>
      </figcaption>
    </figure>
  )
}
