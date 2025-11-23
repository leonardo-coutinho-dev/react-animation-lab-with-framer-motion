import logo from "./assets/react-svg-logo.svg";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <AnimatedReactLogo />

      <AnimatedTextTranslateY children={"Hello, world!"} />
      <AnimatedTextRotate children={"Hello, world!"} />
      <AnimatedTextOpacity children={"Hello, world!"} />
      <AnimatedExitBox />
    </div>
  );
}

function AnimatedReactLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="overflow-hidden absolute top-1 left-1 p-4"
    >
      <motion.img src={logo} width="50px" />
    </motion.div>
  );
}

function AnimatedTextTranslateY({ children }) {
  return (
    <div className="bg-transparent shadow-lg p-8 m-4 border border-[#bbcbcb] border-solid rounded-full">
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
  );
}

function AnimatedTextRotate({ children }) {
  return (
    <motion.div
      className="bg-transparent shadow-lg p-8 m-4 border border-[#bbcbcb] border-solid rounded-full"
      initial="initial"
      whileHover="hovered"
    >
      <motion.h1
        variants={{
          initial: { rotate: "0deg" },
          hovered: { rotate: "360deg" },
        }}
        transition={{ type: "spring" }}
        className="font-mono text-6xl"
      >
        {children}
      </motion.h1>
    </motion.div>
  );
}

function AnimatedTextOpacity({ children }) {
  return (
    <motion.div
      className="bg-transparent shadow-lg p-8 m-4 border border-[#bbcbcb] border-solid rounded-full"
      initial="initial"
      whileHover="hovered"
    >
      <motion.h1
        variants={{
          initial: { opacity: 0 },
          hovered: { opacity: 1 },
        }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="font-mono text-6xl"
      >
        {children}
      </motion.h1>
    </motion.div>
  );
}

function AnimatedExitBox() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};

const button = {
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};

export {
  AnimatedReactLogo,
  AnimatedTextTranslateY,
  AnimatedTextRotate,
  AnimatedTextOpacity,
  AnimatedExitBox,
};

export default App;
