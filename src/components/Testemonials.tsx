const Testemonials = () => {
  return (
    <div className="w-full py-16 bg-zinc-100/50" id="testemonials">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-greenLogo font-medium text-2xl sm:text-3xl text-center mb-8 sm:mb-12">
          Depoimentos
        </h4>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-center italic mb-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                nemo accusamus, quos, vero aperiam dicta animi alias eaque similique
                quidem omnis ex! Laudantium porro eaque deserunt consequatur
                laboriosam veritatis nemo dolor voluptates ipsum ab, mollitia
                minus quaerat, dolore expedita obcaecati!
              </span>

              <span className="text-center text-greenLogo font-medium">Norberto Boa</span>
              <span className="text-xs sm:text-sm">Banqueiro</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Testemonials };