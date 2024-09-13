import { FormEvent, useEffect, useState } from "react"

const Header = () => {
  const [lending, setLending] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [payment, setPayment] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function handlePercentage(months: number) {
    if (months > 0 && months < 3) {
      setPercentage(25);
    } else if (months >= 3 && months < 6) {
      setPercentage(30);
    } else if (months > 9 && months < 12) {
      setPercentage(35);
    } if (months === 0) {
      setPercentage(0)
    }
  }
  function handlePayment(loan : number, months : number) {
    const all = loan * (percentage / 100) + loan;
    const amortized = Math.round(all / months * 100) / 100;

    setPayment(amortized);
    setTotal(all);
    return all;
  };

  useEffect(() => {
    
    handlePercentage(months);
  },[months, lending])

  return (
    <div
      className="min-h-screen bg-banner1 bg-cover bg-center relative w-full bg-fixed"
      id="hero"
    > 
      <span className="absolute inset-0 bg-black/60" />

      <div
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div
            className="w-full lg:w-2/5 flex flex-col gap-4 text-center lg:text-left"
          >
            <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Precisas de algum <span className="text-yellowLogo">Tako?</span>
            </h2>
            <p className="text-white font-semibold text-base sm:text-lg md:text-xl">
              Nós temos a melhor <span className="text-greenLogo font-bold">solução</span> para o seu problema!
            </p>
          </div>

          <div
            className="w-full lg:w-3/5 xl:w-1/2 flex flex-col bg-zinc-200 rounded-2xl justify-between p-4 sm:p-6 md:p-8"
          >
            <h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-4">Simular credito</h2>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <label htmlFor="lending" className="font-semibold font-sans">Quanto precisas:</label>
                <input
                  type="number"
                  id="lending"
                  className="w-full sm:w-3/6 rounded-md text-lg focus-visible:outline-none px-2 py-1 text-zinc-600 font-medium font-sans placeholder:text-zinc-400 text-end"
                  placeholder="50.000 MT"
                  value={lending}
                  onChange={event => setLending(parseInt(event.target.value))}
                  min={0}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                <label htmlFor="months" className="font-semibold font-sans">Em quantos meses pretende pagar:</label>
                <input
                  type="number"
                  id="months"
                  className="w-full sm:w-16 rounded-md text-lg focus-visible:outline-none px-2 py-1 text-zinc-600 font-medium font-sans placeholder:text-zinc-400 text-end"
                  placeholder="5"
                  value={months}
                  onChange={event => setMonths(parseInt(event.target.value))}
                  min={0}
                />
              </div>
            </div>

            <span className="w-full h-[2px] bg-zinc-400/30 my-4"></span>

            <div className="space-y-2">
              <p className="font-medium text-lg">
                <span className="text-yellow-600">Percentagem: </span>
                <span className="text-greenLogo">{percentage}%</span>
              </p>

              <p className="font-medium text-lg">
                <span className="text-yellow-600">Valor a ser pago mensalmente: </span>
                <span className="text-greenLogo">{payment ? payment : 0} MT</span>
              </p>

              <p className="font-medium text-lg">
                <span className="text-yellow-600">Valor total:</span>
                <span className="text-greenLogo"> {total} MT</span>
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button
                onClick={() => handlePayment(lending, months)}
                type="button"
                className="w-full sm:w-1/2 bg-yellowLogo py-2 px-4 font-sans font-bold text-white rounded-lg hover:bg-yellow-500 transition-all duration-500 text-sm md:text-base"
              >
                Simular empréstimo
              </button>
              
              <button
                type="submit"
                className="w-full sm:w-1/2 bg-greenLogo py-2 px-4 font-sans font-bold text-white rounded-lg hover:bg-greenLogoHover transition-all duration-500 text-sm md:text-base"
              >
                Pedir empréstimo
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

  export default Header;