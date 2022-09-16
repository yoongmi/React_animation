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

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

function Watchthis() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked && <Circle layoutId="circle" style={{ borderRadius: 50 }} />}
      </Box>
      <Box>
        {clicked && <Circle layoutId="circle" style={{ borderRadius: 0 }} />}
      </Box>
    </Wrapper>
  );
}

export default Watchthis;
