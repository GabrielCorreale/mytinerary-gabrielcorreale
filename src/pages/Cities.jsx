import img from "../../public/under-construction.png"

export default function Cities() {
  return (
    <div className="grid px-4 bg-white place-content-center">
      <div className="text-center m-8">
        <img className='max-h-96' src={img} alt='Under Construction'/>
        <a href="/" className="inline-block px-5 py-3 mt-6 text-sm text-black font-bold bg-red-500 rounded hover:bg-red-400 focus:outline-none focus:ring">
          Go Back Home
        </a>
      </div>
    </div>
  )
}