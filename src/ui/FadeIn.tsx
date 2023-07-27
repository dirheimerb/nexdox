'use client';
import { createContext, useContext } from 'react';
import { motion, useReducedMotion, Variant } from 'framer-motion';
import React from 'react';

export type FadeInProps = {
  [key: string]: any;
};

export const FadeInStaggerContext = createContext<boolean>(false);

const viewport = { once: true, margin: '0px 0px -200px' };

export default function FadeIn(props: FadeInProps) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  const fadeInVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
}

type FadeInStaggerProps = {
  faster?: boolean;
  [key: string]: any;
};

export function FadeInStagger({
  faster = false,
  ...props
}: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
