import React from 'react'

const About = () => {
  return (
    <div className='h-auto w-full px-8'>
      <section className='mb-60'>
        <h1 className='text-[16rem] font-semibold tracking-wide'>Intro</h1>
        <div className='flex items-end justify-between gap-20'>
          <p className='text-xl font-semibold w-1/4'>
            Having started as a graphic designer and transitioning into a creative developer gives me a unique perspective and understanding  in merging both visual aesthetics and modern technology.
          </p>
          <h3 className='text-8xl font-semibold w-3/4'>
            <span className='ml-24'>Creative</span> developer with a design background, crafting immersive digital experiences that combine creativity and functionality.
          </h3>        
        </div>
        {/* <h3 className='text-4xl text-center'>
          We live our best lives excelling at design and branding,
          advertising, web development and everything we touch</h3> */}
      </section>

      <section className=''>
        <div className='flex items-start justify-between gap-20'>
          <p className='text-xl font-semibold w-1/4'>
            What i do
          </p>
          <div className='w-3/4 grid grid-cols-4 gap-10'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-4xl font-semibold'>
                Web Development
              </h4>
              <p className='text-base font-semibold'>
                A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <h4 className='text-4xl font-semibold'>
                UI/UX Design
              </h4>
              <p className='text-base font-semibold'>
                Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <h4 className='text-4xl font-semibold'>
                Social Media
              </h4>
              <p className='text-base font-semibold'>
                Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <h4 className='text-4xl font-semibold'>
                Social Media
              </h4>
              <p className='text-base font-semibold'>
                Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.
              </p>
            </div>

          </div>        
        </div>
      </section>
    </div>
  )
}

export default About