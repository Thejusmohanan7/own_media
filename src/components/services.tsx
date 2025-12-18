'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';

gsap.registerPlugin(SplitText);

export default function Services() {
  const collageRef = useRef<HTMLDivElement>(null);
  const hoverBoxRef = useRef<HTMLDivElement>(null);
  const hoverMeRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize animation on mount
  useEffect(() => {
    if (!collageRef.current || !hoverBoxRef.current || !hoverMeRef.current || !letterRef.current) return;

    // Set up loader animation
    const loaders = document.querySelectorAll('.loader');
    gsap.to(loaders, {
      transformOrigin: "left bottom",
      rotate: -100,
      duration: 2,
      ease: "sine.in",
      stagger: {
        each: 0.3,
        from: "end"
      }
    });

    // Set default easing
    gsap.defaults({ ease: "back.out(1.4)" });

    // Helper function to set initial transform
    const setScaleZero = (selector: string, x: string, y: string, rotate: number) => {
      gsap.set(selector, {
        transformOrigin: `${x}% ${y}%`,
        scale: 0,
        rotate: rotate
      });
    };

    // Right pine
    setScaleZero("#right-pine-big", "0", "90", 30);
    gsap.set("#right-pine-small", {
      transformOrigin: "0% 40%",
      scale: 0,
      rotate: 40,
      x: -50,
      y: 10
    });

    // Center branch
    setScaleZero("#center-branch-big", "20", "95", -50);

    // Feathers
    setScaleZero("#feather_2", "120", "0", -60);
    setScaleZero("#feather_4", "140", "50", -70);
    setScaleZero("#feather_3", "120", "140", -100);
    setScaleZero("#feather_5", "80", "120", -110);
    setScaleZero("#feather_1", "70", "100", -100);

    // Bird
    setScaleZero("#bird", "20", "100", -100);

    // Left branches
    setScaleZero("#left-branch", "100", "90", -100);
    setScaleZero("#left-pine", "70", "120", -100);

    // Red berries
    setScaleZero("#red_mi", "0", "50", -150);

    // Leaves
    setScaleZero("#leaf_1", "90", "80", -60);
    setScaleZero("#leaf_2", "30", "10", -50);
    setScaleZero("#leaf_3", "20", "80", -40);
    setScaleZero("#leaf_4", "70", "10", -50);

    // Top branch
    setScaleZero("#top-branch-f1", "100", "60", 30);
    setScaleZero("#top-branch-f2", "50", "70", 30);
    setScaleZero("#top-branch-f3", "70", "25", -30);

    // Text split
    const mySplitText = new SplitText("#letter", { type: "chars" });

    // Set text position
    gsap.set(mySplitText.chars, {
      transformOrigin: "center center",
      yPercent: 100
    });

    // Create main animation timeline
    const AnimationTL = gsap.timeline({ paused: true });

    AnimationTL.to("#center-branch", { rotate: 15, duration: 1.7 })
      .to("#leaf_1", { scale: 1, rotate: 0, duration: 1.1 }, 0.1)
      .to("#leaf_2", { scale: 1, rotate: 0, duration: 1.3 }, 0.2)
      .to("#leaf_3", { scale: 1, rotate: 0, duration: 1.3 }, 0.1)
      .to("#leaf_4", { scale: 1, rotate: 0, duration: 1.2 }, 0.1)
      .to("#feather_2", { scale: 1, rotate: 0, duration: 1.2 }, 0.2)
      .to("#feather_4", { scale: 1, rotate: 0, duration: 1.4 }, 0.4)
      .to("#feather_3", { scale: 1, rotate: 0, duration: 1.2 }, 0.3)
      .to("#feather_5", { scale: 1, rotate: 0, duration: 1.2 }, 0.4)
      .to("#feather_1", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
      .to("#red_mi", { scale: 1, rotate: 0, duration: 1.9 }, 0.6)
      .to("#left-branch", { scale: 1, rotate: 0, duration: 1.5 }, 0.5)
      .to("#left-pine", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
      .to("#center-branch-big", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
      .to("#right-pine-big", { scale: 1, rotate: 0, duration: 1.3 }, 0.5)
      .to("#right-pine-small", { scale: 1, rotate: 0, x: 0, y: 0, duration: 1.1 }, 0.85)
      .to("#bird", { scale: 1, rotate: 0, duration: 1.6 }, 0.5)
      .to("#top-branch-cover", { scaleX: 0, transformOrigin: "left", duration: 2 }, 0.5)
      .to("#top-branch-f3", { scale: 1, rotate: 0, duration: 1.5 }, 0.9)
      .to("#top-branch-f2", { scale: 1, rotate: 0, duration: 1.7 }, 1.2)
      .to("#top-branch-f1", { scale: 1, rotate: 0, duration: 1.7 }, 1.4)
      .to(
        mySplitText.chars,
        {
          duration: 1.1,
          yPercent: 0,
          stagger: {
            each: 0.1
          }
        },
        0.5
      );

    timelineRef.current = AnimationTL;

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      mySplitText.revert();
    };
  }, []);

  // Handle hover events
  const handleMouseEnter = () => {
    if (timelineRef.current && hoverMeRef.current) {
      timelineRef.current.play();
      hoverMeRef.current.style.display = 'none';
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current && hoverMeRef.current) {
      timelineRef.current.reverse();
      hoverMeRef.current.style.display = 'block';
    }
  };

  // CSS variables
  const size = 150;
  const unit = `calc((${size} / 1366) * 1vmin)`;
  const background = '#F5F3EF';

  return (
    <section className="relative w-full min-h- overflow-hidden flex justify-center items-center bg-[#F5F3EF] -top-16">
      {/* Loaders */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          className="loader absolute top-0 left-0 w-[200%] h-full z-[9999]"
          style={{ 
            background: `hsl(0, 0%, ${94 - (i * 6)}%)`,
            backgroundColor: `color-mix(in hsl, #F5F3EF, black ${i * 6}%)`
          }}
        />
      ))}

      {/* Collage Container */}
      <div 
        ref={collageRef}
        className="collage-container relative"
        style={{ 
          minWidth: `calc(1366 * ${unit})`,
          height: `calc(768 * ${unit})`,
          '--unit': unit,
          '--background': background,
        } as React.CSSProperties}
      >
        <div id="collage" className="w-full">
          <div ref={hoverMeRef} id="hoverme" className="absolute italic font-serif text-[#505050] animate-pulse">
            Hover me
            <span className="absolute top-1/2 -left-[100%] w-[calc(40*var(--unit))] h-[calc(1*var(--unit))] bg-[#505050]" />
          </div>

          {/* Top Branch */}
          <div 
            id="top-branch-f1" 
            className="absolute"
            style={{ 
              top: '17.5%', 
              left: '50.5%',
              width: `calc(60 * ${unit})`,
              height: `auto`
            }}
          >
            <Image
              src="https://i.postimg.cc/y8F2yG3P/top-branch-f1.png"
              alt=""
              width={60}
              height={60}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            className="top-branch-container absolute"
            style={{ 
              width: `calc(540 * ${unit})`,
              height: `calc(200 * ${unit})`,
              top: '4.5%',
              left: '34.5%'
            }}
          >
            <div 
              id="top-branch-branch" 
              className="absolute"
              style={{ width: `calc(540 * ${unit})` }}
            >
              <Image
                src="https://i.postimg.cc/xTNwc80B/top-branch-branch.png"
                alt=""
                width={540}
                height={200}
                style={{ width: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <div 
              id="top-branch-cover" 
              className="absolute w-full h-full"
              style={{ background: background }}
            />
          </div>
          <div 
            id="top-branch-f2" 
            className="absolute"
            style={{ 
              top: '19.5%', 
              left: '58.5%',
              width: `calc(73 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/K8XdLbjj/top-branch-f2.png"
              alt=""
              width={73}
              height={73}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="top-branch-f3" 
            className="absolute"
            style={{ 
              top: '22.5%', 
              left: '62.1%',
              width: `calc(73 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/MG54hjDf/top-branch-f3.png"
              alt=""
              width={73}
              height={73}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Feathers */}
          <div 
            id="feather_2" 
            className="absolute"
            style={{ 
              top: '62%', 
              left: '24.5%',
              width: `calc(208 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/T1svBWTJ/feather-2.png"
              alt=""
              width={208}
              height={208}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="feather_3" 
            className="absolute"
            style={{ 
              top: '22%', 
              left: '22.5%',
              width: `calc(208 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/qqqdmGH7/feather-3.png"
              alt=""
              width={208}
              height={208}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="feather_4" 
            className="absolute"
            style={{ 
              top: '63%', 
              left: '20.5%',
              width: `calc(208 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/4dBgbSMM/feather-4.png"
              alt=""
              width={208}
              height={208}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="feather_5" 
            className="absolute"
            style={{ 
              top: '16%', 
              left: '30.5%',
              width: `calc(150 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/sDBr7KJ6/feather-5.png"
              alt=""
              width={150}
              height={150}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="feather_1" 
            className="absolute"
            style={{ 
              top: '19%', 
              left: '35%',
              width: `calc(100 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/3rfhkz20/feather-1.png"
              alt=""
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Bird */}
          <div 
            id="bird" 
            className="absolute"
            style={{ 
              top: '24.5%', 
              left: '38.4%',
              width: `calc(590 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/brsK0N1D/bird.png"
              alt=""
              width={590}
              height={590}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Left Side */}
          <div 
            id="left-branch" 
            className="absolute"
            style={{ 
              top: '41.5%', 
              left: '16.5%',
              width: `calc(350 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/QxRrb54X/left-branch.png"
              alt=""
              width={350}
              height={350}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="left-pine" 
            className="absolute"
            style={{ 
              top: '30.5%', 
              left: '11.5%',
              width: `calc(520 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/W4VcRVcC/left-pine.png"
              alt=""
              width={520}
              height={520}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Middle */}
          <div 
            id="red_mi" 
            className="absolute"
            style={{ 
              top: '57%', 
              left: '48%',
              width: `calc(160 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/C1v3ffnp/red-mi.png"
              alt=""
              width={160}
              height={160}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Middle Leaves */}
          <div 
            id="leaf_1" 
            className="absolute"
            style={{ 
              top: '40.5%', 
              left: '31.5%',
              width: `calc(220 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/zv64xZkd/leaf-1.png"
              alt=""
              width={220}
              height={220}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="leaf_2" 
            className="absolute"
            style={{ 
              top: '62.5%', 
              left: '41.5%',
              width: `calc(160 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/jjh0t1s5/leaf-2.png"
              alt=""
              width={160}
              height={160}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="leaf_3" 
            className="absolute"
            style={{ 
              top: '50%', 
              left: '40%',
              width: `calc(260 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/440CfVTz/leaf-3.png"
              alt=""
              width={260}
              height={260}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="leaf_4" 
            className="absolute"
            style={{ 
              top: '56%', 
              left: '35%',
              width: `calc(180 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/rmpbcFnn/leaf-4.png"
              alt=""
              width={180}
              height={180}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Middle Branch */}
          <div 
            id="center-branch" 
            className="absolute"
            style={{ 
              top: '26%', 
              left: '35.5%',
              width: `calc(140 * ${unit})`,
              transformOrigin: '90% bottom',
              transform: 'rotate(20deg)'
            }}
          >
            <Image
              src="https://i.postimg.cc/G2h02j2j/center-branch.png"
              alt=""
              width={140}
              height={140}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="center-branch-big" 
            className="absolute"
            style={{ 
              top: '31%', 
              left: '41%',
              width: `calc(300 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/GpdV7jk1/center-branch-big.png"
              alt=""
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Right Side */}
          <div 
            id="right-pine-big" 
            className="absolute"
            style={{ 
              top: '22.5%', 
              left: '49.5%',
              width: `calc(400 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/vBSKmFCQ/right-pine-big.png"
              alt=""
              width={400}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>
          <div 
            id="right-pine-small" 
            className="absolute"
            style={{ 
              top: '54.5%', 
              left: '63.5%',
              width: `calc(210 * ${unit})`
            }}
          >
            <Image
              src="https://i.postimg.cc/0yD1HQF7/right-pine-small.png"
              alt=""
              width={210}
              height={210}
              style={{ width: '100%', height: 'auto' }}
              unoptimized
            />
          </div>

          {/* Letter */}
          <div 
            id="letter-container" 
            className="absolute top-1/2 left-1/2 w-[200%] text-center overflow-hidden"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div 
              ref={letterRef}
              id="letter" 
              className="w-full text-[#e7dcc5] font-bold font-serif"
              style={{ 
                fontSize: `calc(270 * ${unit})`,
                filter: `drop-shadow(calc(5 * ${unit}) calc(5 * ${unit}) calc(5 * ${unit}) rgba(0, 0, 0, 0.2))`
              }}
            >
              OWN MEDIA
            </div>
          </div>

          {/* Hover Box */}
          <div 
            ref={hoverBoxRef}
            id="hoverBox" 
            className="block absolute z-[999]"
            style={{ 
              top: '25%',
              left: '40%',
              width: `calc(120 * ${unit})`,
              height: `calc(280 * ${unit})`
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .collage-container {
          position: relative;
        }

        #hoverme {
          font-family: 'Playfair Display', serif;
          animation: hoverme 1.3s infinite alternate;
        }

        @keyframes hoverme {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        #letter {
          font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Times New Roman, serif;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .collage-container {
            transform: scale(0.7);
          }
        }

        @media (max-width: 480px) {
          .collage-container {
            transform: scale(0.5);
          }
        }
      `}</style>
    </section>
  );
}