import React from 'react'

const About = () => {
  return (
    <section className='h-screen w-full px-8'>
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
  )
}

export default About