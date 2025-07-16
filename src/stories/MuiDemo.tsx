import Demo from "./Demo"
import screen1 from "../assets/screens/mui/1.png";
import screen2 from "../assets/screens/mui/2.png";
import screen3 from "../assets/screens/mui/3.png";

const MuiDemo = () => {
    return <Demo screenshots={[
        screen1,
        screen2,
        screen3,
    ]}/>
};

export default MuiDemo;