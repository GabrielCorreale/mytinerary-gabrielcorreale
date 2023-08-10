import logo from "../../public/logo-mytinerary.png"

export default function Hero() {
  return (
    <div className="container flex max-w-50 my-5 p-5 lg:ml-24 lg:mt-24 items-center justify-center">
      <div className="text-center bg-white pb-4 rounded-lg p-3 mx-auto">
        <img className='logo h-fit w-4/6 p-0 cursor-pointer mx-auto' src={logo} alt='Logo MyTinerary'/>
        <h2 className="my-3 text-2xl font-bold leading-tight">
          Find your perfect trip, designed by insiders who know and love their cities
        </h2>
        <div className="flex justify-center mt-6">
          <button className="btn-hero bg-red-500 text-gray-800 font-bold rounded-full py-3 px-8 transition-all duration-300 ease relative overflow-hidden">
            <a href="/cities" className="relative z-10 transition-all duration-300 ease">View More</a>
          </button>
        </div>
      </div>
    </div>
  )
}