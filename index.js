import MovingAverage from './MovingAverage.js' 


/**
 * @description Decorator that clamps a value between min and max
 * @param {number} min
 * @param {number} max
 * @returns {function}
 */
export function clamp(min, max) {
  return (value) => Math.max(min, Math.min(max, value))
}


/**
 * @description Decorator that scales a value between min and max
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} outMin
 * @param {number} outMax
 * @returns {function}
 */
export function scale(inMin, inMax, outMin, outMax) {
  return (value) => {
    const normalized = (value - inMin) / (inMax - inMin)
    return outMin + normalized * (outMax - outMin)
  }
}


export function movingAverage

export {MovingAverage}