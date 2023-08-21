import bg1 from '../assets/All Images/Vector.png'
import bg2 from '../assets/All Images/Vector-1.png'
const Banner = ({text}) => {
    return (
        <div className="relative ">
            <h1 className='absolute top-1/3 left-1/3 text-center text-2xl font-semibold'>{text}</h1>
            <img className='w-52' src={bg1} alt="" srcSet="" />
            <img className='w-52 absolute -top-16 right-0' src={bg2} alt="" srcSet="" />
        </div>
    );
};

export default Banner;