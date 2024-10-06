import Logo from "../assets/logo-v.svg";

const Contacts = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:techlinkupsolutions@gmail.com";
  };

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20" id="contacts">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-col mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full">
          <img src={Logo} alt="logo" className="w-24 sm:w-32 md:w-40 lg:w-48" />

          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full flex justify-center">
            <div className="text-center">
              <h4 className="text-greenLogo font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">Email:</h4>
              <a
                href="mailto:techlinkupsolutions@gmail.com"
                onClick={handleEmailClick}
                className="text-zinc-600 text-base sm:text-lg md:text-xl cursor-pointer hover:text-greenLogo transition-colors duration-300"
              >
                techlinkupsolutions@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contacts };
