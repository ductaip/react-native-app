declare module '*.png' {
    const value: any;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: any;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: any;
    export default value;
  }
  
  declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export { ReactComponent };
    export default src;
  }
  
  declare module '*.gif' {
    const value: any;
    export default value;
  }
  
  declare module '*.webp' {
    const value: any;
    export default value;
  }
  