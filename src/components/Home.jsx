import Logo from '../assets/coding club dp copy 2.svg'
import '../styles/home.css'
import AboutUsPic from '../assets/Code typing-bro (1) 1.svg'
import VisionPic from '../assets/To the stars-rafiki 1.svg'

const Home = () => {
    return(
        <div className="flex-auto">
            <div className="flex flex-col justify-center items-center relative h-screen pb-44 sm:pb-32">
                <div className='absolute top-1/4 text-4xl sm:text-6xl'>Welcome to</div>
                <img src={Logo} alt='logo' className='h-80 sm:h-[70vh]'></img>
            </div>
            <div className='relative hidden sm:block'>
                <img src={AboutUsPic} className='absolute right-0 z-10'></img>
                <div className='about-us h-[120vh] bg-gradient-to-r from-white to-slate-300 text-black relative'>
                    <div className='absolute top-32 left-9 w-[45%] xl:w-[35%]'>
                        <div className='text-4xl sm:text-5xl font-black'><span className='text-[#112EAF]'>{'<'}</span>About Us<span className='text-[#112EAF]'>{'>'}</span></div>
                        <p className='font-montserrat text-2xl mt-7'><span className='text-[#112EAF] font-bold'>Coding club TKMCE</span> is an initiative to inculcate the culture of programming and development in our institute. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it. Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                    </div>
                </div>
                <div className='h-screen'></div>
                <img src={VisionPic} className='absolute bottom-[7%] left-0'></img>
                <div className='absolute w-[35%] left-[35%] bottom-[35%]'>
                    <div className='text-5xl font-black'>Vision<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat text-2xl mt-7'>To inculcate the culture of programming and development among students and to enhance their coding ability.</p>
                </div>
                <div className='absolute w-[35%] text-right right-[4%] bottom-[16%]'>
                    <div className='text-5xl font-black'><span className='text-[#E5245A]'>{'<'}</span>Mission</div>
                    <p className='font-montserrat text-2xl mt-7'>To create a platform to impart and instil this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
            </div>
            <div className='sm:hidden'>
                <div className='bg-white text-black min-h-screen flex flex-col justify-center items-center px-7'>
                    <div className='text-4xl font-black mb-7'><span className='text-[#112EAF]'>{'<'}</span>About Us<span className='text-[#112EAF]'>{'>'}</span></div>
                    <p className='font-montserrat'><span className='text-[#112EAF] font-bold'>Coding club TKMCE</span> is an initiative to inculcate the culture of programming and development in our institute. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it. Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
                <div className='min-h-screen flex flex-col justify-center items-center text-center px-7'>
                    <div className='text-4xl font-black mb-7'><span className='text-[#E5245A]'>{'<'}</span>Vision<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat'>To inculcate the culture of programming and development among students and to enhance their coding ability.</p>
                    <div className='text-4xl font-black mb-7 mt-24'><span className='text-[#E5245A]'>{'<'}</span>Mission<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat'>To create a platform to impart and instil this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;