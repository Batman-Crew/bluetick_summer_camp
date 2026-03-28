"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Youtube, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Invalid email address");
      return;
    }
    setError("");

    try {
      await fetch("https://4tm07os0jl.execute-api.ap-south-1.amazonaws.com/prod/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, formType: "newsletter" }),
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-[#272727] pb-5 mt-[50px] md:mt-[80px]">
      {/* TOP GRID */}
      <div className="grid grid-cols-12">
        {/* Logo */}
        <div className="border border-[#4F4F4F] hidden md:flex items-center col-span-2 px-4">
          <Link href="/">
            <Image
              src="/logo 1.png"
              alt="BlueTick Logo"
              width={90}
              height={90}
              className=" object-contain"
            />
          </Link>
        </div>

        {/* Social Icons */}
        {socials.map(({ icon: Icon, href }, i) => (
          <div
            key={i}
            className="py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2"
          >
            <Link href={href}>
              <Icon size={24} className="text-white" />
            </Link>
          </div>
        ))}

        {/* Email */}
        <div className="col-span-12 md:col-span-3">
          <Link href="mailto:info@bluetickacademy.ai">
            <div className="py-2 md:py-8 px-4 md:border border-[#4F4F4F] flex gap-2 items-center">
              <Mail size={20} className="text-white shrink-0" />
              <p className="text-white text-sm">info@bluetickacademy.ai</p>
            </div>
          </Link>
        </div>

        {/* Phone */}
        <div className="col-span-12 md:col-span-2">
          <Link href="tel:+919606681814">
            <div className="py-3 md:py-8 px-4 border-b md:border border-[#4F4F4F] flex gap-2 items-center">
              <Phone size={20} className="text-white shrink-0" />
              <p className="text-white text-sm">+91-9606 6818 14</p>
            </div>
          </Link>
        </div>
      </div>

      {/* QUICK LINKS + NEWSLETTER */}
      <div className="grid md:grid-cols-3 px-8 py-8">
        {/* <div className="md:col-span-2">
          <p className="text-white py-2 font-semibold text-lg">Quick Links</p>
          <div className="md:flex gap-5">
            <Link href="/" className="flex gap-2 text-white py-1">
              <ArrowRight size={12} className="text-[#FE4855] mt-1" />
              Home
            </Link>
            <Link href="/upcoming_batch" className="flex gap-2 text-white py-1">
              <ArrowRight size={12} className="text-[#FE4855] mt-1" />
              Upcoming Batch
            </Link>
          </div>
        </div> */}

        {/* Newsletter */}
        <div className="col-start-3">
          <p className="text-white font-semibold text-[18px] py-2">
            Sign up to our newsletter
          </p>
          <p className="text-white text-[14px] my-2">
            Stay updated on camp dates, offers &amp; announcements.
          </p>

          {submitted ? (
            <p className="text-green-400 text-sm mt-3">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border border-gray-300 text-white rounded-lg block w-full p-2.5 my-3"
                placeholder="Email address*"
                required
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-orange-500 to-red-500 font-medium rounded-lg px-8 w-full py-2 my-2"
              >
                SUBMIT
              </button>
            </form>
          )}
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-white">
        <p className="text-[12px] md:text-[16px] py-3">
          © 2026 BlueTick AI Academy. All Rights Reserved.
        </p>
        <div className="flex gap-5 justify-center text-sm md:text-base font-semibold">
          <Link href="/privacypolicy">Privacy Policy</Link>
          <Link href="/termsandcondition">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
