import React from "react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  icon: keyof typeof icons;
  className?: string;
}

export default function Icon(props: IconProps) {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        className={twMerge("fill-current w-[1em] h-[1em]", props.className)}
      >
        {icons[props.icon]}
      </svg>
    </span>
  );
}

const icons = {
  dark_mode: (
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
  ),
  light_mode: (
    <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
  ),
  open_in_new: (
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
  ),
  close: (
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  ),
  expand_more: (
    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
  ),
  bookmark: (
    <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
  ),
  github: (
    <path d="M 476.32 -897.598 C 157.362 -897.598 -41.949 -552.334 117.549 -276.131 C 168.173 -188.429 249.208 -122.309 345.28 -90.244 C 365.994 -86.639 373.785 -99.068 373.785 -109.924 C 373.785 -119.782 373.244 -152.387 373.244 -187.104 C 269.177 -167.922 242.248 -212.459 233.962 -235.783 C 224.765 -258.444 210.182 -278.537 191.499 -294.278 C 176.997 -302.069 156.284 -321.208 190.961 -321.746 C 217.848 -318.803 241.628 -302.98 254.678 -279.281 C 278.497 -236.445 332.563 -221.158 375.315 -245.103 C 377.097 -266.149 386.501 -285.867 401.749 -300.492 C 309.568 -310.85 213.248 -346.603 213.248 -505.066 C 212.668 -546.246 227.831 -586.06 255.713 -616.383 C 243.036 -652.177 244.527 -691.451 259.854 -726.169 C 259.854 -726.169 294.528 -737.063 373.785 -683.705 C 441.561 -702.349 513.109 -702.349 580.925 -683.705 C 660.137 -737.561 694.852 -726.169 694.852 -726.169 C 710.182 -691.451 711.631 -652.177 698.996 -616.383 C 726.917 -586.143 742.122 -546.246 741.461 -505.066 C 741.461 -346.065 644.6 -310.85 552.422 -300.492 C 572.433 -280.235 582.623 -252.271 580.387 -223.852 C 580.387 -168.462 579.889 -123.925 579.889 -109.924 C 579.889 -99.068 587.637 -86.101 608.35 -90.244 C 910.776 -192.075 989.533 -583.075 750.159 -794.069 C 674.51 -860.729 577.156 -897.558 476.32 -897.598 Z" />
  ),
  vitess: (
    <path d="M28.192 -873.613 L470.225 -60.074 L918.915 -873.049 L742.798 -872.613 L473.235 -380.914 L205.645 -876.22" />
  ),
} as const;
