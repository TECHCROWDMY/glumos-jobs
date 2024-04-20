import Header from "./Header"

const Hero = () => {

  
  return (
    <div className="bg-white">


      <div className="relative isolate px-6 lg:px-8 bg-[#0052CC]">
        <Header />
        <div className="mx-auto max-w-2xl py-16 md:py-16">
          <div className="text-center">
            <h1 className=" text-white text-4xl font-bold tracking-tight sm:text-6xl font-circularStdMedium">
              Join the best tech startups in the industry!
            </h1>
            <p className="text-white/[0.9] mt-6 text-[13px] font-circularStdMedium ">
            Get remote software jobs with better compensation and career growth.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero