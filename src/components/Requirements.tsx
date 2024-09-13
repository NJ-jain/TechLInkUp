import id from "../assets/id.svg";

const Requirements = () => {
  return (
    <div className="w-full min-h-[350px] bg-banner2 bg-cover bg-center bg-fixed relative py-12" id="requirements">
      <span className="absolute left-0 top-0 w-full h-full bg-black/60 z-0"/>

      <div className="max-w-5xl w-full mx-auto px-4 relative z-10">
        <h4 className="text-yellowLogo text-center text-2xl md:text-3xl font-medium mb-8 md:mb-12">
          Requisitos
        </h4>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {[
            { title: "Cópia do BI", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?" },
            { title: "Cópia do BI da testemunha", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?" },
            { title: "Factura de água ou energia", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full md:w-72">
              <img
                src={id}
                alt="BI"
                className="w-14 h-14 !fill-white mb-4"
              />
              <div className="text-center">
                <h2 className="font-medium text-yellowLogo leading-tight mb-2">{item.title}</h2>
                <span className="text-zinc-200 leading-tight text-sm">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Requirements };