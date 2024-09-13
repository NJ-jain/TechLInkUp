import Snap from ".././assets/snap.svg";
import Support from ".././assets/customer-support.svg";
import Credit from ".././assets/wallet.svg";

const Core = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        {[
          { icon: Snap, title: "Garantias mais simples" },
          { icon: Support, title: "Atendimento personalizado" },
          { icon: Credit, title: "Credito flexivel" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-1/3 relative pb-8 group">
            <img
              src={item.icon}
              alt={item.title}
              className="h-12 w-12 fill-greenLogo"
            />
            <div>
              <h4 className="text-xl font-medium text-greenLogo mb-1">
                {item.title}
              </h4>
              <span className="leading-tight text-zinc-800 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit repellat iure.
              </span>
            </div>
            <span className="bg-zinc-300 w-full h-[2px] absolute bottom-0">
              <span className="absolute h-[2px] w-0 left-1/2 -translate-x-1/2 group-hover:bg-greenLogo group-hover:w-1/4 transition-all duration-700"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export {Core};