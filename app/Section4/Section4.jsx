import React from 'react'

export default function Section4() {
  return (
     <section className='py-5'>
     <div className='w-[90%] md:w-[70%] bg-[#EFF4FF] mx-auto lg:flex justify-around  gap-5  items-center mt-15 rounded-xl pt-2  pb-80 lg:pb-50 overflow-hidden  -translate-y-5'>
        <div className='w-[45%] mt-6 md:mx-0 mx-2  lg:hidden'>
          <h3 className='text-3xl font-semibold w-[350px] md:w-100 my-4'>نون – التصميمات الهندسية والمعمارية الحديثة في السعودية</h3>
          <p className='w-70 md:w-[470px]'>
            شركة نون متخصصة في التصميمات الهندسية والمعمارية الحديثة. تم تطوير الموقع الإلكتروني لعرض مشاريعهم المبتكرة مع إبراز التزامهم بالمعايير البيئية والاجتماعية والاقتصادية. بواجهة عصرية واحترافية، يعكس الموقع خبرة نون ويؤكد مكانتها كشركة رائدة في مجال العمارة المستدامة بالمملكة.</p> 
       </div>
        <div className='bg-red-400 md:w-[45%] relative  '> 
          <div className='absolute -bottom-200 rounded-2xl translate-y-21 md:-translate-x-40 -translate-x-25 shadow-lg'>
            
            <img src="./7d06df5534ef25464e30c62092699110f14aad16 (1).png"className='h-[880px] w-[230px] md:w-[343px] rounded-2xl shadow-lg'  alt="" />
          </div>
          <div className=' absolute top-8 right-60 overflow-hidden h-[880px] w-[230px] md:w-[345px] rounded-2xl translate-x-55 translate-y-20 md:translate-y-12 shadow-lg'>
            
            <img src="./7d06df5534ef25464e30c62092699110f14aad16 (1).png" className=' rounded-2xl -translate-y-47 shadow-lg' alt="" />
          </div>
       </div>

        <div className='w-[45%] mt-6 hidden lg:flex md:flex-col'>
          <h3 className='text-3xl font-semibold w-100 my-4'>نون – التصميمات الهندسية والمعمارية الحديثة في السعودية</h3>
          <p className='w-[410px]'>
            EventX هي أول منصة سعودية متخصصة في الفعاليات وتصميم الأكشاك. تربط بين العملاء ومقدمي الخدمات الموثوقين لتقديم حلول مخصصة في تجهيز الأكشاك وتنظيم الفعاليات. يرفع المشتري مشروعه، ويقدم مزودو الخدمات عروضًا إبداعية بالتصاميم والأسعار، مما يجعل تنظيم الفعاليات أسهل وأسرع وأكثر وضوحًا.</p> </div>      
          
        
      </div>
 </section>
  )
}
