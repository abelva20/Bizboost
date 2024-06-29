import './nav';


function App() {
  return (
    <div>
    <header id='Header' className='w-full bg-transparent absolute top-0 left-0 flex items-center z-10 pb-3'>
     <div className='container'>
        <div className='flex items-center justify-between relative'>
            <div className='px-2 pt-2'>
                <a href='#home'>
                    <img src='/asset/Logo/WhatsApp_Image_2024-06-21_at_12.55.54_PM-removebg-preview.png' 
                    className='w-24 lg:w-32'
                    alt='' />
                </a>
            </div>
            <div className='flex item-center px-4'>
                  <nav id='nav-menu' className='hidden absolute py-5 ml-10 bg-white 
                  shadow-lg rounded-lg max-w-[240px] w-full right-4 left-8 pl-10 top-full 
                  lg:block lg:static lg:bg-transparent lg:max-w-[800px] lg:shadow-none lg:rounded-none'>
                    <ul className='block lg:flex'>
                        <li className='group'>
                            <a href='#Home' 
                            className='text-[20px] text-Second py-0 px-2 mx-2 flex justify-center item-center text-center
                            group-hover:text-slate-400 group-hover:border border-purple-500 rounded-md gap-5'> 
                                Beranda
                            </a>
                        </li>
                        <li className='group'>
                            <a href='#Product' 
                            className='text-[20px] text-Second py-0 px-2 mx-2 flex justify-center item-center text-center
                            group-hover:text-slate-400 group-hover:border border-purple-500 rounded-md gap-5'> 
                                Produk
                            </a>
                        </li>
                        <li className='group'>
                            <a href='#Tentang-kami' 
                            className='text-[20px] text-Second py-0 px-2 mx-2 flex justify-center item-center text-center
                            group-hover:text-slate-400 group-hover:border border-purple-500 rounded-md gap-5'> 
                                Tentang kami
                            </a>
                        </li>
                        <li className='group'>
                            <a href='Kontak' 
                            className='text-[20px] text-Second py-0 px-2 mx-2 flex justify-center item-center text-center
                            group-hover:text-slate-400 group-hover:border border-purple-500 rounded-md gap-5'> 
                                kontak    
                            </a>
                        </li>
                    </ul>
                 </nav>
            </div>
        </div>
     </div>
    </header>
    <main className='max-w-[1920px] mx-auto bg-blue overflow-hidden'>
        <section id='Home' className='h-[480px] xl:h-[860px]  rounded-2xl mt-28 bg-center lg:bg-cover mx-6 bg-no-repeat bg-fixed 
        relative'>
            <div className='container mx-auto pt-16'>
                <div className='w-full self-center px-4 text-center'>
                    <h1 className='h2 text-center lg:text-[64px] text-Second font-semibold pt-28'>
                        Bizboost.
                    </h1>
                    <h2 className='h3 text-center text-slate-500 lg:text-[40px]'>
                        Boost you're business
                    </h2>
                </div>
            </div>
        </section>      
         <section id='Product' className='py-16'>
            <div className='flex flex-wrap lg:flex-nowrap bg-white'>
                <div className='w-full self-ceter px-8 mb-20'>
                    <h1 className='h2 font-semibold font-Second'>
                        Product
                    </h1>
                    <p className='h3 font-Second font-light pt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam.
                    </p>
                </div>
                <div className='w-screen items-center mb-3'>
                    <div className='Bento max-h-screen mr-12'>
                        <div className='ml-12 grid max-w-4xl grid-flow-row-dense grid-cols-12 gap-4'>
                            <div className='Prod col-span-7 row-span-8 lg:col-span-7 lg:row-span-10 bg-slate-400 p-4 rounded-lg border border-Primary bg-opacity-50'/>
                            <div className='Prod col-span-5 row-span-8 lg:col-span-5 lg:row-span-10 bg-slate-400 p-4 rounded-lg border border-Primary bg-opacity-50'/>
                            <div className='Prod col-span-6 row-span-8 lg:col-span-6 lg:row-span-10 bg-slate-400 p-4 rounded-lg border border-Primary bg-opacity-50'/>
                            <div className='Prod col-span-6 row-span-8 lg:col-span-6 lg:row-span-10 bg-slate-400 p-4 rounded-lg border border-Primary bg-opacity-50'/>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         <section id='Antares' name='OCA' className='py-20'>
            <div className='flex flex-wrap py-10 lg:py-5 mx-6'>
                <div className='w-full self-start px-4 mb-2'>
                    <h1 className='h3 font-primary font-semibold mb-3 lg:text-[50px]'>
                        ANTARES
                    </h1>
                </div>
                <div className='flex justify-center flex-nowrap w-screen'>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         <section id='Antares' name='OCA' className='py-20'>
            <div className='flex flex-wrap py-10 lg:py-5 mx-6'>
                <div className='w-full self-start px-4 mb-2'>
                    <h1 className='h3 font-primary font-semibold mb-3 lg:text-[50px]'>
                        OCA
                    </h1>
                </div>
                <div className='flex justify-center flex-nowrap w-screen'>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         <section id='Antares' name='OCA' className='py-20'>
            <div className='flex flex-wrap py-10 lg:py-5 mx-6'>
                <div className='w-full self-start px-4 mb-2'>
                    <h1 className='h3 font-primary font-semibold mb-3 lg:text-[50px]'>
                        PIJAR
                    </h1>
                </div>
                <div className='flex justify-center flex-nowrap w-screen'>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         <section id='Antares' name='OCA' className='py-20'>
            <div className='flex flex-wrap py-10 lg:py-5 mx-6'>
                <div className='w-full self-start px-4 mb-2'>
                    <h1 className='h3 font-primary font-semibold mb-3 lg:text-[50px]'>
                        NETMONK
                    </h1>
                </div>
                <div className='flex justify-center flex-nowrap w-screen'>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                    <div className='mx-1'>
                        <img src='./asset/product/OCAS2.jpeg' className='max-w-[360px] lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         {/* tentang kami */}
         <section id='Tentang-kami' name='Tentang-kami' className='pt-36 mb-10'>
            <div className='flex flex-wrap py-10 lg:py-5'>
                <div className='w-full self-center px-4 mb-5 lg:w-1/2'>
                    <h1 className='h3 font-primary font-semibold mb-3 lg:text-[50px]'>
                        Tentang kami
                    </h1>
                    <p className='text-[28px] font-Second'>
                        Biszboost merupakan perusahaan yang 
                        bergerak di bidang pemasaran Teknologi Inromfasi
                    </p>
                    <button className='py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl bg-opacity-40 bg-transparent px-5
                    hover:bg-gradient-to-l hover:shadow-lg transition-all hover:duration-500 ease-in-out'>
                        <h2 href='#'
                        className='h3 text-Accent-Primary font-medium self-center'>
                            Hubungi Kami
                        </h2>
                    </button>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                    <div className='mx-5'>
                        <img src='./asset/Bento/OCA.png' className='hidden lg:max-w-full mx-auto lg:flex justify-center rounded-lg lg:bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         {/* map */}
         <section id='Kontak' name='Kontak' className='h-full w-screen pt-56'>
            <div className='flex flex-wrap py-10 lg:py-5 overflow-hidden'>
                <div className='w-full lg:w-1/2 self-center flex-wrap px-4'>
                    <div className='pt-5'>
                        <img src='./asset/Bento/OCA.png' className='max-w-full mx-auto flex justify-center rounded-lg bg-cover' alt='' />
                    </div>
                </div>
            </div>
         </section>
         <section className='w-full'>

         </section>
    </main>
    <footer className='w-full h-[240px] bg-orange-400 flex'>
        {/* logo */}
        <div className='py-8 px-4 text-white w-1/4'>
                <a href='#home'>
                    <img src='/asset/Logo/WhatsApp_Image_2024-06-21_at_12.55.54_PM-removebg-preview.png' 
                    className='w-32 lg:w-36'
                    alt='' />
                </a>
            </div>
        <div className='py-8 text-gray-500 w-1/4'>
            <ul className='text-[15px]'>
                <li className='font-light'>
                    <h2>
                     Instagram
                    </h2>
                </li>
                <li className='font-light'>
                    <h2>
                    Facebook
                    </h2>
                </li>
                <li className='font-light'>
                    <h2>
                    Tiktok
                    </h2>
                </li>
            </ul>
        </div>
        <div className='py-8 text-slate-500 w-1/4'>
            <ul className='text-[15px]'>
                <li className='font-light font-Primary'>
                    <h2>
                    Telkom Indondesia
                    </h2>
                </li>
                <li className='font-light font-Primary'>
                    <h2>
                    indibiz
                    </h2>
                </li>
                <li className='font-light font-Primary'>
                    <h2>
                    BUMN
                    </h2>
                </li>
            </ul>
        </div>
        <div className='py-8 text-gray-500 w-1/2'>
            <div className='w-full lg:w-1/2 px-4 mb-5'>
                    <h2 className='text-[15px] font-primary mb-3 lg:text-[18px] self-center'>
                        Berlangganan sekarang
                    </h2>
                    <p className='text-[20px] font-Second'>
                        Email
                    </p>
            </div>

        </div>
    </footer>
</div>
  );
};

export default App;
