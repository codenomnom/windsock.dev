import React from "react";
import type { SVGProps } from "react";

export function WindSockIcon({ svgProps, className, duration = 1 }: { className?: string, duration?: number, svgProps?: SVGProps<SVGSVGElement> }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...svgProps}
      className={className}
    >
      <defs>
        <linearGradient
          id="meteoconsWindsockFill0"
          x1={90}
          x2={206}
          y1={155.6}
          y2={356.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d7dd"></stop>
          <stop offset={0.5} stopColor="#d4d7dd"></stop>
          <stop offset={1} stopColor="#bec1c6"></stop>
        </linearGradient>
        <linearGradient
          id="meteoconsWindsockFill1"
          x1={179.4}
          x2={226.7}
          y1={142.4}
          y2={224.3}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f87171"></stop>
          <stop offset={0.5} stopColor="#f87171"></stop>
          <stop offset={1} stopColor="#dc2626"></stop>
        </linearGradient>
        <linearGradient
          id="meteoconsWindsockFill2"
          x1={252.5}
          x2={291.9}
          y1={149.2}
          y2={217.5}
          href="#meteoconsWindsockFill1"
        ></linearGradient>
        <linearGradient
          id="meteoconsWindsockFill3"
          x1={325.6}
          x2={357.2}
          y1={156}
          y2={210.7}
          href="#meteoconsWindsockFill1"
        ></linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#meteoconsWindsockFill0)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
        d="M148 376V136"
      ></path>
      <path
        fill="url(#meteoconsWindsockFill1)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m191.4 137l28.8 4.3a6.4 6.4 0 0 1 5.4 6.3v73.7a6.4 6.4 0 0 1-5.4 6.3l-28.8 4.2a6.4 6.4 0 0 1-7.3-6.4v-82a6.4 6.4 0 0 1 7.3-6.3Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-6 99 184; 6 99 184; -6 99 184"
        ></animateTransform>
      </path>
      <path
        fill="url(#meteoconsWindsockFill2)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m260.6 146.1l28.8 4.2a6.4 6.4 0 0 1 5.4 6.3v55.6a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-64a6.4 6.4 0 0 1 7.3-6.3Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-6 99 184; 6 99 184; -6 99 184"
        ></animateTransform>
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur={`${duration / 2}s`}
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="translate"
          values="0 0; 5 0; 0 0"
        ></animateTransform>
      </path>
      <path
        fill="url(#meteoconsWindsockFill3)"
        stroke="#ef4444"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m329.8 155.2l28.7 4.2a6.4 6.4 0 0 1 5.5 6.3v37.4a6.4 6.4 0 0 1-5.5 6.3l-28.7 4.2a6.4 6.4 0 0 1-7.3-6.3v-45.8a6.4 6.4 0 0 1 7.3-6.3Z"
      >
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur={`${duration}s`}
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="rotate"
          values="-6 99 184; 6 99 184; -6 99 184"
        ></animateTransform>
        <animateTransform
          additive="sum"
          attributeName="transform"
          calcMode="spline"
          dur={`${duration / 2}s`}
          keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
          repeatCount="indefinite"
          type="translate"
          values="0 0; 10 0; 0 0"
        ></animateTransform>
      </path>
    </svg>
  );
}
