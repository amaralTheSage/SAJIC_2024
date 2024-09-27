function ErrorPage() {
  return (
    <div className="text-white flex h-screen w-screen items-center justify-center bg-[#0056B3]">
      <div className="flex m-auto flex-col items-center justify-center gap-8 w-4/5">
        <h1 className="mb-12  text-[8rem] sm:text-[15rem] lg:text-[20rem] font-black leading-none tracking-wider text-black">
          404
        </h1>

        <p className="text-center">
          A página que você tentou acessar não existe ou não foi encontrada.
        </p>
        <a
          href="/"
          className="font-semibold"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
}
export default ErrorPage;
