import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {

    return (
        <div className='grid grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-12'>
            <div className='flex flex-col gap-10'>
                <section>
                    <h1 className='text-5xl font-bold text-primary-700'>Expert guidance on Environmental grants</h1>
                </section>
                <section>
                    <h2 className='text-4xl mb-2'>Chat with Experienced Guides</h2>
                    <p className='text-2xl'>Find and connect with Grant Guides- experienced fellow grant seekers open to sharing advice and insights.</p>
                </section>
                <section>
                    <h2 className='text-4xl mb-2'>Search Grant Details</h2>
                    <p className='text-2xl'>Find information and resources for currently open grants and past awards.</p>
                </section>
                <section className='flex items-center gap-8'>
                    <a href='/aboutus'>
                        <button
                            type="button"
                            className="text-primary-500 tracking-widest font-medium hover:text-white bg-white border border-green-900 hover:bg-primary-500 rounded text-sm px-12 py-3">
                            LEARN MORE
                        </button>
                    </a>
                    <a href='/grants'>
                        <button
                            type="button"
                            className="text-white font-medium tracking-widest bg-primary-500 rounded text-sm px-12 py-3">
                            GET STARTED
                        </button>
                    </a>
                </section>
            </div>
            <div className="">
                <img className='h-full header-filter' src={`./header_image.png`} alt="" />
            </div>
        </div>
    )
}