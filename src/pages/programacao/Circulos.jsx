export default function Circulos() {
  return (
    <>
      {/* Circles */}
      <section className="w-11/12 md:w-4/5 m-auto grid grid-cols-5 mt-20 items-center font-bold text-[#0056B3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
          <p>16/10</p>
        </div>

        <div className="h-px bg-black flex items-center justify-center">
          <div className="h-5 aspect-square rounded-full bg-black"></div>
        </div>

        <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
          <p>17/10</p>
        </div>

        <div className="h-px bg-black flex items-center justify-center">
          <div className="h-5 aspect-square rounded-full bg-black"></div>
        </div>

        <div className=" border-black border-2 rounded-full aspect-square flex items-center justify-center">
          <p>18/10</p>
        </div>
      </section>
    </>
  )
}
