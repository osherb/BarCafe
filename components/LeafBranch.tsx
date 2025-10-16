
import React from 'react';

interface LeafBranchProps {
  className?: string;
  style?: React.CSSProperties;
}

const LeafBranch: React.FC<LeafBranchProps> = ({ className, style }) => (
    <div className={className} style={style}>
        <div className="animate-leaves w-full h-full">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="rotate(15 100 100)">
                    <path d="M100,10 C120,50 80,150 100,190" stroke="#F0F0F0" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M101,40 C120,30 145,50 130,65 C120,55 110,45 101,40 Z"/>
                    <path d="M103,80 C125,70 150,90 135,105 C125,95 115,85 103,80 Z"/>
                    <path d="M101,120 C120,110 145,130 130,145 C120,135 110,125 101,120 Z"/>
                    <path d="M99,60 C80,50 55,70 70,85 C80,75 90,65 99,60 Z"/>
                    <path d="M97,100 C75,90 50,110 65,125 C75,115 85,105 97,100 Z"/>
                    <path d="M99,140 C80,130 55,150 70,165 C80,155 90,145 99,140 Z"/>
                </g>
            </svg>
        </div>
    </div>
);

export default LeafBranch;
