function ErrorPage() {
  return (
    <div className="text-white flex h-screen w-screen items-center justify-center bg-[#0056B3]">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="mb-12 select-none text-[20rem] font-black leading-none tracking-wider text-black">
          404
        </h1>

        <p>
          A página que você tentou acessar não existe ou não foi encontrada.
        </p>
        <a
          href="/"
          // tabIndex={1}
          className="font-semibold"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}
export default ErrorPage
