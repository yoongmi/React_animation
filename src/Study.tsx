import styled from "styled-components";
import Drag from "./Test/Drag";
import Motion from "./Test/Motion";
import Presence from "./Test/Presence";
import Project from "./Test/Project";
import Slider from "./Test/Slider";
import Svg from "./Test/Svg";
import Variants from "./Test/Variants";
import Watchthis from "./Test/Watchthis";

function Study() {
  return (
    <div>
      <Box>
        <Drag />
      </Box>
      <Box>
        <Variants />
      </Box>
      <Box>
        <Motion />
      </Box>
      <Box>
        <Svg />
      </Box>
      <Box>
        <Presence />
      </Box>
      <Box>
        <Slider />
      </Box>
      <Box>
        <Watchthis />
      </Box>
      <Box>
        <Project />
      </Box>
    </div>
  );
}

const Box = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Study;
