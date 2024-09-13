import Logo from "../assets/logo-v.svg";

const Contacts = () => {
  return (
    <div className="w-full py-10 sm:py-20" id="contacts">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-col mt-5 sm:mt-10 w-full">
          <img src={Logo} alt="logotipo" className="w-32 sm:w-40 md:w-48" />

          <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-20 w-full space-y-8 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-56 flex flex-col items-center">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Enderenço:</h4>
              <span className="text-center text-zinc-600">
                Matola-Rio, próximo a ponte, junto ao banco
              </span>
            </div>
 
            <div className="w-full sm:w-56 flex flex-col items-center">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Contactos:</h4>
              <span className="text-center text-zinc-600">
                +258 84 000 0000
              </span>
              <span className="text-center text-zinc-600">
                +258 84 000 0000
              </span>
            </div>
 
            <div className="w-full sm:w-56 flex flex-col items-center">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Enderenço:</h4>
              <span className="text-center text-zinc-600">
                geral@mide.co.mz
              </span>
              <span className="text-center text-zinc-600">
                credito@mide.co.mz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contacts };