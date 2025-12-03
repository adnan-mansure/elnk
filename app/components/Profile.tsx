"use client";
import Image from "next/image";
import Bio from "./Bio";
import Follow from "./Follow";
import Interests from "./Interests";
import SkillsTools from "./SkillsTools";
import Skinybutton from "./ui/skinyButton";
import Button from "./ui/Button";
import { useState } from "react";
import SaveContactBox from "./SaveContactBox";
import SaveContact from "./SaveContact";

export default function Profile() {
 const [isContactBoxOpen, setIsContactBoxOpen] = useState(false);
  // State for secondary popup inside SaveContactBox (optional)
  const [isSaveContactOpen, setIsSaveContactOpen] = useState(false);
  const [isSavedVisible, setIsSavedVisible] = useState(false);

  const showSaved = () => {
    setIsSavedVisible(true);
    setTimeout(() => setIsSavedVisible(false), 3000);
  };
  
  return (
    <>
      <div className="w-full relative overflow-auto h-full">
        <div className="relative h-[560px] overflow-hidden rounded-b-3xl">
          <video
            src="/images/profile-video.mov"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover pointer-events-none select-none"
          ></video>
          <div className="absolute bottom-0 w-full z-1 h-56 pointer-events-none bg-linear-to-t from-black/60 from-1% to-black/1 to-100%"></div>
          <div
            className="z-2 backdrop-blur-[60px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] border border-white/5 absolute bottom-4 left-4 right-4 px-4 pt-5 pb-4 rounded-3xl">
            <div className="flex items-center">
              <div className="flex items-center flex-1 text-white gap-2">
                <div className="user rounded-full">
                  <Image width={32} alt="" height={32} className="m-0.5 rounded-full" src="/images/img2.jpg" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-0.5">
                    <p className="font-bold text-xl text-white leading-none">Evan
                      Nicolini</p>
                    <Image width={12} alt="" height={12} src="/images/bluetick.svg" />
                  </div>
                  <p
                    className="leading-none text-xs font-medium text-white/60">Founder
                    - Custom Esignature</p>
                </div>
              </div>
              <div
                className="flex items-center gap-2 bg-white/1 backdrop-blur-[30px] rounded-[10px] px-4 py-1">
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-white text-sm">13k</p>
                  <p className="font-medium text-white text-[10px]">Followers</p>
                </div>
                <Image width={16} alt="" height={16} src="/images/instagram.svg" />
              </div>
            </div>
            <div className="bg-linear-to-r from-white/0 via-white/10 to-white/0 my-2.5 h-px"></div>
            <div className="flex gap-2 *:flex *:items-center *:justify-center">
              <Button variant="default" className="flex-1" onClick={() => setIsContactBoxOpen(true)}>Save Contact</Button>
              <Button variant="default" icon><i className="icon-Phone"></i></Button>
              <Button variant="default" icon><i className="icon-Message"></i></Button>
              <Button variant="default" icon><i className="icon-Email"></i></Button>
            </div>
          </div>
        </div>
        <Bio/>
        <Follow/>
        <Interests/>
        <SkillsTools/>

        <div className="p-4 text-white text-xs hidden">
          <div className="text-white/80 mb-5 text-base">Education</div>
          <div className="flex flex-col gap-[22px]">
            <div className="kt-card text-white">
              <div className="kt-card-content flex items-start gap-4">
                <div
                  className="rounded-[10px] bg-white/10 flex items-center justify-center size-[100px]">
                  <Image alt="" width={62} height={62} src="/images/Motion-Design-School.svg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white/50 font-semibold">2021 – 2022</p>
                  <p className="text-white/80 text-xl">Motion Design School,
                    Florida</p>
                  <p className="text-white/50 text-xs">Certificate Program</p>
                  <div>
                    <span
                      className="inline-block bg-black rounded-lg border border-white/10 px-3 py-[7px]">Motion
                      Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-card text-white">
              <div className="kt-card-content flex items-start gap-4">
                <div
                  className="rounded-[10px] bg-white/10 flex items-center justify-center size-[100px]">
                  <Image alt="" width={62} height={62} src="/images/California-State-University.svg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white/50 font-semibold">2016 – 2020</p>
                  <p className="text-white/80 text-xl">California State University,
                    Fullerton</p>
                  <p className="text-white/50 text-xs">Bachelor's Degree</p>
                  <div
                    className="flex flex-wrap gap-1 *:inline-block *:bg-black *:rounded-lg *:border *:border-white/10 *:px-3 *:py-[7px]">
                    <span>Marketing</span>
                    <span>Skill Name</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="kt-card text-white">
              <div className="kt-card-content flex items-start gap-4">
                <div
                  className="rounded-[10px] bg-white/10 flex items-center justify-center size-[100px]">
                  <Image alt="" width={62} height={62} src="/images/San-Diego-High-School.svg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white/50 font-semibold">2012 – 2016</p>
                  <p className="text-white/80 text-xl">San Diego High School</p>
                  <p className="text-white/50 text-xs">High School Diploma</p>
                  <div
                    className="flex flex-wrap gap-1 *:inline-block *:bg-black *:rounded-lg *:border *:border-white/10 *:px-3 *:py-[7px]">
                    <span>Science & Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 text-white text-xs hidden">
          <div className="text-white/80 mb-5 text-base">My Feed</div>
          <div
            className="grid grid-cols-3 flex-col gap-1 *:rounded-[10px] *:border *:border-white/10 *:overflow-hidden">
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
            <div>
              <Image alt="" className="object-cover" width={200} height={200} src="/images/img.jpg" />
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-white inline-flex! w-auto! px-4 h-10! gap-2 items-center mt-5">More
              <i className="icon-Chevron-Right mt-0.5 text-lg"></i></button>
          </div>
        </div>

        <div className="text-white text-xs hidden">
          <div className="p-4 text-white/80 mb-1">My Car</div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper *:w-[40%]!">
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
              <div className="swiper-slide rounded-[10px] overflow-hidden">
                <Image alt="" width={100} height={100} src="/images/img.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-xs hidden p-4">
          <div className="text-white/80 mb-5 text-base">FAQ Section</div>
          <div
            data-kt-accordion="true"
            data-kt-accordion-expand-all="true"
            className="kt-accordion kt-accordion-outline gap-1">
            <div data-kt-accordion-item="true" className="kt-accordion-item border-white/20 rounded-lg active">
              <button
                id="accordion_toggle_0"
                data-kt-accordion-toggle="true"
                aria-controls="accordion_content_0"
                className="kt-accordion-toggle p-3 text-base!">
                <span className="kt-accordion-title text-white text-base!">Who is Evan Nicolini?</span>
                <span aria-hidden="true" className="kt-accordion-indicator text-white">
                  <i className="icon-Plus kt-accordion-indicator-on"></i>
                  <i className="icon-Minus kt-accordion-indicator-off"></i>
                </span>
              </button>
              <div
                className="kt-accordion-content border-0"
                aria-labelledby="accordion_toggle_0"
                id="accordion_content_0">
                <div className="kt-accordion-wrapper px-3! pb-3! pt-0! text-white/50 text-sm">Evan Nicolini is a 28-year-old multi–7-figure entrepreneur, founder of Custom Esignature™ and Nicolini Productions, dedicated to turning ideas into impactful tools. At 26, he built Custom Esignature™, one of the most notable email software tools on the market, transforming how businesses connect through email. He has a track record of helping companies grow from zero to $1M and beyond.</div>
              </div>
            </div>
            <div data-kt-accordion-item="true" className="kt-accordion-item border-white/20 rounded-lg">
              <button
                id="accordion_toggle_1"
                data-kt-accordion-toggle="true"
                aria-controls="accordion_content_1"
                className="kt-accordion-toggle p-3 text-base!"
              >
                <span className="kt-accordion-title text-white text-base!">What does Evan specialize in?</span>
                <span aria-hidden="true" className="kt-accordion-indicator text-white">
                <i className="icon-Plus kt-accordion-indicator-on"></i>
                  <i className="icon-Minus kt-accordion-indicator-off"></i>  
                </span>
              </button>
              <div
                className="kt-accordion-content border-0 hidden"
                aria-labelledby="accordion_toggle_1"
                id="accordion_content_1"
              >
                <div className="kt-accordion-wrapper px-3! pb-3! pt-0! text-white/50 text-sm">Evan Nicolini is a 28-year-old multi–7-figure entrepreneur, founder of Custom Esignature™ and Nicolini Productions, dedicated to turning ideas into impactful tools. At 26, he built Custom Esignature™, one of the most notable email software tools on the market, transforming how businesses connect through email. He has a track record of helping companies grow from zero to $1M and beyond.</div>
              </div>
            </div>

            <div data-kt-accordion-item="true" className="kt-accordion-item border-white/20 rounded-lg">
              <button
                id="accordion_toggle_1"
                data-kt-accordion-toggle="true"
                aria-controls="accordion_content_1"
                className="kt-accordion-toggle p-3 text-base!"
              >
                <span className="kt-accordion-title text-white text-base!">What kind of clients has Evan worked with?</span>
                <span aria-hidden="true" className="kt-accordion-indicator text-white">
                <i className="icon-Plus kt-accordion-indicator-on"></i>
                  <i className="icon-Minus kt-accordion-indicator-off"></i>  
                </span>
              </button>
              <div
                className="kt-accordion-content border-0 hidden"
                aria-labelledby="accordion_toggle_1"
                id="accordion_content_1"
              >
                <div className="kt-accordion-wrapper px-3! pb-3! pt-0! text-white/50 text-sm">Evan Nicolini is a 28-year-old multi–7-figure entrepreneur, founder of Custom Esignature™ and Nicolini Productions, dedicated to turning ideas into impactful tools. At 26, he built Custom Esignature™, one of the most notable email software tools on the market, transforming how businesses connect through email. He has a track record of helping companies grow from zero to $1M and beyond.</div>
              </div>
            </div>

            <div data-kt-accordion-item="true" className="kt-accordion-item border-white/20 rounded-lg">
              <button
                id="accordion_toggle_1"
                data-kt-accordion-toggle="true"
                aria-controls="accordion_content_1"
                className="kt-accordion-toggle p-3 text-base!"
              >
                <span className="kt-accordion-title text-white text-base!">What’s Evan’s background outside of business?</span>
                <span aria-hidden="true" className="kt-accordion-indicator text-white">
                <i className="icon-Plus kt-accordion-indicator-on"></i>
                  <i className="icon-Minus kt-accordion-indicator-off"></i>  
                </span>
              </button>
              <div
                className="kt-accordion-content border-0 hidden"
                aria-labelledby="accordion_toggle_1"
                id="accordion_content_1"
              >
                <div className="kt-accordion-wrapper px-3! pb-3! pt-0! text-white/50 text-sm">Evan Nicolini is a 28-year-old multi–7-figure entrepreneur, founder of Custom Esignature™ and Nicolini Productions, dedicated to turning ideas into impactful tools. At 26, he built Custom Esignature™, one of the most notable email software tools on the market, transforming how businesses connect through email. He has a track record of helping companies grow from zero to $1M and beyond.</div>
              </div>
            </div>

            <div data-kt-accordion-item="true" className="kt-accordion-item border-white/20 rounded-lg">
              <button
                id="accordion_toggle_1"
                data-kt-accordion-toggle="true"
                aria-controls="accordion_content_1"
                className="kt-accordion-toggle p-3 text-base!"
              >
                <span className="kt-accordion-title text-white text-base!">What drives Evan today?</span>
                <span aria-hidden="true" className="kt-accordion-indicator text-white">
                <i className="icon-Plus kt-accordion-indicator-on"></i>
                  <i className="icon-Minus kt-accordion-indicator-off"></i>  
                </span>
              </button>
              <div
                className="kt-accordion-content border-0 hidden"
                aria-labelledby="accordion_toggle_1"
                id="accordion_content_1"
              >
                <div className="kt-accordion-wrapper px-3! pb-3! pt-0! text-white/50 text-sm">Evan Nicolini is a 28-year-old multi–7-figure entrepreneur, founder of Custom Esignature™ and Nicolini Productions, dedicated to turning ideas into impactful tools. At 26, he built Custom Esignature™, one of the most notable email software tools on the market, transforming how businesses connect through email. He has a track record of helping companies grow from zero to $1M and beyond.</div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-white text-xs hidden p-4">
          <div className=" text-white/80 mb-5 text-base">My CV</div>
          <div className="kt-card text-white">
            <div className="kt-card-content flex items-start gap-4">
              <div
                className="rounded-[10px] bg-white/10 flex-none flex items-center justify-center size-[154px] overflow-hidden">
                <Image width={100} height={100} alt="" className="size-full object-cover" src="/images/img.jpg" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm">Download my CV for a detailed view of my experience and skills.</p>
                <p className="text-white/80 text-xs flex items-center gap-1 mt-2">
                  <span>PDF</span>
                  <span className="size-1 rounded-full bg-white/80"></span>
                  <span>120 kb</span>
                </p>
                <div className="text-left mt-4">
                  <span className="h-11! px-4 w-auto! btn btn-white inline-flex!">Download CV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-xs hidden p-4">
          <div className="text-white/80 mb-5 text-base">Join Our Community</div>
          <div className="kt-card text-white">
            <div className="kt-card-content flex items-center gap-6">
              <div
                className="rounded-[10px] bg-white/10 flex-none flex items-center justify-center overflow-hidden">
                <Image width={100} height={100} alt="" className="size-full object-cover" src="/images/logoblack.png" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm">Elnk Comunity</p>
                <p className="text-xs text-white/80">community.elnk.ai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5 hidden">
          <p className="text-base text-white/80">Experience</p>
          <div className="flex gap-4" style={{
          background: "url('/img/experience-bg.png') no-repeat center top",
        }}>
            <div className="flex gap-2 flex-col *:rounded-lg *:text-sm *:text-white/80 *:w-25 *:h-[34px] *:flex *:items-center 
            *:justify-center *:gap-2 *:border-[0.5px] *:border-white/10 *:cursor-pointer *:backdrop-blur-[30px] *:bg-white/2 *:[.present]:bg-[#FFFFFF1A]">
              <button className="present relative">
                <span className="text-xs font-light">
                Present</span>2025
                <Image alt="" width={100} height={100} src="/images/animation-arrow.png" className="absolute top-1 -left-1" />
              </button>
              <button>2024</button>
              <button>2023</button>
              <button>2022</button>
              <button>2021</button>
              <button>2020</button>
              <button>2019</button>
              <button>2018</button>
              <button>2017</button>
            </div>
            <div className="flex flex-1 flex-col gap-2.5">
              <div className="bg-white/3 backdrop-blur-[65px] p-5 relative border border-white/10 w-full rounded-[14px]">
                <div className="absolute top-[2px] right-[2px] backdrop-blur-[30px] border-[0.5px] border-white/10 px-3 rounded-bl-lg rounded-tr-lg">
                    <span className="text-sm text-white/50">Full-time</span>
                </div>

                <div className="flex items-center justify-between mt-2 gap-4">
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex items-center gap-4">
                          <div className="size-10 bg-black rounded-lg flex items-center justify-center border border-white/10">
                              <Image alt="" width={100} height={100} src="/images/founder-logo1.svg" />
                          </div>
                          <div className="text-sm">
                              <h3 className="text-white/80">Founder</h3>
                              <p className="text-white/50">CustomEsignature</p>
                          </div>
                      </div>
                      <div className="flex justify-between items-center gap-4 text-xs text-white/80">
                          <span>Jan 2021 - Present</span>
                          <span className="text-white/50">4 y. 9 m.</span>
                      </div>
                    </div>
                    <a href="#" className="text-white/20 size-4">
                        <i className="icon-Chevron-Right"></i>
                    </a>
                </div>
                
              </div>
              <div className="bg-white/3 backdrop-blur-[65px] p-5 relative border border-white/10 w-full rounded-[14px]">
                <div className="absolute top-[2px] right-[2px] backdrop-blur-[30px] border-[0.5px] border-white/10 px-3 rounded-bl-lg rounded-tr-lg">
                    <span className="text-sm text-white/50">Full-time</span>
                </div>

                <div className="flex items-center justify-between mt-2 gap-4">
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex items-center gap-4">
                          <div className="size-10 bg-white rounded-lg flex items-center justify-center border border-white/10">
                              <Image alt="" width={100} height={100} src="/images/founder-logo2.svg" />
                          </div>
                          <div className="text-sm">
                              <h3 className="text-white/80">Founder</h3>
                              <p className="text-white/50">Nicolini Productions</p>
                          </div>
                      </div>
                      <div className="flex justify-between items-center gap-4 text-xs text-white/80">
                          <span>Dec 2015 - Present</span>
                          <span className="text-white/50">9 y. 10 m.</span>
                      </div>
                    </div>
                    <a href="#" className="text-white/20 size-4">
                        <i className="icon-Chevron-Right"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5 hidden">
          <p className="text-base text-white/80">Feature Video</p>
          <div className="flex flex-wrap rounded-2xl overflow-hidden border border-white/10">
            <iframe width="410" height="280" src="https://www.youtube.com/embed/yAoLSRbwxL8?si=yY-qvsIaxQ5wQ8mw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5 hidden">
          <p className="text-base text-white/80">Workshops & Webinars</p>
          <div className="bg-white/3 backdrop-blur-[65px] flex flex-col gap-6 p-6 border border-white/10 w-full rounded-2xl">
            <div className="rounded-lg overflow-hidden">
              <Image width={100} height={100} alt="" className="w-full" src="/images/webinars.jpg" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium text-white">Motion Design Meetup San Diego</h3>
              <div className="flex gap-3">
                  <div className="btn text-white/80 text-xs w-auto! px-3 h-8!">
                      <i className="icon-Calendar mr-1"></i> 14 March 2026
                  </div>
                  <div className="btn text-white/80 text-xs w-auto! px-3 h-8!">
                      <i className="icon-Clock mr-1"></i> 17:00–20:00
                  </div>
              </div>
              <p className="text-white/50 text-sm">
                  Join fellow creatives in San Diego for an evening of design talks, networking, and hands-on <span className="text-white bg-black cursor-pointer px-[2px]">... Read more</span>
              </p>
            </div>
            <span className="block w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></span>
            <div className="flex flex-col gap-3">
                <a href="#" className="w-full h-11 font-normal rounded-2xl border border-white/10 text-white/80 bg-white/10 text-xs flex items-center justify-center gap-2">
                    <i className="icon-Calendar"></i>
                    Add to Calendar
                </a>
                <a href="#" className="w-full h-11 font-normal rounded-2xl border border-white/10 text-white/80 bg-white/10 text-xs flex items-center justify-center gap-2">
                    RSVP
                </a>
            </div>
            <span className="block w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></span>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/70 text-xs">
                    <i className="icon-Location"></i> San Diego Design District, CA
                </div>
                <a href="#" className="w-[150px] h-11 font-normal rounded-2xl border border-white/10 text-white/80 bg-white/10 text-xs flex items-center justify-center gap-2">
                      View on Map <i className="icon-Share"></i>
                </a>
            </div>          
          </div>
        </div>

        <div className="p-4 flex flex-col gap-5 hidden">
          <p className="text-base text-white/80">Visit Our Office</p>
          <div className="rounded-xl overflow-hidden">
            <Image alt="" width={100} height={100} src="/images/map.jpg" />
          </div>
        </div>
      </div>
      <div className="h-[150px] sticky bottom-0 w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_0%,#000_100%)] z-9"></div>
      <div className={`savedInfo  text-white outline  bottom-5 fixed w-full max-w-[440px] left-auto right-auto -outline-offset-1 outline-white/10 h-14 px-4 gap-2 flex items-center rounded-2xl backdrop-blur-[30px] cursor-pointer z-21 ${isSavedVisible ? "opacity-100 transition-all translate-y-0 transition-all" : "opacity-0 pointer-events-none translate-y-[200%] transition-all"}`}>
        <i className="icon-Check-Circle"></i> Contacts was saved.</div>

      <div className="sticky bottom-5 z-10 flex justify-end px-4">
        <Skinybutton/>
      </div>

      <SaveContactBox isOpen={isContactBoxOpen}
        onClose={() => setIsContactBoxOpen(false)}
        onSaveContactToggle={() =>
          setIsSaveContactOpen(!isSaveContactOpen)
        } />

       <SaveContact
        onSuccess={showSaved}
        isOpen={isSaveContactOpen}
        onClose={() => setIsSaveContactOpen(false)}
        
      />
     
    </>
  );
}