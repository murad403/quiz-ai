"use client"
import Heading from '../shared/Heading'
import { pricing, TPricing } from '@/lib/pricing'
import { Check } from 'lucide-react'
import { useState } from 'react'

const tags: string[] = ["monthly", "yearly"]

const Pricing = () => {
  const [activeTag, setActiveTag] = useState<string>("monthly");
  // console.log(activeTag);
  return (
    <div id='pricing' className='md:px-20 px-0'>
      <Heading title='Simple, Transparent Pricing' description='Choose the plan that works best for you'></Heading>
      <div className='space-y-14'>
        <div className='flex justify-center items-center gap-5'>
          {
            tags.map((tag: string, index: number) =>
              <button onClick={() => setActiveTag(tag)} className={` capitalize font-semibold px-5 py-2 rounded-lg ${tag === activeTag ? "bg-green-500 text-gray-900" : "text-main"}`} key={index}>{tag == "yearly" ? <p className='flex items-center gap-2'>{tag} <span className='text-[12px] bg-white/10 rounded-xl px-4 py-1'>save 17%</span></p> : tag}</button>
            )
          }
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-7'>
          {
            pricing.map((item: TPricing) =>
              <div className={`bg-card rounded-xl p-4  ${item.id === 2 ? "border border-header relative" : "border border-gray-700/50"} space-y-5`} key={item.id}>
                <h1 className='text-subheading font-bold text-main'>{item.title}</h1>
                <p className='text-small text-title'>{item.description}</p>
                <h2>
                  <span className='text-[40px] font-semibold text-main'>
                    ${activeTag == "yearly" ? (item.price * 12 *17) / 100 : item.price}
                  </span>
                  <span className='text-small text-title'>/month</span>
                </h2>
                <button className={`border border-gray-700/50 w-full py-3 capitalize text-center text-main font-semibold rounded-lg ${item.id === 2 ? "bg-header hover:bg-header/90" : "hover:bg-header"}`}>
                  {item.button}
                </button>
                <div className='space-y-3'>
                  {
                    item.features.map((feature: string, index: number) =>
                      <p className='flex gap-2 items-center text-small' key={index}>
                        <Check className='text-header'/>
                        <span className='text-title'>{feature}</span>
                      </p>
                    )
                  }
                </div>

                {/* badge */}
                <div className={`${item.id === 2 ? "bg-header px-4 py-1 text-main font-medium text-small inline-block absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-xl" : "hidden"} `}>
                  Most popular
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing
