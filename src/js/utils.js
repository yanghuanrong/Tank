export const STAGE = document.querySelector(`#left`)
export const STAGE_T = 0
export const STAGE_L = 0
export const STAGE_R = STAGE.offsetWidth - 32
export const STAGE_B = STAGE.offsetHeight - 32

export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

