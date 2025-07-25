import { JSX } from 'react';
import { SVGTypes } from '../../types/types';

/**
 *
 *
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.fill]
 * @returns {JSX.Element}
 */

function ActivityLoader({ className, fill }: SVGTypes): JSX.Element {
  return (
    <svg
      style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
      }}
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill={fill}
        stroke="white"
        strokeWidth="4"
        r="31"
        strokeDasharray="146.08405839192537 50.69468613064179"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.8695652173913042s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default ActivityLoader;
