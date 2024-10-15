import EmpresaCard from "./EmpresaCard";

function Patrocinio() {
  return (
    <section className="bg-[#313131] text-white flex flex-col items-center gap-6 py-28">
      <h2 className="text-3xl font-semibold md:w-3/5 w-11/12 text-center m-auto mb-14">
        Patrocinadores
      </h2>
      <div className="w-3/5 flex items-center grow-0 justify-evenly flex-wrap m-auto gap-x-20 gap-y-12">
        <EmpresaCard img="/patrocinadores/aggrandize_logo.png" alt="Aggrandize" />
        <EmpresaCard img="/patrocinadores/caputo_logo.png" alt="Caputo" />
        <EmpresaCard img="/patrocinadores/doutormultas_logo.png" alt="Doutormultas" />
        <EmpresaCard img="/patrocinadores/holz_logo.png" alt="Holz" />
        <EmpresaCard img="/patrocinadores/sebrae_logo.png" alt="Sebrae" />
        <EmpresaCard img="/patrocinadores/senatec_logo.png" alt="Senatec" />
        <EmpresaCard img="/patrocinadores/sicredi_logo.jpeg" alt="Sicredi" />
      </div>
    </section>
  );
}

export default Patrocinio;
