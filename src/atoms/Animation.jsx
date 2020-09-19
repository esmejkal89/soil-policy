import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const IntersectionContext = React.createContext({ inView: true })

export function Animation(props, children) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-0px 0px',
  })

  return (
    <AnimatePresence>
      <motion.div
        ref={props.noRef ? null : ref}
        initial={props.initial}
        animate={inView ? props.animate : 'hidden'}
        exit={props.exit}
        variants={props.variants}
        transition={props.transition}
        style={props.style}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Animation
