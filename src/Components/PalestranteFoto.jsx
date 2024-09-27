export default function PalestranteFoto({foto, nome, empresa, tema}){
  return(
    <figure className="flex justify-center items-center flex-col">
      <img src={foto} alt={nome} className="w-48 h-48 rounded-full object-cover"/>
      <figcaption className="text-center font-light">
        <ul>
          <li><strong>{nome}</strong></li>
          <li><span>{empresa}</span></li>
          <li><span>{tema}</span></li>
        </ul>
      </figcaption>
    </figure>
  )
}
