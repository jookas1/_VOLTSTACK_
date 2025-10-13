import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function page() {
  return (
    
    <>
        <section className='min-h-screen  bg-gradient-to-br from-[#ffffff] via-[#C9D6F5] to-[#ffffff] pb-15 pt-5 '>
            <div className=''>
                <Navbar />
            </div>
            <header className='my-4'>
        
          
          <div className=' flex justify-center items-center w-fit mx-auto' >
            <h2 className='text-3xl font-bold text-center mt-4 relative  mb-5 mx-3'>مرحباً بك في</h2>
            <svg width="205" height="35" viewBox="0 0 268 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2871 6.37012H9.06934L17.9629 27.8584L14.9229 34.9902L0 0H10.3662L12.2871 6.37012ZM17.9932 27.7861L13.7285 10.0967L18.9668 11.3193L19.3643 0H29.8389L17.9932 27.7861Z" fill="black"/>
<path d="M33.8765 17.5137C33.8765 15.2088 34.314 13.0255 35.1956 10.9702C36.0772 8.915 37.3063 7.09025 38.8764 5.5088C40.4529 3.92735 42.274 2.67883 44.3461 1.77606C46.4117 0.866886 48.6253 0.418701 50.974 0.418701C53.3228 0.418701 55.5364 0.873288 57.6213 1.77606C59.7062 2.68523 61.5466 3.92735 63.136 5.5088C64.7254 7.09025 65.9674 8.915 66.8683 10.9702C67.7627 13.0319 68.2132 15.2088 68.2132 17.5137C68.2132 19.8187 67.7627 22.0916 66.8683 24.1533C65.9738 26.2149 64.7319 28.0269 63.136 29.5955C61.5466 31.1642 59.7062 32.3871 57.6213 33.2578C55.5364 34.135 53.3163 34.5704 50.974 34.5704C48.6317 34.5704 46.4181 34.135 44.3461 33.2578C42.274 32.3807 40.4529 31.177 38.8764 29.6403C37.2998 28.1037 36.0708 26.2982 35.1956 24.2237C34.3205 22.1493 33.8765 19.9147 33.8765 17.5137ZM38.8764 17.5586C38.8764 19.8315 39.4169 21.906 40.498 23.7819C41.5791 25.6579 43.0462 27.1497 44.8995 28.251C46.7527 29.3586 48.8248 29.9092 51.1092 29.9092C53.3936 29.9092 55.4013 29.3586 57.2223 28.251C59.0434 27.1433 60.4977 25.6515 61.5788 23.7819C62.6598 21.906 63.2004 19.8187 63.2004 17.5137C63.2004 15.2088 62.6534 13.1087 61.553 11.2199C60.4591 9.33117 58.9919 7.83295 57.1515 6.7253C55.3112 5.61764 53.2649 5.06702 51.0126 5.06702C48.7604 5.06702 46.6626 5.63045 44.8287 6.75091C42.9883 7.87137 41.5404 9.37599 40.4723 11.2712C39.4041 13.1599 38.8764 15.26 38.8764 17.565V17.5586Z" fill="black"/>
<path d="M72.2573 0.783508H77.0771V29.5506H93.943V34.2053H72.2573V0.783508Z" fill="black"/>
<path d="M97.98 0.783508H120.361V5.43823H111.468V34.2053H106.603V5.43823H97.9864V0.783508H97.98Z" fill="black"/>
<path d="M144.512 7.00396C143.341 6.3893 142.073 5.86429 140.715 5.43531C139.357 5.00633 138.045 4.78864 136.777 4.78864C135.014 4.78864 133.624 5.1792 132.607 5.96673C131.591 6.75425 131.076 7.8363 131.076 9.21927C131.076 10.1733 131.417 10.9992 132.092 11.7099C132.775 12.4142 133.65 13.0288 134.737 13.5539C135.818 14.0789 136.964 14.5655 138.167 15.0265C139.557 15.5195 140.902 16.1405 142.195 16.896C143.495 17.6515 144.557 18.6568 145.393 19.9181C146.23 21.1794 146.648 22.8697 146.648 24.989C146.648 26.7433 146.198 28.3375 145.303 29.7845C144.409 31.2315 143.135 32.3712 141.481 33.2164C139.827 34.0615 137.845 34.4841 135.529 34.4841C133.367 34.4841 131.32 34.1383 129.39 33.4468C127.459 32.7554 125.799 31.9358 124.409 30.9818L126.584 27.1531C127.665 27.9854 128.991 28.7025 130.567 29.3171C132.144 29.9318 133.643 30.2391 135.059 30.2391C136.108 30.2391 137.125 30.0599 138.116 29.7077C139.107 29.3556 139.93 28.7921 140.593 28.0238C141.256 27.2555 141.59 26.2439 141.59 24.9826C141.59 23.9389 141.294 23.049 140.709 22.3063C140.123 21.57 139.357 20.9361 138.418 20.4175C137.478 19.8925 136.462 19.4315 135.387 19.0345C134.338 18.6375 133.264 18.1958 132.17 17.722C131.069 17.2482 130.065 16.6527 129.158 15.9484C128.244 15.2441 127.504 14.3734 126.932 13.3426C126.359 12.3117 126.076 11.0632 126.076 9.58422C126.076 7.77227 126.501 6.20363 127.35 4.88468C128.199 3.56574 129.383 2.51571 130.896 1.74739C132.408 0.979075 134.139 0.562903 136.082 0.50528C138.309 0.50528 140.252 0.77419 141.919 1.31201C143.585 1.84983 145.052 2.5029 146.32 3.27122L144.512 7.00396Z" fill="black"/>
<path d="M150.689 0.783508H173.07V5.43823H164.177V34.2053H159.312V5.43823H150.696V0.783508H150.689Z" fill="black"/>
<path d="M177.109 34.8969L191.89 0.0921173H192.167L206.948 34.8969H201.343L191.472 10.4068H192.116L181.936 34.8969H177.116H177.109Z" fill="#537FE7"/>
<path d="M237.809 31.6646C237.282 32.0039 236.535 32.4073 235.564 32.8875C234.592 33.3677 233.447 33.771 232.134 34.1104C230.821 34.4497 229.393 34.6034 227.848 34.5714C225.223 34.5394 222.874 34.0784 220.808 33.1884C218.736 32.2984 216.973 31.0755 215.506 29.5261C214.039 27.9767 212.919 26.1903 212.147 24.1799C211.375 22.1695 210.989 20.0246 210.989 17.7516C210.989 15.229 211.401 12.9176 212.218 10.8112C213.035 8.70471 214.187 6.87996 215.667 5.32412C217.147 3.77468 218.904 2.56459 220.924 1.70663C222.945 0.848679 225.165 0.4133 227.572 0.4133C229.611 0.4133 231.465 0.688613 233.131 1.24564C234.798 1.79627 236.207 2.43013 237.346 3.13442L235.403 7.65468C234.508 7.04003 233.402 6.45739 232.089 5.90036C230.776 5.34333 229.315 5.06802 227.713 5.06802C225.615 5.06802 223.672 5.61864 221.896 6.7263C220.12 7.83396 218.698 9.32577 217.636 11.1953C216.574 13.0649 216.04 15.1778 216.04 17.5083C216.04 19.8389 216.529 21.9966 217.501 23.8726C218.473 25.7485 219.856 27.2211 221.645 28.2968C223.434 29.3724 225.538 29.9102 227.945 29.9102C229.676 29.9102 231.194 29.6477 232.507 29.1291C233.82 28.6041 234.894 28.0087 235.725 27.33L237.809 31.6646Z" fill="black"/>
<path d="M246.683 14.197L246.631 15.6248L247.326 14.8373L260.531 0.783508H266.83L252.931 15.2599L267.48 34.2053H261.316L249.36 18.3011L246.721 20.8366L246.766 34.2053H241.856L242.178 10.9957L246.683 9.07492V14.197Z" fill="black"/>
<path d="M246.74 9.07962L242.2 12.1593V6" fill="#537FE7"/>
<path d="M192.133 29.2971L189 24L195.479 24.117" fill="black"/>
</svg>

          </div>
            
            <svg width="470" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-[470px] w-[190px] mx-auto mt-3'>
<path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#537FE7" stroke-width="8" stroke-linecap="round"/>
</svg>

          

      </header>
      <p className='md:w-[27%] text-center mx-auto my-6 text-gray-500'>
        سواء كان لديك سؤال، أو تحتاج إلى دعم، أو ترغب في اكتشاف كيف يمكن
 لـ Voltstack أن يساعدك بحلول الذكاء الاصطناعي  فريقنا هنا لخدمتك.
      </p>
      <div className='w-[80%]   flex mx-auto flex-wrap justify-around items-center '>
        <div className=' w-full md:w-[50%] my-2  md:hidden block'>
            <h2 className='text-2xl font-semibold '>ارسل لنا رسالتك</h2>
            <form action="" className='my-3'>
                <div className='my-3'>
                    <label htmlFor="name">الاسم</label>
                    <input type="text" id='name' placeholder='الاسم بالكامل' className='w-full border-1 bg-white border-gray-400 py-2 md:mx-2 rounded-xl mt-1 placeholder:pr-2 ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="email">البريد الالكتروني </label>
                    <input type="email" id='email' placeholder=' your@email.com' className='w-full bg-white border-gray-400 border-1 py-2 md:mx-2 rounded-xl mt-1 placeholder:pr-2 ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="phone"> رقم الهاتف </label>
                    <input type="tel" id='phone' placeholder='رقم الهاتف' className='bg-white border-gray-400  w-full border-1 py-2 md:mx-2 rounded-xl mt-1 placeholder:pr-2  placeholder: placeholder:text-end ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="messege">نص الرساله</label>
                    <textarea name="" placeholder='اكتب حول ما تريد معرفته.....' className= 'placeholder:pr-2 placeholder: pt-1 rounded-xl bg-white border-gray-400 block w-full h-30' id="messege"></textarea>
                </div>
                <button className='my-3 text-center w-full bg-blue-500 text-white  py-2 rounded-xl'>ارسال</button>
            </form>

        </div>
        <div className='p-3 pl-7 bg-white md:w-[35%] w-full rounded-2xl  ' dir='ltr'>
            <h4 className='font-semiboldbold'>Contact Information</h4>
            <div className="flex items-center mt-7 my-5">
                <img src="./email.svg" className='-translate-x-2 -translate-y-2' alt="" />
                <div className='flex flex-col'>
                    <h5>Email</h5>
                    <p className='text-gray-500'>contact@voltstack.ai</p>
                </div>
            </div>
            <div className="flex items-center">
                <img src="./phone.svg" className='-translate-x-2 -translate-y-2' alt="" />
                <div className='flex flex-col'>
                    <h5>Phone</h5>
                    <p className='text-gray-500'>+1 (555) 123-4567</p>
                </div>
            </div>
             <div className="flex mt-4 items-start">
                <img src="./location.svg" className='-translate-x-2  ' alt="" />
                <div className='flex flex-col'>
                    <h5>location</h5>
                    <p className='text-gray-500'>123 AI Avenue</p>
                    <p className='text-gray-500'>Tech District</p>
                    <p className='text-gray-500'>San Francisco, CA 94105</p>
                </div>
                
            </div>
            <div className=' my-4 w-fit flex flex-col'>
                <span>Follow us on social media</span>
                <div className=' flex justify-between mt-5
                '>
                    <img src="./in.svg" alt="" />
                    <img src="./tw.svg" alt="" />
                    <img src="./git.svg" alt="" />
                    <img src="./m.svg" alt="" />

                </div>
                
            </div>
        </div>
        <div className=' w-full md:w-[50%] my-2  hidden md:block'>
            <h2 className='text-2xl font-semibold '>ارسل لنا رسالتك</h2>
            <form action="" className='my-3'>
                <div className='my-3'>
                    <label htmlFor="name">الاسم</label>
                    <input type="text" id='name' placeholder='الاسم بالكامل' className='w-full border-1 bg-white border-gray-400 py-2 mx-2 rounded-xl mt-1 placeholder:pr-2 ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="email">البريد الالكتروني </label>
                    <input type="email" id='email' placeholder=' your@email.com' className='w-full bg-white border-gray-400 border-1 py-2 mx-2 rounded-xl mt-1 placeholder:pr-2 ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="phone"> رقم الهاتف </label>
                    <input type="tel" id='phone' placeholder='رقم الهاتف' className='bg-white border-gray-400  w-full border-1 py-2 mx-2 rounded-xl mt-1 placeholder:pr-2  placeholder: placeholder:text-end ' /> 
                </div>
                <div className='my-3'>
                    <label htmlFor="messege">نص الرساله</label>
                    <textarea name="" placeholder='اكتب حول ما تريد معرفته.....' className= 'placeholder:pr-2 placeholder: pt-1 rounded-xl bg-white border-gray-400 block w-full h-30' id="messege"></textarea>
                </div>
                <button className='my-3 text-center w-full bg-blue-500 text-white  py-2 rounded-xl'>ارسال</button>
            </form>

        </div>
      </div>
        </section>
    </>
  )
}
