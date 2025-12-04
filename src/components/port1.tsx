import React, { CSSProperties, useId } from 'react';

interface SocialLink {
  label: string;
  text: string;
  href?: string;
}

interface Port1Props {
  links?: SocialLink[];
  fontSize?: string;
  translateDistance?: string;
  transitionDuration?: string;
  hoverColor?: string;
  className?: string;
  delayFactor?: number;
}

const Port1: React.FC<Port1Props> = ({
  links = [
    { label: 'own media', text: 'OWN MEDIA', href: '#' },
    { label: 'our wedding narratives', text: 'OUR WEDDING NARRATIVES', href: '#' },
  ],
  fontSize = 'clamp(3rem, 8.5vw + .045rem, 8rem)',
  translateDistance = '-1lh',
  transitionDuration = '3000ms',
  hoverColor = 'rgb(0 132 209)',
  delayFactor = 20,
  className = '',
}) => {
  const componentId = useId().replace(/:/g, '');
  const wrapperClass = `port1-wrapper-${componentId}`;
  const wordClass = `port1-word-${componentId}`;

  // Original cubic-bezier-like easing function
  const easingFunction = 'linear(0, 0.011 0.6%, 0.041 1.2%, 0.173 2.6%, 0.894 7.4%, 1.128 9.3%, 1.271 11.1%, 1.311 12%, 1.333 13%, 1.328 14.4%, 1.286 15.9%, 1.031 21%, 0.95 23%, 0.907 24.7%, 0.888 26.5%, 0.89 27.9%, 0.904 29.4%, 1.034 42.5%, 0.997 49.3%, 0.987 53.3%, 1.004 66.5%, 1)';

  const styles = `
    @import url('https://fonts.bunny.net/css?family=bayon:400');
    
    /* Wrapper */
    .${wrapperClass} {
      font-family: 'Bayon', sans-serif;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem;
      background: transparent;
    }
    
    /* Word/link styling */
    .${wordClass} {
      text-decoration: none;
      text-transform: uppercase;
      margin: 0;
      font-size: ${fontSize};
      font-weight: 700;
      color: inherit;
      line-height: 0.8;
      display: flex;
      overflow: hidden;
      position: relative;
    }
    
    .${wordClass}:visited {
      color: inherit;
    }
    
    .${wordClass}::selection {
      background: transparent;
    }
    
    /* Individual letter spans */
    .${wordClass} > span {
      display: inline-block;
      text-shadow: 0 1lh ${hoverColor};
      transition: all ${transitionDuration} ${easingFunction};
      transition-property: transform, translate;
      position: relative;
    }
    
    /* Hover effect - each letter moves with staggered delay */
    .${wordClass}:hover > span {
      transform: translateY(${translateDistance});
    }
    
    /* Apply different delays to each letter for wave effect */
    ${links.flatMap((link, linkIndex) => 
      link.text.split('').map((_, charIndex) => `
        .${wrapperClass} .${wordClass}:nth-child(${linkIndex + 1}) > span:nth-child(${charIndex + 1}) {
          transition-delay: ${charIndex * delayFactor}ms;
        }
      `)
    ).join('')}
  `;

  return (
    <>
      <style>{styles}</style>
      <div className={`${wrapperClass} ${className}`}>
        {links.map((link, linkIndex) => (
          <a
            key={`${link.label}-${linkIndex}`}
            href={link.href || '#'}
            className={wordClass}
            aria-label={link.label}
          >
            {link.text.split('').map((char, charIndex) => (
              <span key={charIndex} aria-hidden="true">
                {char}
              </span>
            ))}
          </a>
        ))}
      </div>
    </>
  );
};

// Alternative version with inline CSS for better performance
export const Port1Wave: React.FC<Port1Props> = ({
  links = [
    { label: 'own media', text: 'OWN MEDIA', href: '#' },
    { label: 'our wedding narratives', text: 'OUR WEDDING NARRATIVES', href: '#' },
  ],
  fontSize = 'clamp(3rem, 8.5vw + .045rem, 8rem)',
  translateDistance = '-1lh',
  transitionDuration = '3000ms',
  hoverColor = 'rgb(0 132 209)',
  delayFactor = 20,
  className = '',
}) => {
  const wrapperStyle: CSSProperties = {
    fontFamily: "'Bayon', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '2rem',
    background: 'transparent',
  };

  const wordStyle: CSSProperties = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    margin: '0',
    fontSize: fontSize,
    fontWeight: 700,
    color: 'inherit',
    lineHeight: '0.8',
    display: 'flex',
    overflow: 'hidden',
  };

  // The original complex easing function
  const easingFunction = 'linear(0, 0.011 0.6%, 0.041 1.2%, 0.173 2.6%, 0.894 7.4%, 1.128 9.3%, 1.271 11.1%, 1.311 12%, 1.333 13%, 1.328 14.4%, 1.286 15.9%, 1.031 21%, 0.95 23%, 0.907 24.7%, 0.888 26.5%, 0.89 27.9%, 0.904 29.4%, 1.034 42.5%, 0.997 49.3%, 0.987 53.3%, 1.004 66.5%, 1)';

  return (
    <div className={`port1-wave-wrapper ${className}`} style={wrapperStyle}>
      <style>
        {`
          @import url('https://fonts.bunny.net/css?family=bayon:400');
          
          .port1-wave-wrapper a span {
            display: inline-block;
            text-shadow: 0 1lh ${hoverColor};
            transition: transform ${transitionDuration} ${easingFunction};
            will-change: transform;
          }
          
          .port1-wave-wrapper a:hover span {
            transform: translateY(${translateDistance});
          }
          
          /* Create the wave effect by applying different delays */
          ${links.flatMap((link, linkIndex) => 
            link.text.split('').map((_, charIndex) => `
              .port1-wave-wrapper a:nth-child(${linkIndex + 1}) span:nth-child(${charIndex + 1}) {
                transition-delay: ${charIndex * delayFactor}ms;
              }
            `)
          ).join('')}
        `}
      </style>
      
      {links.map((link, linkIndex) => (
        <a
          key={`${link.label}-${linkIndex}`}
          href={link.href || '#'}
          aria-label={link.label}
          style={wordStyle}
        >
          {link.text.split('').map((char, charIndex) => (
            <span key={charIndex} aria-hidden="true">
              {char}
            </span>
          ))}
        </a>
      ))}
    </div>
  );
};

// Version that uses CSS custom properties (most similar to original)
export const Port1Original: React.FC<Port1Props> = ({
  links = [
    { label: 'own media', text: 'OWN MEDIA', href: '#' },
    { label: 'our wedding narratives', text: 'OUR WEDDING NARRATIVES', href: '#' },
  ],
  fontSize = 'clamp(3rem, 8.5vw + .045rem, 8rem)',
  translateDistance = '-1lh',
  transitionDuration = '3000ms',
  hoverColor = 'rgb(0 132 209)',
  delayFactor = 20,
  className = '',
}) => {
  const wrapperId = `port1-original-${useId().replace(/:/g, '')}`;

  const cssVariables = {
    '--font-size': fontSize,
    '--translate-distance': translateDistance,
    '--trans-duration': transitionDuration,
    '--text-color-hover': hoverColor,
    '--trans-delay-factor': `${delayFactor}ms`,
    '--trans-timing-function': 'linear(0, 0.011 0.6%, 0.041 1.2%, 0.173 2.6%, 0.894 7.4%, 1.128 9.3%, 1.271 11.1%, 1.311 12%, 1.333 13%, 1.328 14.4%, 1.286 15.9%, 1.031 21%, 0.95 23%, 0.907 24.7%, 0.888 26.5%, 0.89 27.9%, 0.904 29.4%, 1.034 42.5%, 0.997 49.3%, 0.987 53.3%, 1.004 66.5%, 1)',
  } as CSSProperties;

  const styles = `
    @import url('https://fonts.bunny.net/css?family=bayon:400');
    
    #${wrapperId} {
      font-family: 'Bayon', sans-serif;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem;
      background: transparent;
    }
    
    #${wrapperId} .word {
      text-decoration: none;
      text-transform: uppercase;
      margin: 0;
      font-size: var(--font-size);
      font-weight: 700;
      color: inherit;
      line-height: 0.8;
      display: flex;
      overflow: hidden;
    }
    
    #${wrapperId} .word:visited {
      color: inherit;
    }
    
    #${wrapperId} .word::selection {
      background: transparent;
    }
    
    #${wrapperId} .word > span {
      display: inline-block;
      text-shadow: 0 1lh var(--text-color-hover);
      transition: transform var(--trans-duration) var(--trans-timing-function);
      will-change: transform;
    }
    
    #${wrapperId} .word:hover > span {
      transform: translateY(var(--translate-distance));
    }
    
    /* Apply staggered delays using CSS custom property --i */
    #${wrapperId} .word > span {
      --i: 0;
      --trans-delay: calc(var(--i) * var(--trans-delay-factor));
      transition-delay: var(--trans-delay);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div 
        id={wrapperId}
        className={`port1-original ${className}`}
        style={cssVariables}
      >
        {links.map((link, linkIndex) => (
          <a
            key={`${link.label}-${linkIndex}`}
            href={link.href || '#'}
            className="word"
            aria-label={link.label}
          >
            {link.text.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                aria-hidden="true"
                style={{ '--i': charIndex } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </a>
        ))}
      </div>
    </>
  );
};

export default Port1;