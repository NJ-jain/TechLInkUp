const AboutUs = () => {
  return (
    <div className="bg-zinc-200/30 min-h-[500px] w-full flex items-center py-8" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between w-full gap-8">
          <div className="flex flex-col justify-between items-start w-full md:w-[45%] space-y-2">
            {['Legalidade', 'Moralidade', 'Transparencia', 'Transparencia', 'Satisfacao dos clientes'].map((text, index) => (
              <div key={index} className={`w-full rounded-3xl ${index % 2 === 0 ? 'bg-yellowLogo' : 'bg-greenLogo'} font-semibold p-2 text-center`}>
                <span className="text-white">{text}</span>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[45%]">
            <h2 className="font-medium text-2xl sm:text-3xl text-greenLogo mb-4">Sobre nós</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              eligendi illo porro eum neque? Sint tenetur reiciendis earum
              exercitationem assumenda enim neque in ipsam, possimus similique
              numquam nobis vitae quo provident! Voluptatem odio, unde commodi
              vell!
              <ul className="mt-4 space-y-2">
                {[...Array(4)].map((_, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-greenLogo mr-2">•</span>
                    Processo mais agil
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutUs };