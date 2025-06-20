export default function Footer() {
    return (
        <div className="grid grid-cols-4 border-t border-white mt-10 font-[Pacifico] py-9 bg-gray-900 text-white">
            <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center mb-2">
                    <img src="/img/brand.svg" alt="logo" className="w-10 h-10 rounded-3xl mr-2" />
                    <span >Ivy</span>
                </div>
                <div>
                    <span className="ml-2 text-lg">"Your Knowledge Hub, <b>Reinvented</b>"</span>
                </div>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-center gap-2 text-center">
                <span>Corporate Information</span>
                <div className="bg-white w-20 h-[2px]"></div>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
                <span>Disclaimer</span>
                <span>About Us</span>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-center gap-2 text-center">
                <span>Contact</span>
                <div className="bg-white w-20 h-[2px]"></div>
                <div>
                    <div className='flex'>
                        <img src="/img/mailme.svg" alt="mailBox"></img>&nbsp;&nbsp;
                        <span><b>Email:&nbsp;</b> pankeet16.edu@gmail.com</span>
                    </div>
                    <div className='flex'>
                        <img src="/img/callme.svg" alt="phone image"></img>&nbsp;&nbsp;
                        <span><b>Phone:&nbsp;</b><strong>+91</strong>9875142251</span>
                    </div>
                </div>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-center gap-2 text-center">
                <div><span>Follow Us On:</span></div>
                <div className='flex flex-row gap-2'>
                    <div><img className="w-9 h-9 rounded-lg" src="/img/insta.svg" alt="insta Logo"></img></div>
                    <div><img className="w-9 h-9 rounded-lg" src="/img/fb.svg" alt="meta Logo"></img></div>
                    <div><img className="w-10 h-10 rounded-xl -mt-[2px]" src="/img/linkedin.svg" alt="meta Logo"></img></div>
                </div>
                
            </div>
        </div>
    );
}
