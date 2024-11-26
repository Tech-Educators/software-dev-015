"use client";
import AnimateIn from "@/components/AnimateIn";
import { ChainAnimate } from "@/components/ChainAnimation";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <motion.div animate={{ x: 100 }} transition={{ duration: 2, delay: 1 }}>
        words
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        whileDrag={{ color: "tomato" }}
      >
        drag me!
      </motion.div>

      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <p>I am only here to make the page taller</p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <p>I am in the animated div</p>
      </motion.div>

      <AnimateIn>
        <p>I am being animated in</p>
      </AnimateIn>

      <AnimateIn>
        <p>I am also being animated in</p>
      </AnimateIn>

      <AnimateIn>
        <p>I am being animated in but I am cooler</p>
      </AnimateIn>

      <AnimateIn>
        <p>I am being animated in last!</p>
      </AnimateIn>

      <ChainAnimate />
    </div>
  );
}
