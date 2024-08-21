import { type SpringOptions } from 'framer-motion'

// * useSmooth
type Smooth = <O>(
  value: MotionValue<number>,
  input: number[],
  output: O[],
  config?: SpringOptions
) => MotionValue<O>
