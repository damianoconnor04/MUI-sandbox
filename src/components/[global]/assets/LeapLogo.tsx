import React from 'react';

interface SvgProps {
 fillColor?: string;
}

const LeapLogo: React.FC<SvgProps> = ({ fillColor }) => (
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 477 180" xmlSpace="preserve">
   <g>
     <g>
       <path fill={fillColor} d="M473,175.7H4V4.3h469V175.7z M22.3,157.4h432.5V22.6H22.3V157.4z"/>
     </g>
     <g>
       <g>
         <path fill={fillColor} d="M51.2,40.5H76v76.9h44.4v22.2H51.2V40.5z"/>
       </g>
       <g>
         <path fill={fillColor} d="M142.1,40.5H218v20.7h-51.1v17.4h46.7v20h-46.7v18.9h52.4v22.2h-77.2V40.5z"/>
       </g>
       <g>
         <path fill={fillColor} d="M268.8,40.5H294l35.6,99.1h-25.9l-5.9-17.8h-33.2l-6,17.8h-25.5L268.8,40.5z M270.4,102.7H292L281.4,68h-0.3
           L270.4,102.7z"/>
       </g>
       <g>
         <path fill={fillColor} d="M346.2,40.5h45.2c17.7,0,34.4,8.5,34.4,31.9c0,24.6-13.5,34.2-34.4,34.2H371v33h-24.8V40.5z M371,86.6h16.7
           c7.7,0,13.3-3.3,13.3-12.4c0-9.3-5.7-13.1-13.3-13.1H371V86.6z"/>
       </g>
     </g>
   </g>
 </svg>
);

export default LeapLogo;