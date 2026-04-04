'use client'

import Image from 'next/image'
import { ChevronDown, Plus, X, CheckCircle2, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
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
      className="relative md:min-h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${HeroBackGround.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Grid overlay */}
   

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-4 pb-0 md:pb-12 min-h-[600px] md:min-h-[680px]">

        {/* Badge */}
        <div className="lg:mt-20">

        <div className="inline-block bg-[#4875F0] text-white text-xs font-semibold px-5 py-2 mb-6 tracking-wider shadow rounded-sm">
          FOR AGES 11–14 | GRADES 6–9
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl text-[#0d0d2b] leading-tight mb-4">
          <b>AI Summer Camp</b><br /><span>for students</span>
        </h1>

        {/* Subheadline */}
        <p className="font-crimson italic font-normal text-2xl md:text-[35px] leading-[130%] tracking-[-0.03em] text-center mb-8 text-[#3B048A] px-4">
          Give Your Child a Head Start in the World of AI
        </p>

       

        {/* CTAs */}
        <div className="flex hidden md:flex flex-nowrap gap-3 justify-center py-6 md:mb-12 w-full px-4">
          <button
            className="bg-[#0d0d2b] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#1a1a4e] transition-colors shadow-lg whitespace-nowrap"
            onClick={() => document.getElementById("learning-journey")?.scrollIntoView({ behavior: "smooth" })}
          >
            Live Online Classes
          </button>
          <button
            className="bg-[#3b82f6] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#2563eb] transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </button>
        </div>
        </div>

         {/* Robot + floating icons row (mobile) */}
        <div className="relative w-full flex justify-center items-end md:hidden" style={{ height: '280px' }}>
          {/* Robot - left */}
          <div className="absolute left-0 bottom-0 w-48 drop-shadow-2xl animate-float-slow pointer-events-none">
            <img src={Rebot.src} alt="AI Robot" className="w-full object-contain" />
          </div>
          {/* Floating icons - scattered right side matching design */}
          <div className="absolute right-2 top-4 w-24 animate-float-fast drop-shadow-xl pointer-events-none">
            <img src={HeroLogoOne.src} alt="AI Brain" className="w-full object-contain" />
          </div>
          <div className="absolute right-16 top-[42%] w-20 animate-float-medium drop-shadow-xl pointer-events-none">
            <img src={HeroLogoTwo.src} alt="AI Chip" className="w-full object-contain" />
          </div>
          <div className="absolute right-2 top-[62%] w-24 animate-float-slow drop-shadow-xl pointer-events-none">
            <img src={HeroLogoThree.src} alt="Medal" className="w-full object-contain" />
          </div>
        </div>

        {/* Desktop floating elements (hidden on mobile) */}
        <div className="hidden md:block absolute left-0 bottom-0 w-72 lg:w-80 drop-shadow-2xl animate-float-slow pointer-events-none">
          <img src={Rebot.src} alt="AI Robot" className="w-full object-contain" />
        </div>
        <div className="hidden md:block absolute right-[6%] top-[20%] w-40 animate-float-fast drop-shadow-xl pointer-events-none">
          <img src={HeroLogoOne.src} alt="AI Brain" className="w-full object-contain" />
        </div>
        <div className="hidden md:block absolute right-[14%] top-[48%] w-35 animate-float-medium drop-shadow-xl pointer-events-none">
          <img src={HeroLogoTwo.src} alt="AI Chip" className="w-full object-contain" />
        </div>
        <div className="hidden md:block absolute right-[5%] top-[68%] w-40 animate-float-slow drop-shadow-xl pointer-events-none">
          <img src={HeroLogoThree.src} alt="Medal" className="w-full object-contain" />
        </div>
         <div className="flex md:hidden flex-nowrap gap-3 justify-center py-6 md:mb-12 w-full px-4">
          <button
            className="bg-[#0d0d2b] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#1a1a4e] transition-colors shadow-lg whitespace-nowrap"
            onClick={() => document.getElementById("learning-journey")?.scrollIntoView({ behavior: "smooth" })}
          >
            Live Online Classes
          </button>
          <button
            className="bg-[#3b82f6] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#2563eb] transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </button>
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
      className="py-2 md:py-16 md:px-15"
      style={{
        backgroundImage: `url(${HeroMiddleBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto">
        <div className="rounded-3xl p-6 md:p-10 grid grid-cols-1 w-full  md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center md:max-w-xl md:items-start w-full   gap-6">
            {/* Academy Badge */}
            <img src={HeroLogo.src} alt="Top AI Academy in India" className="w-48 object-contain mx-auto" />

            {/* Stat Cards */}
            <div className="grid grid-cols-2  gap-3 md:gap-10 w-full ">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#EAF4EC] rounded-xl px-2 py-2 md:px-4 md:py-3 shadow-sm "
                >
                  {/* Icon */}
                  <div className="text-2xl">{stat.icon}</div>

                  {/* Text */}
                  <div className="text-left ">
                    <p className="font-semibold text-lg ">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full rounded-xl  bg-blue-100 py-3 px-4 text-center">
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
  const BASE_AMOUNT = 2999

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    school: "",
  })
  const [paymentOption, setPaymentOption] = useState<"pay-now" | "enquire-later">("pay-now")
  const [batchName, setBatchName] = useState("")
  const [showPromo, setShowPromo] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState<{ discount: number; label: string } | null>(null)
  const [promoError, setPromoError] = useState("")
  const [promoLoading, setPromoLoading] = useState(false)
  const [payLoading, setPayLoading] = useState(false)
  const [enquireSuccess, setEnquireSuccess] = useState(false)

  const [batches, setBatches] = useState<{ id: string; date: string; days?: string; soldOut?: boolean }[]>([])
  const [batchDropdownOpen, setBatchDropdownOpen] = useState(false)

  const finalAmount = promoApplied
    ? Math.round(BASE_AMOUNT * (1 - promoApplied.discount / 100))
    : BASE_AMOUNT

  useEffect(() => {
    fetch("/api/batches").then((r) => r.json()).then(setBatches)
  }, [])

  // Load Razorpay checkout script once
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return
    setPromoLoading(true)
    setPromoError("")
    try {
      const res = await fetch("/api/validate-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promoCode }),
      })
      const data = await res.json()
      if (data.valid) {
        setPromoApplied({ discount: data.discount, label: data.label })
        setPromoError("")
      } else {
        setPromoApplied(null)
        setPromoError("Invalid promo code. Please try again.")
      }
    } finally {
      setPromoLoading(false)
    }
  }

  const handleProceedToPayment = async () => {
    if (!formData.name || !formData.phone || !formData.email || !batchName) return
    setPayLoading(true)
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          batch: batchName,
          promoCode: promoApplied ? promoCode : null,
          amount: BASE_AMOUNT,
          finalAmount,
        }),
      })
      const { order } = await res.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "BlueTick AI Summer Camp",
        description: `Batch: ${batchName}`,
        order_id: order.id,
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          })
          const data = await verifyRes.json()
          if (data.success) {
            toast.success("Payment Successful! We'll send details to " + formData.email + " shortly.")
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: `+91${formData.phone}`,
        },
        notes: {
          batch: batchName,
          grade: formData.grade,
          school: formData.school,
        },
        theme: { color: "#2563EB" },
      }

      const razorpay = new (window as unknown as { Razorpay: new (opts: typeof options) => { open: () => void } }).Razorpay(options)
      razorpay.open()
    } finally {
      setPayLoading(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        grade: "",
        school: "",
      })
    }
  }

  const handleEnquire = async () => {
    if (!formData.name || !formData.phone || !formData.email) return
    setPayLoading(true)
    try {
      await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setEnquireSuccess(true)
    } finally {
      setPayLoading(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        grade: "",
        school: "",
      })
      }
  }

if (enquireSuccess) {
    return (
      <section id="enrollment" className="bg-white py-14 md:py-20 md:px-30">
        <div className="mx-auto flex items-center justify-center min-h-[400px]">
          <div className="text-center p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-md">
            <CheckCircle2 className="w-16 h-16 text-[#2563EB] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Enquiry Submitted!</h3>
            <p className="text-gray-600">We'll reach out to <strong>{formData.email}</strong> soon with payment details.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enrollment" className="bg-white py-4 md:py-20 md:px-30">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">

          {/* LEFT SIDE */}
        <div className="h-full flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-3xl min-h-[450px] bg-white order-2 md:order-1">
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
                AI SUMMER <br /> CAMP FEE
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 mb-2">
                Early Bird Price
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-black">₹{BASE_AMOUNT.toLocaleString()}</p>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-sm border">
                <span className="text-sm text-gray-400 line-through">
                  ₹3,999
                </span>
                <span className="text-sm text-red-500 font-medium">
                  From 1st April
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Enroll Now</h3>

            <p className="text-sm text-gray-600 mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gray-600" />
              It takes less than 60 seconds
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

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
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option value="">Select Grade</option>
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
                <input
                  type="text"
                  placeholder="Enter School Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  value={formData.school}
                  onChange={(e) =>
                    setFormData({ ...formData, school: e.target.value })
                  }
                />
              </div>

              {/* Payment Options */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentOption === "pay-now"}
                    onChange={() => setPaymentOption("pay-now")}
                  />
                  <span className="text-sm">Pay Now</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentOption === "enquire-later"}
                    onChange={() => setPaymentOption("enquire-later")}
                  />
                  <span className="text-sm">Enquire Now, Pay Later</span>
                </label>
              </div>

              {/* Batch selection — only shown when Pay Now is selected */}
              {paymentOption === "pay-now" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Batch
                  </label>
                  {/* Custom batch dropdown for superscript ordinal rendering */}
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-white text-left flex items-center justify-between"
                      onClick={() => setBatchDropdownOpen((o) => !o)}
                    >
                      <span className={batchName ? "text-gray-900" : "text-gray-400"}>
                        {batchName
                          ? (() => {
                              const b = batches.find((x) => x.date === batchName)
                              if (!b) return batchName
                              const m = b.date.match(/^(\d+)(st|nd|rd|th)\s+(\w+)/)
                              if (!m) return b.date
                              return (
                                <span>
                                  {m[1]}<sup className="text-[0.6em] font-medium">{m[2]}</sup> {m[3]}{b.days ? ` - ${b.days}` : ""}
                                </span>
                              )
                            })()
                          : "Select a Batch"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${batchDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {batchDropdownOpen && (
                      <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        {batches.filter((b) => !b.soldOut).map((b) => {
                          const m = b.date.match(/^(\d+)(st|nd|rd|th)\s+(\w+)/)
                          return (
                            <li
                              key={b.id}
                              className={`px-4 py-3 cursor-pointer hover:bg-blue-50 ${batchName === b.date ? "bg-blue-50 font-medium" : ""}`}
                              onClick={() => { setBatchName(b.date); setBatchDropdownOpen(false) }}
                            >
                              {m ? (
                                <span>
                                  {m[1]}<sup className="text-[0.6em] font-medium">{m[2]}</sup> {m[3]}{b.days ? ` - ${b.days}` : ""}
                                </span>
                              ) : b.date}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* Promo - only shown for Pay Now */}
              {paymentOption === "pay-now" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="promo"
                      className="rounded"
                      checked={showPromo}
                      onChange={(e) => {
                        setShowPromo(e.target.checked)
                        if (!e.target.checked) {
                          setPromoCode("")
                          setPromoApplied(null)
                          setPromoError("")
                        }
                      }}
                    />
                    <label htmlFor="promo" className="text-sm text-gray-600 cursor-pointer">
                      Have a Promo code?
                    </label>
                  </div>

                  {showPromo && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm uppercase"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value)
                          setPromoApplied(null)
                          setPromoError("")
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="px-4 py-2 text-sm border-[#2563EB] text-[#2563EB] hover:bg-[#EAF3FF]"
                        onClick={handleApplyPromo}
                        disabled={promoLoading || !promoCode.trim()}
                      >
                        {promoLoading ? "..." : "Apply"}
                      </Button>
                    </div>
                  )}

                  {promoApplied && (
                    <p className="text-xs text-green-600 font-medium">
                      Promo applied: {promoApplied.label} — You save ₹{(BASE_AMOUNT - finalAmount).toLocaleString()}
                    </p>
                  )}
                  {promoError && (
                    <p className="text-xs text-red-500">{promoError}</p>
                  )}
                </div>
              )}

              {/* Button */}
              {paymentOption === "pay-now" ? (
                <Button
                  type="button"
                  className="w-full bg-[#2563EB] text-white py-3 rounded-full text-lg hover:bg-[#1d4ed8] flex items-center justify-center gap-2 disabled:opacity-60"
                  onClick={handleProceedToPayment}
                  disabled={payLoading || !batchName || !formData.name || !formData.phone || !formData.email}
                >
                  {payLoading ? "Processing..." : `Proceed to Payment — ₹${finalAmount.toLocaleString()}`}
                  {!payLoading && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  className="w-full bg-[#2563EB] text-white py-3 rounded-full text-lg hover:bg-[#1d4ed8] flex items-center justify-center gap-2 disabled:opacity-60"
                  onClick={handleEnquire}
                  disabled={payLoading || !formData.name || !formData.phone || !formData.email}
                >
                  {payLoading ? "Submitting..." : "Enroll Now"}
                  {!payLoading && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                  )}
                </Button>
              )}
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
    <section className="py-14 md:py-20 px-4 md:px-20">
      <div className="md:px-24 mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Upcoming Batch</h2>

        {/* Course Pill */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#3C2191] text-white px-5 py-2 rounded-full text-sm font-semibold shadow">
            1 Month Course
          </span>
        </div>

        {/* Info Pills */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <div className="flex items-center gap-2 bg-[#D7CFF0] text-purple-900 px-4 py-2 rounded-lg text-sm">
            <CalendarDays className="w-4 h-4" />
            Weekdays or Weekends
          </div>
          <div className="flex items-center gap-2 bg-[#D7CFF0] text-purple-900 px-4 py-2 rounded-lg text-sm">
            <Clock className="w-4 h-4" />
             2Hrs / day
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl mx-auto gap-4">

          {batches.map((batch, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg text-left [font-family:var(--font-sofia-sans)] ${
                batch.soldOut
                  ? "border border-[#E7CFE1]"
                  : "bg-white border border-gray-300"
              }`}
              style={batch.soldOut ? { background: "linear-gradient(180deg, #FBF8F4 0%, #FAE0F3 100%)" } : undefined}
            >
              {/* Top Row */}
              <div className={`${batch?.soldOut ? "justify-center" : "justify-between"} flex items-center mb-2`}>
                <p className="font-semibold text-sm">{batch.date}</p>

                {batch.days && !batch?.soldOut && (
                  <span className={` bg-black text-white text-xs px-3 py-1 rounded-full`}>
                    {batch.days}
                  </span>
                )}
              </div>

              {/* Sold Out */}
              {batch.soldOut && (
                <div className="flex items-center justify-center">

                <span className="inline-block bg-red-200 text-red-600 text-xs px-3 py-1 rounded-full mt-2">
                  Sold out
                </span>
                </div>
              )}

              {/* Time */}
              {batch.time && !batch?.soldOut && (
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




function AIShapingSection() {
  return (
    <section className="bg-white w-full px-4 md:px-20 py-20 ">
      <div className="">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-30 md:grid-cols-[2fr_1fr]">
          <div className="relative overflow-hidden rounded-[18px] bg-[#e7e0d7] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:min-h-[250px] md:px-6 md:py-6 order-2 md:order-1">
            <div className="max-w-[72%] md:max-w-[68%]">
              <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#161616] md:text-[25px]">
                AI is shaping the Future. <span className="font-normal">Let your child be ready</span>
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
              className="pointer-events-none absolute bottom-0 right-0 h-[200px] w-auto object-contain md:h-[240px]"
            />
          </div>

          <div className="mx-auto w-full max-w-[300px] order-1 md:order-2">
            <div className="overflow-hidden rounded-[18px] bg-[#eef3f4] shadow-[0_14px_26px_rgba(0,0,0,0.08)]">
              <div className="rounded-[18px] rounded-b-[14px] bg-[#cfc4f3] px-6 py-5 text-center shadow-[0_4px_0_rgba(0,0,0,0.10)]">
                <span className="text-base font-semibold text-[#4c34a4]">25% Early bird till 15th April</span>
              </div>
              <div
                className="px-6 py-5 text-center text-[15px] text-[#222222] cursor-pointer"
                onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="font-medium">Enroll Now</span>
                <span className="ml-2 text-[#a3a3a3] line-through">₹3999</span>
                <span className="ml-2 font-semibold text-[#1473ff]">₹2999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function getVideoEmbed(url: string): { type: "iframe"; src: string } | { type: "video"; src: string } {
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) {
    return { type: "iframe", src: `https://drive.google.com/file/d/${driveMatch[1]}/preview` };
  }
  return { type: "video", src: url };
}

function LearningJourneySection() {
  const weeks = [
  {
    week: "Week 1: Session 1",
    title: "AI Literacy – The Magic Behind the Screen",
    topics: [
      "What is AI really? (It's not just magic, it's math)",
      "How LLMs (like ChatGPT) \"think.\"",
    ],
    bg: "bg-[#CFC6E8]",
    badgeColor: "bg-[#6B5CA5] text-white",
    layout: "two",
    handsOn: "The \"Reverse Prompt\" challenge — guessing the prompt behind an image.",
    video: "/videos/Session 1.mp4",
  },
  {
    week: "Week 1: Session 2",
    title: "Master Prompting AI – The Art of Asking",
    topics: [
      "How to talk to AI to get 10x better results.",
      "Learning to give context, persona, and clear tasks.",
    ],
    bg: "bg-[#C9D2DD]",
    badgeColor: "bg-[#3F5166] text-white",
    layout: "two",
    handsOn: "Building a \"Personal AI Mentor\" for their favorite hobby (Gaming, Cricket, or Space).",
    video: "/videos/Session 2.mp4",
  },
  {
    week: "Week 2: Session 3",
    title: "AI Digital Masterpiece – The Modern Day Van Gogh",
    topics: [
      "Understanding styles, lighting, and camera angles.",
      "Create with Leonardo.ai / DALL-E / Canva Magic Media.",
    ],
    bg: "bg-[#CFE3D6]",
    badgeColor: "bg-[#4B5E52] text-white",
    layout: "two",
    handsOn: "Creating a high-definition Personal AI Avatar in 5 different professional styles.",
    video: "/videos/Session 3.mp4",
  },
  {
    week: "Week 2: Session 4",

    title: "Smart Presentations – Slides with AI",
    topics: [
      "Turning 10 pages of notes into 5 powerful slides.",
      "Using AI to design layouts that grab attention instantly.",
    ],
    bg: "bg-[#E6CFCB]",
    badgeColor: "bg-[#7A4A42] text-white",
    layout: "two",
    handsOn: "Creating a stunning presentation for your business idea or solving an environment problem (like e-waste management).",
    video: "/videos/Session 4.mp4",
  },
  {
    week: "Week 3: Session 5",
    title: "AI Soundscapes – The Creative Composer",
    topics: [
      "Composing music and voiceovers using AI (Suno, Udio, or ElevenLabs).",
      "Translating emotions into musical genres.",
    ],
    bg: "bg-[#E8DFC2]",
    badgeColor: "bg-[#7A6B42] text-white",
    layout: "two",
    handsOn: "Creating an Original Theme Song for their upcoming final project.",
    video: "/videos/Session 5.mp4",
  },
  {
    week: "Week 3: Session 6",
    title: "Virtual AI Filmmaking – The Director's Cut",
    topics: [
      "Using AI to generate consistent \"B-roll\" and cinematic shots.",
      "Understanding how to add life to static images.",
    ],
    bg: "bg-[#E2D2E8]",
    badgeColor: "bg-[#6B4A7A] text-white",
    layout: "two",
    handsOn: "Directing a 30-second teaser for a sci-fi movie they've imagined.",
    video: "/videos/Session 6.mp4",
  },
  {
    week: "Week 4: Session 7",
    title: "Build an AI Chatbot – Your Personal AI Tutor",
    topics: [
      "How to give an AI a specific personality and knowledge base.",
      "Teaching the bot to follow a set of \"Rules.\"",
    ],
    bg: "bg-[#E7DDCF]",
    badgeColor: "bg-[#7A6A55] text-white",
    layout: "two",
    handsOn: "Design a chatbot to answer questions on science/math subjects by creating and retrieving memory in AI.",
    video: "/videos/Session 7.mp4",
  },
  {
    week: "Week 4: Session 8",
    title: "Critical Thinking in the Age of AI: Presentations & 2030 Vision",
    topics: [
      "How to verify AI answers and spot mistakes. How to use AI ethically & responsibly.",
      "Presentations & future careers with AI.",
    ],
    bg: "bg-[#D6E6D8]",
    badgeColor: "bg-[#4A7A52] text-white",
    layout: "two",
    handsOn: "Create & present with AI to solve a real-world problem in the future with slides, images & videos.",
    footer: "🎓 Students receive AI Completion Certificate",
    video: "",
    image: "/videos/Session 8.png",
  },
]

  return (
    <section id="learning-journey" className="bg-[#F7F7FB] py-20 md:py-24 px-4 md:px-20 relative overflow-hidden">
      <div className="mx-auto">

          {/* Header */}
          <div className="relative text-center mb-16">

            {/* LEFT Decoration */}
            <div className="absolute left-2 md:left-10 top-6 rotate-12">
              <img src="/Group 395.png" alt="" className="w-10 md:w-32" />
            </div>

            {/* RIGHT Decoration */}
            <div className="absolute right-2 md:right-10 top-6">
              <img src="/Group 396.png" alt="" className="w-12 md:w-32" />
            </div>

            {/* Text */}
            <h2 className="text-4xl md:text-5xl mb-3">
              A simple{" "}
              <span className="bg-red-200 px-2 py-1 rounded-md text-xl align-middle font-bold">
                4 WEEKS
              </span>
            </h2>

            <p className="text-4xl md:text-6xl font-bold text-gray-800">
              Learning Journey
            </p>

            <span className="inline-block mt-4 bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
              Live Online Sessions
            </span>

          </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6 ">
          {weeks?.map((week, idx) => (
            <div
                key={idx}
                className={`${week.bg} p-6 rounded-3xl shadow-sm w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
              >
                {/* Top */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`${week.badgeColor} text-xs px-4 py-1 rounded-full`}>
                    {week.week}
                  </span>

                 
                </div>

                {/* Video / Image */}
                {week.video ? (() => {
                  const embed = getVideoEmbed(week.video);
                  return embed.type === "iframe" ? (
                    <iframe
                      src={embed.src}
                      allow="autoplay; loop"
                      className="w-full h-40 rounded-xl mb-4"
                    />
                  ) : (
                    <video
                      src={embed.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                  );
                })() : week.image ? (
                  <img
                    src={week.image}
                    alt={week.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                ) : (
                  <div className="h-40 bg-white/60 rounded-xl mb-4" />
                )}

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-3 text-md leading-snug">
                  {week?.title}
                </h3>

                {/* Topics */}
                <p className="text-xs font-semibold text-gray-600 mb-2">
                  What they Learn
                </p>

                <div
                  className={`gap-2 mb-4 ${
                    week.layout === "two"
                      ? "grid grid-cols-2"
                      : "flex flex-col"
                  }`}
                >
                  {week.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                      <p className="text-xs text-gray-700">{topic}</p>
                    </div>
                  ))}
                </div>

                {/* Hands-on */}
                {week.handsOn && (
                  <div className="relative mt-4">
                    <div className="absolute -top-2 left-4 bg-white text-[10px] px-2 py-0.5 rounded-full shadow">
                      Hands on
                    </div>
                    <div className="border border-gray-300 rounded-xl p-3 text-xs text-gray-700 bg-white/40">
                      {week.handsOn}
                    </div>
                  </div>
                )}

                {/* Footer */}
                {week.footer && (
                  <div className="mt-4 bg-red-100 text-[10px] px-3 py-2 rounded-lg text-gray-700">
                    {week.footer}
                  </div>
                )}
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
      className="px-4 py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Rectangle 560 (1).png')",
      }}
    >
      <div className="mx-auto">

        {/* CONTENT CONTAINER */}
        <div className=" md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

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
//     <section className="relative py-20 px-6 overflow-hidden">

//       {/* 🔵 Background Gradient */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#6D7DFF] via-[#8FA2FF] to-[#D6DCFF]" />

//       {/* ☁️ Cloud */}
//       <img
//         src="/Clip path group.png"
//         alt="cloud"
//         className="absolute top-0 left-0 w-full object-cover opacity-90 pointer-events-none"
//       />

// <div className="relative z-10 max-w-7xl mx-auto text-center">
//         {/* 🔹 Title */}
//         <h2 className="text-3xl font-semibold text-black mb-8">
//           Real Skill • Real Outcome
//         </h2>

//         {/* 🔹 Accordion */}
//         <Accordion type="single" collapsible className="space-y-3 mb-16">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`item-${idx}`}
//               className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
//             >
//               <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-500 text-sm pb-2">
//                 Content for {faq}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>

//         {/* 🔹 AI Tools */}
//         <h2 className="text-3xl font-semibold mb-6">
//           Safe AI Tools you will learn
//         </h2>

//         <div className="flex flex-wrap justify-center gap-6 mb-16">
//           {tools.map((tool, idx) => (
//             <img
//               key={idx}
//               src={tool}
//               alt="tool"
//               className="w-10 h-10 object-contain"
//             />
//           ))}
//         </div>

//         {/* 🔹 FAQ Title */}
//         <h2 className="text-3xl font-semibold mb-6">FAQ’s</h2>

//         {/* 🔹 FAQ Accordion */}
//         <Accordion type="single" collapsible className="space-y-3">
//           {faqs.map((faq, idx) => (
//             <AccordionItem
//               key={idx}
//               value={`faq-${idx}`}
//               className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
//             >
//               <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
//                 {faq}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-500 text-sm pb-2">
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
  // 🔹 First Section (Skills / Outcomes)
  const faqs = [
    {
      title: "Build an AI buddy for exams",
      description:
        "Your child will create a personalized study expert that turns school chapters into interactive quizzes and fun summaries, making exam prep 10x more effective.",
    },
    {
      title: "Master Visual Storytelling",
      description:
        "Your child will learn to use professional AI design tools to turn raw imagination into high-definition characters, 3D posters, and digital masterpieces.",
    },
    {
      title: "Cinematic Movie & Music Production",
      description:
        "Your child transforms from a consumer to a creator by composing original AI music and directing cinematic video trailers that look and sound like they belong on the big screen.",
    },
    {
      title: "AI-Powered Presentations",
      description:
        "Generate content on any topic with AI and turn them into beautiful slides within minutes.",
    },
    {
      title: "Improve Public Speaking",
      description:
        "Using an AI 'Speech Coach,' students get instant feedback on their tone, modulation, and body language, turning them into confident speakers.",
    },
  ]

  // 🔹 FAQ Section
  const faqsList = [
    {
      question: "What is this Summer AI Camp about?",
      answer:
        "This camp helps children understand AI in a fun, hands-on way. They will not just watch — they will actually build small projects and learn how to think creatively with AI.",
    },
    {
      question: "How long is this AI Camp?",
      answer:
        "The Summer camp has 8 sessions in total. 2 sessions will be conducted weekly and each session will be for 2 hours. You can choose to enroll for either the weekend or weekday batches.",
    },
    {
      question: "Does my child need to know coding to join?",
      answer:
        "Not at all—we focus on AI Logic and Critical Thinking, which is the 'new coding.' Your kid will be mastering the art of directing the machines that write the code.",
    },
    {
      question:
        "Will this be too difficult for 6th or 7th standard students?",
      answer:
        "No. The same session is taught in a child-friendly way, with easier project tasks for younger students and slightly deeper work for older ones. Every child learns at the right level.",
    },
    {
      question: "What if my child misses one session?",
      answer:
        "We understand that children may miss a class sometimes. We will try to support them with the recording or a catch-up path so they do not feel left behind.",
    },
    {
      question: "Will this actually help with their school grades?",
      answer:
        "Yes—Track #4 (Smart Presentations) and Track #7 (AI Chatbot) are specifically designed to turn AI into a personalized 10x study mentor. It’s the ultimate academic unfair advantage.",
    },
    {
      question:
        "Do we need any special software or expensive laptop?",
      answer:
        "No special setup is needed. A basic laptop or desktop with internet is enough for most activities. We keep the tools simple and easy for students to use.",
    },
    {
      question: "Why should I enroll now?",
      answer:
        "Because AI is moving fast, and children who start early will feel more confident than those who wait. This is a great time to teach them how to use this smart yet powerful tool.",
    },
    {
      question: "Is there anything after the camp?",
      answer:
        "Yes. Students will get access to one free live session every month. That way, learning does not stop when the camp ends, because AI keeps changing.",
    },
    {
      question:
        "Can I speak to someone before enrolling?",
      answer:
        "Absolutely. You can drop your details with the Enquire Now, Pay Later option, and our Learning Advisor will get in touch with you.",
    },
  ]

  // 🔹 Tool Logos
  const tools = [
    "/AI_STACKS/gpt.png",
    "/AI_STACKS/gemini.png",
    "/AI_STACKS/leonardo.png",
    "/AI_STACKS/Canva_logo.svg.webp",
    "/AI_STACKS/suno.png",
    "/AI_STACKS/Runway_Logo.png",
    "/AI_STACKS/Luma-AI-scaled.webp",
    "/AI_STACKS/Yoodli logo.png",
    "/AI_STACKS/Logo.png",
    "/AI_STACKS/Logo (1).png",
    "/AI_STACKS/mizou.svg",
    "/AI_STACKS/acme_inc.svg",
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* 🔵 Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#6D7DFF] via-[#8FA2FF] to-[#D6DCFF]" />

      {/* ☁️ Cloud */}
      <img
        src="/Clip path group.png"
        alt="cloud"
        className="absolute top-0 left-0 w-full object-cover opacity-90 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* 🔹 Title */}
        <h2 className="text-3xl font-semibold text-black mb-8">
          Real Skill • Real Outcome
        </h2>

        {/* 🔹 Skills Accordion */}
        <Accordion type="single" defaultValue="item-0" collapsible className="space-y-3 mb-16">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-left text-sm pb-2">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* 🔹 AI Tools */}
        <h2 className="text-3xl font-semibold mb-6">
          Safe AI Tools you will learn
        </h2>

        <style>{`
          @keyframes tools-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 767px) {
            .tools-track { animation: tools-scroll 10s linear infinite; }
          }
        `}</style>
        {/* Mobile: auto-scroll marquee */}
        <div className="relative w-full overflow-hidden mb-16 md:hidden">
          <div className="flex tools-track w-max gap-8">
            {[...tools, ...tools].map((tool, idx) => (
              <img key={idx} src={tool} alt="tool" className="w-10 h-10 object-contain flex-shrink-0" />
            ))}
          </div>
        </div>
        {/* Desktop: static centered row */}
        <div className="hidden md:flex flex-wrap justify-center gap-8 mb-16">
          {tools.map((tool, idx) => (
            <img key={idx} src={tool} alt="tool" className="w-15 h-15 object-contain" />
          ))}
        </div>
      </div>
      <div className="relative z-10 -mx-6">
        <AIShapingSection />
      </div>
      <div className="relative z-10 py-4 max-w-7xl mx-auto text-center">
        {/* 🔹 FAQ Title */}
        <h2 className="text-3xl mt-5 font-semibold mb-6">FAQ’s</h2>

        {/* 🔹 FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqsList.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            >
              <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm text-left pb-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sandya Dham",
      role: "Parent",
      text: "We took admission for both my son and daughter. I think this is really useful and future oriented compared to just sitting at home and spending time on ott and social media.",
      image: "/testimonial_images/Sandya Dham.png",
    },
    {
      name: "Nithil Mohan",
      role: "8th Grade, IGCSE",
      text: "I am grade 8. The AI filmmaking is my most favorite session. I made some scifi images and turned that into a teaser.. Classes are very interesting..",
      image: "/testimonial_images/Nithil Mohan.png",
    },
    {
      name: "Joshua",
      role: "9th Grade, CBSE",
      text: "I made a chatbot and showed it to my school teachers. Now I feel I can do more things with AI.",
      image: "/testimonial_images/Joshua.png",
    },
    {
      name: "Karthik Vasan",
      role: "Parent",
      text: "We enrolled our son just to keep him engaged during holidays. But this turned out to be more useful than we expected. He started asking better questions and even tried explaining AI concepts at home. The classes were well-paced. Overall, a good experience for both kids and parents.",
      image: "/testimonial_images/Karthik Vasan.png",
    },
    {
      name: "Neha Bhat",
      role: "Parent",
      text: "My son is in 7th standard and usually gets bored with online classes. Now he is doing public speaking using some AI websites which I really liked.",
      image: "/testimonial_images/Neha Bhat.png",
    },
    {
      name: "Sinamika",
      role: "6th Grade, CBSE",
      text: "The teachers were patient and explained things very patiently. I thought AI is only chatgpt but now I understand what all I can do with AI.",
      image: "/testimonial_images/Sinamika.png",
    },
    {
      name: "Vikram.M",
      role: "Parent",
      text: "I felt AI is too early for my daughter who is only 11 years now.. But after 2 classes, she started explaining things to me. The way they teach to the kids are fantastic.",
      image: "/testimonial_images/Vikram M.png",
    },
    {
      name: "Viya Vivek",
      role: "6th Grade, ICSE",
      text: "I didn't know anything about AI before joining. Now I know how to use it and for what I can use it. The classes were not boring. We were building things and testing them. I liked the chatbot part the most. I want to learn more in future.",
      image: "/testimonial_images/Viya Vivek.png",
    },
    {
      name: "Rohan Thangadurai",
      role: "Parent",
      text: "My son got fully engaged into this.. As a parent, I felt happy that he learned something futuristic instead of just spending time on online games or tv..",
      image: "/testimonial_images/Rohan Thangadurai.png",
    },
    {
      name: "Mohd Hashim",
      role: "Parent",
      text: "They kept it very interesting and practical.. my daughter is able to think differently after the classes..she is producing a lot of stuff now quickly and it is impressing..",
      image: "/testimonial_images/Mohd Hashim.png",
    },
    {
      name: "Aadhya Shyam",
      role: "7th Grade, IGCSE",
      text: "I liked making the chatbot myself, I'm now in 7th grade. It was fun and I showed it to my friends also. I thank Harsh sir for this.",
      image: "/testimonial_images/Aadhya Shyam.png",
    },
    {
      name: "Aviyukt",
      role: "8th Grade, CBSE",
      text: "Mentors are very supportive, it was fun learning so many things in AI.. I created my AI buddy to teach me subjects which I don't know..",
      image: "/testimonial_images/Aviyukt.png",
    },
    {
      name: "Aisha Kashyap",
      role: "Parent",
      text: "I am very relieved my daughter is spending so much time out of social media and doing something productive for her future careers.",
      image: "/testimonial_images/Aisha Kashyap.png",
    },
    {
      name: "Krithin Keerthi",
      role: "7th Grade, CBSE",
      text: "At first I thought this will be difficult. But it was easy to follow. We learned step by step. I made a small project and my parents were happy when I showed it. I also liked that we can try things ourselves and not just listen.",
      image: "/testimonial_images/Krithin Keerthi.png",
    },
    {
      name: "Virender Singh",
      role: "Parent",
      text: "It is good that they focus on building small projects. Kids feel happy when they create something. It is very surprising that small kids can create chatbots and websites in a day or less.",
      image: "/testimonial_images/Virendra Singh.png",
    },
    {
      name: "Suvi",
      role: "6th Grade, ICSE",
      text: "The classes were interesting and not boring like usual online classes.",
      image: "/testimonial_images/Suvi.png",
    },
    {
      name: "Milan Sharma",
      role: "7th Grade, ICSE",
      text: "The best part was we could ask doubts anytime. Even if I didn't understand something, they helped me. I made some mistakes but corrected them later. I learned how to think before asking AI. It was a nice experience overall.",
      image: "/testimonial_images/Milan Sharma.png",
    },
    {
      name: "Patrick.J",
      role: "Parent",
      text: "My daughter usually doesn't sit for long online classes, but here she was focused most of the time.",
      image: "/testimonial_images/Patrick.png",
    },
    {
      name: "Priyanka Ghosh",
      role: "Parent",
      text: "My son started exploring AI tools on his own after the class. That was nice to see. Good experience.",
      image: "/testimonial_images/Priyanka Ghosh.png",
    },
    {
      name: "Dhiyan",
      role: "9th Grade, CBSE",
      text: "At first I thought AI means coding and technical and it will be difficult, but it was not at all difficult. I really enjoyed. I liked the competition in the end.",
      image: "/testimonial_images/Dhiyan.png",
    },
    {
      name: "Armaan Goel",
      role: "Parent",
      text: "I feel this is a must starting point for children in AI. They are not overloading them with too much information. Everything is explained in a simple way. My child was able to follow and also try things independently.",
      image: "/testimonial_images/Armaan Goel.png",
    },
    {
      name: "Pranav Sridhar",
      role: "8th Grade, IB",
      text: "I have created my first AI personal mentor which can teach anything technical with images and infographics.. thanks to the interactive sessions.",
      image: "/testimonial_images/Pranav Sridhar.png",
    },
  ]

  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <h2 className="text-3xl font-semibold text-center text-black mb-10">
        What Parents & Students Say
      </h2>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: scroll-left 60s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative w-full">
        <div className="flex testimonials-track w-max">
          {doubled.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 mx-3 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.07)] p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {"★★★★★"}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-15 h-15 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-15 h-15 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-md font-semibold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm text-black">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 90)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between transition-all duration-300
        md:px-16 md:py-4 md:bg-white md:shadow-sm
        ${scrolled
          ? "max-[768px]:top-3 max-[768px]:mx-4 max-[768px]:rounded-full max-[768px]:px-5 max-[768px]:py-3 max-[768px]:bg-white/20 max-[768px]:backdrop-blur-lg max-[768px]:border max-[768px]:border-white/30 max-[768px]:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "max-[768px]:px-5 max-[768px]:py-4 max-[768px]:bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <img src="/logo 1.png" alt="BlueTick Logo" className="h-8 md:h-10 w-auto" />
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hidden md:flex bg-[#0d0d2b] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a1a4e] transition-colors"
          onClick={() => document.getElementById("enrollment")?.scrollIntoView({ behavior: "smooth" })}
        >
          Enroll Now
        </button>
        <a
          href="https://wa.me/919606333830"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      {/* Auto-scrolling update banner */}
      <div className="bg-[#2d1b6b] text-white text-xs py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {Array(4).fill("🚀 Early Bird Registration Now Open! &nbsp;•&nbsp; Limited Seats Available &nbsp;•&nbsp; Secure Your Spot Today &nbsp;•&nbsp; Turn Screen Time Into Skill Time &nbsp;•&nbsp; Build Real AI Projects &nbsp;•&nbsp; The Ultimate AI Summer Camp for Grades 6–9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;").map((text, i) => (
            <span key={i} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <CombinedSection />
      <LearningJourneySection />
      <EnrollmentSection />
      <UpcomingBatchSection />
      <MonthlyUpgradeSection />
      <MonthlyUpgradeSectionLast/>
      <TestimonialsSection />
    </main>
  )
}
