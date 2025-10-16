import React from 'react';

interface CoffeeBeansProps {
  className?: string;
  style?: React.CSSProperties;
}

const CoffeeBeans: React.FC<CoffeeBeansProps> = ({ className, style }) => (
    <div className={className} style={style}>
        <div className="animate-beans w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path transform="rotate(20 30 35)" d="M20,35 a10,15 0 1,1 20,0 a10,15 0 1,1 -20,0 M29,29 a15,15 0 0,0 2,12" stroke="#67b96a" strokeWidth="1.5" />
                <path transform="rotate(-15 65 30)" d="M55,30 a10,15 0 1,1 20,0 a10,15 0 1,1 -20,0 M64,24 a15,15 0 0,0 2,12" stroke="#67b96a" strokeWidth="1.5" />
                <path transform="rotate(5 50 65)" d="M40,65 a10,15 0 1,1 20,0 a10,15 0 1,1 -20,0 M49,59 a15,15 0 0,0 2,12" stroke="#67b96a" strokeWidth="1.5" />
            </svg>
        </div>
    </div>
);

export default CoffeeBeans;
