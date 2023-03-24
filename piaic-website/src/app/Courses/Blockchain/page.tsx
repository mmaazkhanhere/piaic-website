import React from 'react'

export default function Web3() {
    return (
        <section className="container mx-auto rounded-[30px] bg-[#2E294E] xs:max-w-[520px] md:max-w-[900px] lg:max-w-7xl xs:mt-12 md:mt-16 lg:mt-20 pb-7 p-4">
            <div>
                <h1 className="text-center font-semibold leading-tight xs:text-[18px] md:text-[30px] lg:text-[40px]"><span className="headingSpan">B</span>LOCKCHAIN
                    <span className="headingSpan"> S</span>PECIALIST & <span className="headingSpan"> W</span>EB 3.0 <span className="headingSpan"> D</span>EVELOPER</h1>
                <p className="text-center xs:text-[12px] md:text-[18px] md:leading-6 lg:text-[22px] lg:leading-8">A FIFTEEN-MONTH LONG HYBRID PROGRAMME MAKING PAKISTAN READY FOR THE FUTURE OF WEB </p>
            </div>

            <div className="mt-6">
                <h1 className="text-center font-semibold leading-tight underline xs:text-[18px] md:text-[25px] lg:text-[30px]"><span className="xs:text-[40px] md:text-[55px] lg:text-[60px]">C</span>ORE <span className="xs:text-[40px] md:text-[55px] lg:text-[60px]"> C</span>OURSES</h1>

                <div className="container mx-auto mt-5 flex place-content-center items-center xs:gap-3 md:gap-x-4 lg:gap-x-8">
                    <a href="https://panaverse-sable.vercel.app/Quarter-1" className="hover:bg-white hover:text-black hover:scale-125">
                        <div className="coreCourses container flex">
                            <h1>Fundamental of Object Oriented Programming using JavaScript and TypeScript</h1>
                        </div>
                    </a>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md: h-8 xs:h-5 xs:w-5 md:w-8 lg:h-10 lg:w-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>

                    <a href="https://panaverse-sable.vercel.app/Quarter-2" className="hover:bg-white hover:text-black hover:scale-125">
                        <div className="coreCourses container flex-col pt-3">
                            <h1>Develop customer-facing-plant-scale website, full-stack apps and templates</h1>
                        </div>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md: h-8 xs:h-5 xs:w-5 md:w-8 lg:h-10 lg:w-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>

                    <a href="https://panaverse-sable.vercel.app/Quarter-3" className="hover:bg-white hover:text-black hover:scale-125">
                        <div className="coreCourses container flex">
                            <h1>Build templates, which will be sold on Theme Forest and Panaverse DAO marketplace</h1>
                        </div>
                    </a>
                </div>
            </div>

            <div class="mt-6"> {/*Specialised Courses */}
                <h1 class="text-center font-semibold leading-tight underline xs:text-[18px] md:text-[25px] lg:text-[30px]"><span class="xs:text-[40px] md:text-[55px] lg:text-[60px]">S</span>PECIALISATION <span class="xs:text-[40px] md:text-[55px] lg:text-[60px]"> C</span>OURSES</h1>

                <div class="container mx-auto mt-5 flex place-content-center items-center xs:gap-3 md:gap-x-4 lg:gap-x-8">
                    <a href="https://panaverse-sable.vercel.app/Web3" class="hover:bg-white hover:text-black hover:scale-125">
                        <div class="coreCourses container flex">
                            <h1>Developing Smart Contracts and Planet-Scale Web 3.0 DApps</h1>
                        </div>
                    </a>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md: h-8 xs:h-5 xs:w-5 md:w-8 lg:h-10 lg:w-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>

                    <a href="https://panaverse-sable.vercel.app/Web3" class="hover:bg-white hover:text-black hover:scale-125">
                        <div class="coreCourses container flex">
                            <h1>Developing Planet-Scale Open Virtual and Augmented Metaverse Experience</h1>
                        </div>
                    </a>
                </div>
            </div>
        </section >
    )
}
