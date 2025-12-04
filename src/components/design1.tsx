// app/components/design1.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Design1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !hoverRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const centerHover = hoverRef.current;
    const h = container.offsetHeight;
    const w = container.offsetWidth;
    const cw = w;
    const ch = h;
    const maxorbit = 255;
    const centery = ch / 2;
    const centerx = cw / 2;

    const startTime = new Date().getTime();
    let currentTime = 0;

    const stars: any[] = [];
    let collapse = false;
    let expanse = false;
    let returning = false;

    const context = canvas.getContext("2d");
    if (!context) return; // Early return if context is null

    canvas.width = cw;
    canvas.height = ch;

    context.globalCompositeOperation = "multiply";

    function setDPI(canvas: HTMLCanvasElement, dpi: number) {
      if (!canvas.style.width)
        canvas.style.width = canvas.width + 'px';
      if (!canvas.style.height)
        canvas.style.height = canvas.height + 'px';

      const scaleFactor = dpi / 96;
      canvas.width = Math.ceil(canvas.width * scaleFactor);
      canvas.height = Math.ceil(canvas.height * scaleFactor);
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(scaleFactor, scaleFactor);
      }
    }

    function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
      const radians = angle;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
    }

    setDPI(canvas, 192);

    class Star {
      orbital: number;
      x: number;
      y: number;
      yOrigin: number;
      speed: number;
      rotation: number;
      startRotation: number;
      id: number;
      collapseBonus: number;
      color: string;
      hoverPos: number;
      expansePos: number;
      prevR: number;
      prevX: number;
      prevY: number;
      originalY: number;

      constructor() {
        const rands = [];
        rands.push(Math.random() * (maxorbit / 2) + 1);
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);

        this.orbital = (rands.reduce((p, c) => p + c, 0) / rands.length);
        
        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = centery + this.orbital;

        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
        this.rotation = 0;
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;

        this.id = stars.length;

        this.collapseBonus = this.orbital - (maxorbit * 0.7);
        if (this.collapseBonus < 0) {
          this.collapseBonus = 0;
        }

        // Changed from white to black particles
        this.color = 'rgba(0,0,0,' + (1 - ((this.orbital) / 255)) + ')';
        this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus;
        this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);

        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
        this.originalY = this.yOrigin;

        stars.push(this);
      }

      draw() {
        if (!context) return; // Added null check for context

        if (!expanse && !returning) {
          this.rotation = this.startRotation + (currentTime * this.speed);
          if (!collapse) {
            if (this.y > this.yOrigin) {
              this.y -= 2.5;
            }
            if (this.y < this.yOrigin - 4) {
              this.y += (this.yOrigin - this.y) / 10;
            }
          } else {
            if (this.y > this.hoverPos) {
              this.y -= (this.hoverPos - this.y) / -5;
            }
            if (this.y < this.hoverPos - 4) {
              this.y += 2.5;
            }
          }
        } else if (expanse && !returning) {
          this.rotation = this.startRotation + (currentTime * (this.speed / 2));
          if (this.y > this.expansePos) {
            this.y -= Math.floor(this.expansePos - this.y) / -80;
          }
        } else if (returning) {
          this.rotation = this.startRotation + (currentTime * this.speed);
          if (Math.abs(this.y - this.originalY) > 2) {
            this.y += (this.originalY - this.y) / 50;
          } else {
            this.y = this.originalY;
            this.yOrigin = this.originalY;
          }
        }

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();

        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }

    // Event handlers
    const handleClick = () => {
      collapse = false;
      expanse = true;
      returning = false;
      setIsOpen(true);
      
      setTimeout(() => {
        expanse = false;
        returning = true;
        
        setTimeout(() => {
          returning = false;
          setIsOpen(false);
        }, 8000);
      }, 8000);
    };

    const handleMouseOver = () => {
      if (!expanse) {
        collapse = true;
      }
    };

    const handleMouseOut = () => {
      if (!expanse) {
        collapse = false;
      }
    };

    centerHover.addEventListener('click', handleClick);
    centerHover.addEventListener('mouseover', handleMouseOver);
    centerHover.addEventListener('mouseout', handleMouseOut);

    function loop() {
      if (!context) return; // Added null check for context

      const now = new Date().getTime();
      currentTime = (now - startTime) / 50;

      // Changed from dark to white background with lighter fade
      context.fillStyle = 'rgba(255,255,255,0.2)';
      context.fillRect(0, 0, cw, ch);

      for (let i = 0; i < stars.length; i++) {
        if (stars[i] !== undefined) {
          stars[i].draw();
        }
      }

      animationRef.current = requestAnimationFrame(loop);
    }

    function init() {
      if (!context) return; // Added null check for context
      
      // Changed from dark to white initial clear
      context.fillStyle = 'rgba(255,255,255,1)';
      context.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 2500; i++) {
        new Star();
      }
      loop();
    }

    init();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      centerHover.removeEventListener('click', handleClick);
      centerHover.removeEventListener('mouseover', handleMouseOver);
      centerHover.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div style={{ 
      height: '100vh',
      width: '100%',
      backgroundColor: 'white',
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <div 
        ref={containerRef}
        id="blackhole"
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex'
        }}
      >
        <div 
          ref={hoverRef}
          className={`centerHover ${isOpen ? 'open' : ''}`}
          style={{
            width: '255px',
            height: '255px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginTop: '-128px',
            marginLeft: '-128px',
            zIndex: 2,
            cursor: 'pointer',
            lineHeight: '255px',
            textAlign: 'center',
            transition: 'all 500ms',
            opacity: isOpen ? 0 : 1,
            pointerEvents: isOpen ? 'none' : 'auto'
          }}
        >
          <span style={{
            color: '#999',
            fontFamily: 'serif',
            fontSize: '18px',
            position: 'relative',
            transition: 'all 500ms'
          }}>
            <span style={{
              display: 'inline-block',
              height: '1px',
              width: '16px',
              marginRight: '12px',
              marginBottom: '4px',
              backgroundColor: '#999',
              transition: 'all 500ms'
            }}></span>
            OWN MEDIA
            <span style={{
              display: 'inline-block',
              height: '1px',
              width: '16px',
              marginLeft: '12px',
              marginBottom: '4px',
              backgroundColor: '#999',
              transition: 'all 500ms'
            }}></span>
          </span>
        </div>
        <canvas 
          ref={canvasRef}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            margin: 'auto'
          }}
        />
      </div>

      <style jsx>{`
        .centerHover:hover span {
          color: #333 !important;
        }
        
        .centerHover:hover span > span:first-child {
          background-color: #333 !important;
        }
        
        .centerHover:hover span > span:last-child {
          background-color: #333 !important;
        }
      `}</style>
    </div>
  );
}