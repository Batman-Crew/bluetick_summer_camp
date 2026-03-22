'use client'

import Image from 'next/image'
import { ChevronDown, Plus, X, CheckCircle2, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import HeroBackGround from '../public/hero_background.png'
import Rebot from '../public/robot_hero.png'
import HeroLogoOne from '../public/hero_logo1.png'
import HeroLogoTwo from '../public/hero_logo2.png'
import HeroLogoThree from '../public/hero_logo3.png'
import HeroRound from '../public/hero_round.png'
import HeroLogo from '../public/hero_logo.png'
import HeroMiddleBg from '../public/hero_middle_background.png'



import { CalendarDays, Clock } from "lucide-react"

// Hero Section
function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${HeroBackGround.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Grid overlay */}
   

      {/* Top marquee banner */}
      <div className="relative z-20 bg-[#2d1b6b] text-white text-xs py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {Array(4).fill("🚀 Early Bird Registration Now Open! &nbsp;•&nbsp; Limited Seats Available &nbsp;•&nbsp; Secure Your Spot Today &nbsp;•&nbsp; Turn Screen Time Into Skill Time &nbsp;•&nbsp; Build Real AI Projects &nbsp;•&nbsp; The Ultimate AI Summer Camp for Grades 6–9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").map((text, i) => (
            <span key={i} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-5">
        <div className="flex items-center gap-2">
          {/* BlueTick logo */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="url(#logoGrad)"/>
            <path d="M10 18l5 5 11-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6C63FF"/>
                <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="leading-tight">
            <div className="font-bold text-base text-[#1a1a3e]">BlueTick</div>
            <div className="text-[10px] text-[#6b6b9a] tracking-wide">AI Academy</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.me" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-md hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="tel:" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform border border-gray-100">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-4 pb-12">

        {/* Badge */}
        <div className="inline-block bg-[#2d3a8c] text-white text-xs font-semibold px-5 py-2 rounded-md mb-8 tracking-wider shadow">
          FOR AGES 11–14 | GRADES 6–9
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0d0d2b] leading-tight mb-4" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          AI Summer Camp<br />for students
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#4b4b7a] italic font-light mb-10">
          Give Your Child a Head Start in the World of AI
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="bg-[#0d0d2b] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#1a1a4e] transition-colors shadow-lg">
            Explore Learning Plan
          </button>
          <button className="bg-[#3b82f6] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#2563eb] transition-colors shadow-lg flex items-center gap-2">
            Enroll Now <span className="text-lg">→</span>
          </button>
        </div>

        {/* Illustrations row */}
        <div className="relative w-full max-w-5xl mx-auto flex items-end justify-between px-4">

          {/* Robot - left */}
          <div className="w-56 md:w-72 flex-shrink-0 drop-shadow-2xl animate-float-slow">
            <img
              src={Rebot.src}
              alt="AI Robot"
              className="w-full object-contain"
            />
          </div>

          {/* Right floating icons */}
          <div className="flex flex-col gap-6 items-end">
            {/* Brain / jellyfish */}
            <div className="w-50 h-20 animate-float-fast drop-shadow-xl">
              <img
                src={HeroLogoOne.src}
                alt="AI Brain"
                className="w-full h-full object-contain"
             
              />
            </div>

            {/* AI chip */}
            <div className="w-20 h-20 animate-float-medium drop-shadow-xl">
              <img
              src={HeroLogoTwo.src}
                 alt="AI Chip"
                className="w-full h-full object-contain"
             
              />
            </div>

            {/* Medal */}
            <div className="w-20 h-20 animate-float-slow drop-shadow-xl">
              <img
                src={HeroLogoThree.src} 
                alt="Medal"
                className="w-full h-full object-contain"
               
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .animate-float-slow { animation: floatSlow 4s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 3s ease-in-out infinite 0.5s; }
        .animate-float-fast { animation: floatFast 2.5s ease-in-out infinite 1s; }
      `}</style>
    </section>
  )
}


function CombinedSection() {
  const stats = [
    { icon: '🎓', value: '9+', label: 'yrs in training' },
    { icon: '🤖', value: '5', label: 'real AI projects' },
    { icon: '✅', value: 'AI', label: 'certification' },
    { icon: '👥', value: '10k', label: 'learners trained' },
  ]

  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage: `url(${HeroMiddleBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Academy Badge */}
            <img src={HeroLogo.src} alt="Top AI Academy in India" className="w-48 object-contain" />

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#E8F5E9] rounded-2xl p-4 text-center">
                  <p className="text-2xl mb-1">{stat.icon}</p>
                  <p className="font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="w-full rounded-xl bg-blue-100 py-3 px-4 text-center">
              <span className="text-base">
                <span className="font-bold">100%</span> Hands on{' '}
                <span className="font-bold">Interactive Class</span>
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">
            <img src={HeroRound.src} alt="Future innovators" className="w-full max-w-sm object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}



  function EnrollmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    school: "",
  })

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center">

            {/* Image (outside card) */}
            <img
              src="/topPeekI.png.png"
              alt="Kids learning"
              className="w-40 mb-[-7px] z-10"
            />

            {/* Card */}
            <div className="bg-[#EAF3FF] rounded-3xl p-8 pt-16 text-center shadow-md w-full max-w-sm">

              {/* Title */}
              <h2 className="text-3xl font-bold text-[#2563EB] leading-tight mb-4">
                AI SUMMER <br /> CAMP FEES
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 mb-2">
                Early Bird Price
              </p>

              {/* Price */}
              <p className="text-4xl font-bold text-black mb-6">
                ₹3,999
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border">
                <span className="text-sm text-gray-400 line-through">
                  ₹4,999
                </span>
                <span className="text-sm text-red-500 font-medium">
                  From 1st April
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Enroll Now</h3>

            <p className="text-sm text-gray-600 mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gray-600" />
              It takes less than 60 seconds
            </p>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Manoj Kumar"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-lg bg-white">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="8765634566"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter a Email ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Grade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white">
                  <option>Select Grade</option>
                  <option>Grade 6</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                </select>
              </div>

              {/* School */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white">
                  <option>Select School</option>
                </select>
              </div>

              {/* Payment Options */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="text-sm">Pay Now</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" />
                  <span className="text-sm">Enquire Now, Pay Later</span>
                </label>
              </div>

              {/* Promo */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="promo" className="rounded" />
                <label htmlFor="promo" className="text-sm text-gray-600">
                  Have a Promo code?
                </label>
              </div>

              {/* Button */}
              <Button className="w-full bg-[#2563EB] text-white py-3 rounded-full text-lg hover:bg-[#1d4ed8] flex items-center justify-center gap-2">
                Enroll Now <span>→</span>
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}





interface Batch {
  id: string
  date: string
  days?: string
  time?: string[]
  soldOut?: boolean
}

function UpcomingBatchSection() {
  const [batches, setBatches] = useState<Batch[]>([])

  useEffect(() => {
    fetch("/api/batches")
      .then((r) => r.json())
      .then(setBatches)
  }, [])

  return (
    <section className=" py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Upcoming Batch</h2>

        {/* Course Pill */}
        <div className="flex justify-center mb-4">
          <span className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow">
            1 Month Course
          </span>
        </div>

        {/* Info Pills */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <div className="flex items-center gap-2 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg text-sm">
            <CalendarDays className="w-4 h-4" />
            Weekdays or Weekends
          </div>
          <div className="flex items-center gap-2 bg-purple-200 text-purple-900 px-4 py-2 rounded-lg text-sm">
            <Clock className="w-4 h-4" />
            2 Days / Week, 2Hrs / day
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {batches.map((batch, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl text-left ${
                batch.soldOut
                  ? "bg-pink-100"
                  : "bg-white border border-gray-300"
              }`}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-sm">{batch.date}</p>

                {batch.days && (
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    {batch.days}
                  </span>
                )}
              </div>

              {/* Sold Out */}
              {batch.soldOut && (
                <span className="inline-block bg-red-200 text-red-600 text-xs px-3 py-1 rounded-full mt-2">
                  Sold out
                </span>
              )}

              {/* Time */}
              {batch.time && (
                <ul className="text-xs text-gray-600 mt-3 space-y-1">
                  {batch.time.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}



// Upcoming Batch Section
// function UpcomingBatchSection() {
//   const batches = [
//     { date: '28th March, 2026', status: 'Sold out', time: '', color: 'bg-pink-200' },
//     { date: '11th April, 2026', time: ['9:00 am - 11:00 am', '11:00 am - 01:00 pm'], status: null, color: 'bg-white border-2 border-gray-300' },
//     { date: '21st April, 2026', status: 'Sat & Sun', time: ['9:00 am - 11:00 am', '11:00 am - 01:00 pm'], color: 'bg-white border-2 border-gray-300' },
//     { date: '25th April, 2026', time: ['9:00 am - 11:00 am', '11:00 am - 01:00 pm'], status: null, color: 'bg-white border-2 border-gray-300' },
//     { date: '5th May, 2026', time: ['9:00 am - 11:00 am', '11:00 am - 01:00 pm'], status: null, color: 'bg-white border-2 border-gray-300' },
//   ]

//   return (
//     <section className="bg-gray-50 py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4">Upcoming Batch</h2>

//         <div className="flex justify-center gap-4 mb-12">
//           <span className="bg-[#5B21B6] text-white px-6 py-2 rounded-full text-sm font-semibold">3-Month Course</span>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {batches.map((batch, idx) => (
//             <Card key={idx} className={`p-6 rounded-2xl ${batch.color} text-center`}>
//               <div className="flex items-center justify-center gap-2 mb-4">
//                 <span className="text-sm font-semibold text-gray-600">
//                   {batch.status ? batch.status : 'Weekdays or Weekends'}
//                 </span>
//               </div>
//               <p className="text-lg font-bold text-black mb-3">{batch.date}</p>
//               {batch.time && batch.time.length > 0 && (
//                 <div className="text-xs text-gray-600 space-y-1">
//                   {batch.time.map((t, i) => (
//                     <p key={i}>{t}</p>
//                   ))}
//                 </div>
//               )}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// Academy Credentials Section



// AI Shaping Section
function AIShapingSection() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.45fr)_300px]">
          <div className="relative overflow-hidden rounded-[18px] bg-[#e7e0d7] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:min-h-[250px] md:px-6 md:py-6">
            <div className="max-w-[72%] md:max-w-[68%]">
              <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#161616] md:text-[34px]">
                AI is shaping the Future <span className="font-normal">let your child be ready</span>
              </h3>
              <p className="mb-6 text-sm leading-6 text-[#5f5a55] md:text-[15px]">
                Artificial Intelligence is transforming industries around the world. Learning AI early helps children develop:
              </p>
              <ul className="mb-6 space-y-2.5">
                {[
                  'Logical thinking',
                  'Creativity',
                  'Problem solving',
                  'Technology confidence',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-[#2a2a2a]">
                    <CheckCircle2 className="h-4 w-4 text-[#2fb44a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="inline-block rounded-md bg-[#d7cec3] px-3 py-2 text-[11px] leading-4 text-[#6c645d]">
                This program introduces AI in a safe, fun, and beginner-friendly way.
              </p>
            </div>

            <Image
              src="/shoping_sec_robot.png"
              alt="AI robot illustration"
              width={220}
              height={220}
              className="pointer-events-none absolute bottom-0 right-0 h-[150px] w-auto object-contain md:h-[180px]"
            />
          </div>

          <div className="mx-auto w-full max-w-[300px]">
            <div className="overflow-hidden rounded-[18px] bg-[#eef3f4] shadow-[0_14px_26px_rgba(0,0,0,0.08)]">
              <div className="rounded-[18px] rounded-b-[14px] bg-[#cfc4f3] px-6 py-5 text-center shadow-[0_4px_0_rgba(0,0,0,0.10)]">
                <span className="text-base font-semibold text-[#4c34a4]">10% Early bird till 15th March</span>
              </div>
              <div className="px-6 py-5 text-center text-[15px] text-[#222222]">
                <span className="font-medium">Enroll Now</span>
                <span className="ml-2 text-[#a3a3a3] line-through">₹4999</span>
                <span className="ml-2 font-semibold text-[#1473ff]">₹2999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



 function LearningJourneySection() {
  const weeks = [
    {
      week: "Week 1",
      title: "AI Literacy The Magic behind the screen",
      topics: [
        "What is AI really?",
        "How AI reads text, images, and videos",
        "Understanding tools like ChatGPT",
      ],
      color: "bg-purple-100",
    },
    {
      week: "Week 2",
      title: "Exploring AI Tools",
      topics: ["ChatGPT", "AI writing assistants", "Image generation tools"],
      color: "bg-gray-100",
    },
    {
      week: "Week 3",
      title: "Build with AI",
      topics: [
        "Start simple AI ideas",
        "AI research helper",
        "AI creative generator",
        "AI storytelling assistance",
      ],
      color: "bg-green-100",
    },
    {
      week: "Week 4",
      title: "Final AI Project",
      topics: [
        "Create your own AI project",
        "AI homework helper",
        "Creative storytelling",
      ],
      color: "bg-red-100",
    },
    {
      week: "Week 5",
      title: "Final AI Project",
      topics: [
        "Create your own AI project",
        "AI homework helper",
        "Creative storytelling",
      ],
      color: "bg-yellow-100",
    },
    {
      week: "Week 6",
      title: "Final AI Project",
      topics: [
        "Create your own AI project",
        "AI homework helper",
        "Creative storytelling",
      ],
      color: "bg-purple-100",
    },
    {
      week: "Week 7",
      title: "Final AI Project",
      topics: [
        "Create your own AI project",
        "AI homework helper",
        "Creative storytelling",
      ],
      color: "bg-blue-100",
    },
    {
      week: "Week 8",
      title: "Final AI Project",
      topics: [
        "Create your own AI project",
        "AI homework helper",
        "Creative storytelling",
      ],
      color: "bg-teal-100",
    },
  ]

  return (
    <section className="bg-[#F7F7FB] py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top Decorations */}
        <div className="absolute left-10 top-10 text-purple-400 text-3xl rotate-12">
          <img src="/Group 395.png" alt="" />
        </div>
        <div className="absolute right-10 top-10 text-yellow-400 text-4xl">
          <img src="/Group 396.png" alt="" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            A simple{" "}
            <span className="bg-red-200 text-red-600 px-2 py-1 rounded-md text-xl align-middle">
              8 WEEKS
            </span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-800">
            Learning Journey
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {weeks.map((week, idx) => (
            <div
              key={idx}
              className={`${week.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
            >
              {/* Week Badge */}
              <div className="flex justify-between items-center mb-4">
                <span className="bg-white/70 text-xs font-semibold px-3 py-1 rounded-full">
                  {week.week}
                </span>
                <span className="text-xs text-gray-500">2 Sessions</span>
              </div>

              {/* Placeholder Image Box */}
              <div className="h-24 bg-white/60 rounded-lg mb-4"></div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                {week.title}
              </h3>

              {/* Topics */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600">
                  What they Learn
                </p>
                {week.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <p className="text-xs text-gray-700">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// Monthly Upgrade Section


function MonthlyUpgradeSection() {
  return (
    <section
      className="px-4 py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Rectangle 560 (1).png')",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* CONTENT CONTAINER */}
        <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              The Monthly AI Upgrade
            </h2>

            {/* Badge */}
            <div className="inline-block bg-[#BFDBFE] text-[#1E40AF] px-6 py-3 rounded-full font-semibold text-sm mb-6">
              1 FREE Session/Month after the Summer camp
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base">
              Learning shouldn’t stop after the camp because AI never stops evolving
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Group 410.png"
              alt="AI characters"
              className="w-64 md:w-80 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

//  function MonthlyUpgradeSectionLast() {
//   const faqs = [
//     "Build 90 buddy for exams",
//     "Use AI to summarise chapters, create flashcards and study smarter",
//     "Your Personal AI Mentor",
//     "Improve presentation skills with AI",
//     "Turn Imagination into Art & Music",
//     "Ace public speaking skills",
//   ]

//   const tools = [
//     "/tool1.png",
//     "/tool2.png",
//     "/tool3.png",
//     "/tool4.png",
//     "/tool5.png",
//     "/tool6.png",
//     "/tool7.png",
//     "/tool8.png",
//   ]

//   return (
//     <section className="relative py-20 px-4 overflow-hidden">
      
//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "linear-gradient(180deg, #6D7DFF 0%, #A5B4FC 50%, #C7D2FE 100%)",
//         }}
//       />

//       {/* CLOUD TOP IMAGE */}
//       <img
//         src="/Clip path group.png"
//         alt="cloud"
//         className="absolute top-0 left-0 w-full object-cover"
//       />

//       <div className="max-w-5xl mx-auto text-center">

//         {/* TITLE */}
//         <h2 className="text-3xl font-bold text-black mb-10">
//           Real Skill • Real Outcome
//         </h2>

//         {/* ACCORDION */}
//         <Accordion type="single" collapsible className="space-y-3 mb-16">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`item-${idx}`}
//               className="bg-white rounded-lg px-4 border"
//             >
//               <AccordionTrigger className="text-left font-medium">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 text-sm">
//                 Content for {faq}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>

//         {/* AI TOOLS */}
//         <h2 className="text-2xl font-bold mb-8">
//           Safe AI Tools you will learn
//         </h2>

//         <div className="flex flex-wrap justify-center gap-8 mb-20">
//           {tools.map((tool, idx) => (
//             <img
//               key={idx}
//               src={tool}
//               alt="tool"
//               className="w-10 h-10 object-contain"
//             />
//           ))}
//         </div>

//         {/* FAQ TITLE */}
//         <h2 className="text-2xl font-bold mb-8">FAQ’s</h2>

//         {/* FAQ ACCORDION */}
//         <Accordion type="single" collapsible className="space-y-3">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`faq-${idx}`}
//               className="bg-white rounded-lg px-4 border"
//             >
//               <AccordionTrigger className="text-left font-medium">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 text-sm">
//                 Answer for {faq}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   )
// }

// function MonthlyUpgradeSectionLast() {
//   const faqs = [
//     "Build 90 buddy for exams",
//     "Use AI to summarise chapters, create flashcards and study smarter",
//     "Your Personal AI Mentor",
//     "Improve presentation skills with AI",
//     "Turn Imagination into Art & Music",
//     "Ace public speaking skills",
//   ]

//   const tools = [
    
//     "/image 134.png",
//     "/Logo (1).png",
//     "/Logo (2).png",
//     "/Logo.png",
//     "/image 134.png",
//     "/Logo (1).png",
//     "/Logo (2).png",
//     "/Logo.png",

//   ]

//   return (
//     <section className="relative py-20 px-4 overflow-hidden">

//       {/* 🔵 BACKGROUND GRADIENT */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#6D7DFF] via-[#8FA2FF] to-[#D6DCFF]" />

//       {/* ☁️ CLOUD IMAGE */}
//       <img
//         src="/Clip path group.png"
//         alt="cloud"
//         className="absolute top-0 left-0 w-full object-cover"
//       />

//       <div className="max-w-5xl mx-auto text-center">

//         {/* 🔹 TITLE */}
//         <h2 className="text-3xl font-bold text-black mb-10">
//           Real Skill • Real Outcome
//         </h2>

//         {/* 🔹 ACCORDION */}
//         <Accordion type="single" collapsible className="space-y-3 mb-16">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`item-${idx}`}
//               className="bg-white rounded-lg px-5 border border-gray-200 shadow-sm"
//             >
//               <AccordionTrigger className="text-left font-medium">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 text-sm">
//                 Content for {faq}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>

//         {/* 🔹 AI TOOLS */}
//         <h2 className="text-2xl font-bold mb-8">
//           Safe AI Tools you will learn
//         </h2>

//         <div className="flex flex-wrap justify-center gap-10 mb-20">
//           {tools.map((tool, idx) => (
//             <img
//               key={idx}
//               src={tool}
//               alt="tool"
//               className="w-12 h-12 object-contain"
//             />
//           ))}
//         </div>

//         {/* 🔹 FAQ TITLE */}
//         <h2 className="text-2xl font-bold mb-8">FAQ’s</h2>

//         {/* 🔹 FAQ ACCORDION */}
//         <Accordion type="single" collapsible className="space-y-3">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`faq-${idx}`}
//               className="bg-white rounded-lg px-5 border border-gray-200 shadow-sm"
//             >
//               <AccordionTrigger className="text-left font-medium">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 text-sm">
//                 Answer for {faq}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>

//       </div>
//     </section>
//   )
// }
function MonthlyUpgradeSectionLast() {
  const faqs = [
    "Build 90 buddy for exams",
    "Use AI to summarise chapters, create flashcards and study smarter",
    "Your Personal AI Mentor",
    "Improve presentation skills with AI",
    "Turn Imagination into Art & Music",
    "Ace public speaking skills",
  ]

  const tools = [
    "/image 134.png",
    "/Logo (1).png",
    "/Logo (2).png",
    "/Logo.png",
    "/image 134.png",
    "/Logo (1).png",
    "/Logo (2).png",
    "/Logo.png",
  ]

  return (
    <section className="relative py-16 px-6 overflow-hidden">

      {/* 🔵 Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#6D7DFF] via-[#8FA2FF] to-[#D6DCFF]" />

      {/* ☁️ Cloud */}
      <img
        src="/Clip path group.png"
        alt="cloud"
        className="absolute top-0 left-0 w-full object-cover opacity-90 pointer-events-none"
      />

<div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 🔹 Title */}
        <h2 className="text-3xl font-semibold text-black mb-8">
          Real Skill • Real Outcome
        </h2>

        {/* 🔹 Accordion */}
        <Accordion type="single" collapsible className="space-y-3 mb-16">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                {faq}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm pb-2">
                Content for {faq}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* 🔹 AI Tools */}
        <h2 className="text-xl font-semibold mb-6">
          Safe AI Tools you will learn
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {tools.map((tool, idx) => (
            <img
              key={idx}
              src={tool}
              alt="tool"
              className="w-10 h-10 object-contain"
            />
          ))}
        </div>

        {/* 🔹 FAQ Title */}
        <h2 className="text-xl font-semibold mb-6">FAQ’s</h2>

        {/* 🔹 FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                {faq}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm pb-2">
                Answer for {faq}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CombinedSection />
      <AIShapingSection />
      <LearningJourneySection />
      <EnrollmentSection />
      <UpcomingBatchSection />
      <MonthlyUpgradeSection />
      <MonthlyUpgradeSectionLast/>
    </main>
  )
}
