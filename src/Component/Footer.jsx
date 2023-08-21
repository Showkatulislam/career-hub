import { Link } from 'react-router-dom';
import si from '../assets/Icons/Group 9969.png'
const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300 p-10 content-center">
            <div className='grid md:grid-cols-6 gap-3'>
                <div className='md:col-span-2 space-y-6'>
                    <h1 className='text-2xl font-semibold'>Career Hub</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={si} alt="" srcSet="" />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-xl'>Company</h1>
                    <Link>About us</Link>
                    <Link>work</Link>
                    <Link>Latest News</Link>
                    <Link>Career</Link>
                </div>
                <div className='space-y-5'>
                <h1 className='text-xl'>Product</h1>
                    <Link>About us</Link>
                    <Link>work</Link>
                    <Link>Latest News</Link>
                    <Link>Career</Link>
                </div>
                <div className='space-y-5'>
                <h1 className='text-xl'>Support</h1>
                    <Link>About us</Link>
                    <Link>work</Link>
                    <Link>Latest News</Link>
                    <Link>Career</Link>
                </div>
                <div className='space-y-5'>
                <h1 className='text-xl'>Contact</h1>
                    <Link>About us</Link>
                    <Link>work</Link>
                    <Link>Latest News</Link>
                    <Link>Career</Link>
                </div>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </footer>

    );
};

export default Footer;