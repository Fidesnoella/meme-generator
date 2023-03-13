export default function Navbar() {
    return (
        <div className='bg-gradient-to-r from-[#672280] to-[#A626D3] flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between items-center py-6 px-10'>
            <div><img src="/assets/logo.svg" alt="logo" className='w-52 sm:w-56' /></div>
            <div><h2 className='text-white text-lg sm:text-xl font-normal'>React Course - Project 3</h2></div>
        </div>
    )
}

