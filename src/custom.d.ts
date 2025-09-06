declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module 'react/jsx-runtime' {
  export * from 'react';
}

// Minimal JSX namespace so TSX intrinsic elements like <div> are recognized
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // allow any intrinsic element with any props to avoid implicit any errors
      [elemName: string]: any;
    }
  }
}

// Allow imports that include package versions like 'lucide-react@0.487.0'
declare module '*@*' {
  const content: any;
  export default content;
}

// Figma-style asset imports used in the project
declare module 'figma:*' {
  const src: string;
  export default src;
}

// react-dom client entry
declare module 'react-dom/client' {
  import type React from 'react';
  export function createRoot(container: Element | null): {
    render(element: React.ReactElement): void;
  };
}

// Specific import used by HeroSection that resolves to a generated .tsx file
declare module '../imports/svg-k05rk' {
  export const imgVector1: any;
  export const imgVector2: any;
  export const imgVector3: any;
  export const imgStar: any;
  export const imgIconOutlinedDirectionsStraightArrowsUpRight: any;
}
