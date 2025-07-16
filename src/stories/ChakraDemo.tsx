import Demo from "./Demo"
import screen1 from "../assets/screens/chakra/1.png";
import screen2 from "../assets/screens/chakra/2.png";
import screen3 from "../assets/screens/chakra/3.png";
import screen4 from "../assets/screens/chakra/4.png";
import screen5 from "../assets/screens/chakra/5.png";

const ChakraDemo = () => {
    return <Demo screenshots={[
        screen1,
        screen2,
        screen3,
        screen4,
        screen5,
    ]}/>
};

export default ChakraDemo;