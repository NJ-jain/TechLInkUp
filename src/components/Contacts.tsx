import Logo from "../assets/logo-v.svg";

const Contacts = () => {
  return (
    <div className="w-full py-10 sm:py-20" id="contacts">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-col mt-5 sm:mt-10 w-full">
          <img src={Logo} alt="logo" className="w-32 sm:w-40 md:w-48" />

          <div className="mt-6 sm:mt-8 w-full flex justify-center">
            <div className="text-center">
              <h4 className="text-greenLogo font-semibold text-xl mb-4">Email:</h4>
              <a href="mailto:techlinkupsolutions@gmail.com" className="text-zinc-600 text-lg underline">
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
