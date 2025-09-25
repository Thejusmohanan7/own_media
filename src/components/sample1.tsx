import React from 'react';

export default function WeddingPhotography() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      {/* Hero Section with Parallax Background - FIXED */}
      <header 
        className="relative bg-center bg-cover bg-no-repeat bg-fixed flex items-center justify-center h-screen pb-12 overflow-hidden"
        style={{ backgroundImage: "url('/parallax1.jpg')" }}
      >
        {/* Added overlay container to prevent layout shift */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 bg-white/70 hover:bg-white transition duration-300 shadow-xl rounded-xl p-4 text-center md:p-8 mx-4">
          <p className="italic text-sm text-[#333333]">Capturing Your Special Moments</p>
          <h1 className="text-5xl uppercase font-serif text-[#333333] mt-2">Eternal Memories</h1>
          <p className="text-lg text-[#333333] mt-4">Wedding Photography & Videography</p>
          <button className="mt-6 bg-[#C1A35F] hover:bg-[#B09555] text-white px-6 py-2 rounded-full transition duration-300">
            View Our Work
          </button>
        </div>
      </header>

      {/* Rest of the code remains exactly the same */}
     <div className="leading-normal mx-auto py-16 px-4 max-w-xl">
  <h2 className="text-3xl font-serif text-center text-[#333333] mb-8">Preserving Your Wedding Moments</h2>
  <p className="mb-6 text-lg text-[#333333]">
    Your wedding day is filled with fleeting moments, emotions, and memories you’ll want to treasure forever. 
    We specialize in documenting those authentic connections — the laughter, the tears, and the joy — in a way 
    that feels natural and timeless.
  </p>
  <p className="mb-6 text-lg text-[#333333]">
    With a blend of creativity and storytelling, our photography captures more than just images; it tells the 
    story of your love, your family, and your celebration. Every photograph is crafted to reflect the true 
    essence of your day.
  </p>
  <p className="mb-6 text-lg text-[#333333]">
    Explore our portfolio and envision how we can turn your once-in-a-lifetime moments into a collection of 
    memories you’ll cherish for generations.
  </p>
</div>


      {/* Second Parallax Section */}
      <div 
        className="bg-center bg-cover bg-no-repeat bg-fixed container flex items-center justify-center h-screen mx-auto"
        style={{ backgroundImage: "url('/parallax2.jpg')" }}
      >
        <blockquote className="bg-white/70 hover:bg-white transition duration-300 shadow-xl rounded-xl mx-4 p-6 text-center text-[#333333] md:p-8">
          <p className="font-serif italic text-2xl text-[#333333]">
            &ldquo;A great photograph is one that fully expresses what one feels, in the deepest sense, about what is being photographed.&rdquo;
          </p>
          <p className="mt-4 font-semibold text-[#C1A35F]">- Ansel Adams</p>
        </blockquote>
      </div>

      {/* Features Section */}
      <div className="leading-normal mx-auto py-16 px-4 max-w-4xl">
        <h2 className="text-3xl font-serif text-center text-[#333333] mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-serif text-[#333333] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#C1A35F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Artistic Approach
            </h3>
            <p className="text-[#333333]">
              We create images that are not just photographs but works of art, blending technical excellence with creative vision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-serif text-[#333333] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#C1A35F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Attention to Detail
            </h3>
            <p className="text-[#333333]">
              From the grand moments to the subtle glances, we capture the complete story of your special day.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-serif text-[#333333] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#C1A35F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Natural Storytelling
            </h3>
            <p className="text-[#333333]">
              We specialize in candid photography that captures authentic emotions and tells your unique love story.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-serif text-[#333333] mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#C1A35F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Premium Quality
            </h3>
            <p className="text-[#333333]">
              Using the finest equipment and materials, we deliver products that will last for generations.
            </p>
          </div>
        </div>
      </div>

      {/* Third Parallax Section */}
      <div 
        className="bg-center bg-cover bg-no-repeat bg-fixed container flex items-center justify-center h-screen mx-auto"
        style={{ backgroundImage: "url('/parallax3.jpg')" }}
      >
        <div className="bg-white/90 hover:bg-white transition duration-300 shadow-xl rounded-xl mx-4 p-8 text-center">
          <h2 className="text-3xl font-serif text-[#333333] mb-4">Ready to Capture Your Day?</h2>
          <p className="text-[#333333] mb-6">Let&apos;s discuss how we can tell your unique love story through our lens.</p>
          <button className="bg-[#C1A35F] hover:bg-[#B09555] text-white px-8 py-3 rounded-full transition duration-300 font-medium">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="leading-normal mx-auto py-16 px-4 max-w-4xl">
        <h2 className="text-3xl font-serif text-center text-[#333333] mb-12">Kind Words From Couples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#F5F3EF]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center text-[#333333] font-serif text-xl">
                J&M
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-[#333333]">James & Maria</h4>
                <p className="text-sm text-[#C1A35F]">June Wedding</p>
              </div>
            </div>
            <p className="text-[#333333] italic">
              &quot;The photos took our breath away! They captured every emotion and special moment perfectly. 
              We&quot;ll treasure these memories forever.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-[#F5F3EF]">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center text-[#333333] font-serif text-xl">
                R&S
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-[#333333]">Robert & Sarah</h4>
                <p className="text-sm text-[#C1A35F]">Destination Wedding</p>
              </div>
            </div>
            <p className="text-[#333333] italic">
              &quot;Working with Eternal Memories was the best decision we made for our wedding. The photos are 
              artistic, romantic, and truly us.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}