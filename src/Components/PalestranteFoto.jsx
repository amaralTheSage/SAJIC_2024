export default function PalestranteFoto({ p }) {
  return (
    <figure className="flex justify-center items-center flex-col cursor-pointer">
      <img
        src={p.foto}
        alt={p.prof}
        className="w-full aspect-square rounded-full object-cover shadow-lg"
      />
      <figcaption className="text-center font-light pt-4">
        <ul>
          <li>
            <strong className="font-bold">{p.prof}</strong>
          </li>
          <li>
            <span className="text-sm">{p.empresa}</span>
          </li>
          <li>
            <span className="text-sm">{p.tema}</span>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}
