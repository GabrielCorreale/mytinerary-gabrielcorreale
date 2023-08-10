export default function Footer() {
  return (
    <div className='h-auto w-full bottom-0 left-0 bg-white shadow-lg' style={{ boxShadow: '0px -5px 5px rgba(0, 0, 0, 0.2)' }}>
      <div className='flex items-center justify-center px-5 py-2 md:px-10 space-x-5'>
        <h2 className="textoCarousel text-3xl">Follow us</h2>
        <ion-icon name="logo-instagram" size="large" class="hover:text-red-400"></ion-icon>
        <ion-icon name="logo-facebook" size="large" class="hover:text-red-400"></ion-icon>
        <ion-icon name="logo-tiktok" size="large" class="hover:text-red-400"></ion-icon>
        <ion-icon name="logo-twitter" size="large" class="hover:text-red-400"></ion-icon>
      </div>
    </div>
  )
}

