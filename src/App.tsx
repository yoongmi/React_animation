import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  width: 60vw;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 1;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  font-size: 40px;
  /* &:first-child {
    transform-origin: right bottom;
  }
  &:last-child {
    transform-origin: left top;
  } */
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

const Btn = styled(motion.button)`
  color: #d63031;
  font-weight: bold;
  margin-top: 50px;
  border: 0 none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const btnvariant = {
  initial: {
    color: "#d63031",
    scale: 1,
  },
  click: { color: "#6c5ce7", scale: 1.3 },
};

const boxvariant = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prev) => !prev);
  };
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <Wrapper>
      <Grid>
        <Box
          variants={boxvariant}
          initial="initial"
          whileHover="hover"
          onClick={() => setPopup("one")}
          layoutId="one"
          style={{ originX: 1, originY: 1 }}
        ></Box>
        <Box>
          {clicked && (
            <Circle
              layoutId="circle"
              style={{ backgroundColor: "rgba(255, 255, 255,1.0)" }}
            />
          )}
        </Box>
        <Box>
          {!clicked && (
            <Circle
              layoutId="circle"
              style={{ backgroundColor: "rgba(225, 112, 85,1.0)" }}
            />
          )}
        </Box>
        <Box
          variants={boxvariant}
          whileHover="hover"
          onClick={() => setPopup("four")}
          layoutId="four"
          style={{ originX: 0, originY: 0 }}
        ></Box>
      </Grid>

      <Btn variants={btnvariant} whileTap="click" onClick={toggle}>
        Switch
      </Btn>

      <AnimatePresence>
        {popup && (
          <Overlay onClick={() => setPopup(null)}>
            <Box
              layoutId={popup}
              style={{
                width: 400,
                height: 300,
                backgroundColor: "white",
              }}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
