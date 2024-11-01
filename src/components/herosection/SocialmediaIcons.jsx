import { socialmedia } from '@/data.json'

function SocialmediaIcons() {
    return (
        <div className="md:absolute left-14 lg:left-20 bottom-10 md:bottom-0 md:translate-y-16 lg:translate-y-24 md:space-y-6 flex md:flex-col justify-center items-center max-md:gap-10 max-md:mt-6 ">

            <div className='hidden lg:block border h-12 border-orng'></div>

            {
                socialmedia?.map((element, index) => (
                    <a
                        href={element?.url}
                        key={index}
                        className="sicon lg:size-6 md:size-5 size-6 hover:scale-125 transition-transform duration-300 ease-out cursor-pointer align-bottom">
                        <img src={element?.icon} alt="" />
                    </a>
                ))
            }

            <div className='hidden md:block border h-12 border-orng'></div>
        </div>
    )
}

export default SocialmediaIcons