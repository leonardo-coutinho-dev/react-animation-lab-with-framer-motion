import logo from "./assets/react.svg";

import { motion } from "framer-motion";

function App() {
  return (
    <>
      <AnimatedText01 children={"Hello, world!"} />
      <AnimatedReactLogo />
    </>
  );
}

function AnimatedReactLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="overflow-hidden absolute top-1 left-1 p-4"
    >
      <motion.img src={logo} width="50px" />
    </motion.div>
  );
}

function AnimatedText01({ children }) {
  return (
    <>
      <div className="bg-indigo-50 p-8 m-4 border-3 border-sky-300 border-dashed rounded-full">
        <motion.a
          className="overflow-hidden relative block"
          initial="initial"
          whileHover="hovered"
        >
          <motion.div variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
            <motion-h1 className="font-mono text-6xl">{children}</motion-h1>
          </motion.div>
          <motion.div
            className="absolute inset-0"
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
          >
            <motion.h1 className="font-mono text-6xl">{children}</motion.h1>
          </motion.div>
        </motion.a>
      </div>
    </>
  );
}

export { AnimatedReactLogo, AnimatedText01 };

export default App;
