import Demo from "./Demo"
import screen1 from "../assets/screens/ant/1.png";
import screen2 from "../assets/screens/ant/2.png";
import screen3 from "../assets/screens/ant/3.png";
import screen4 from "../assets/screens/ant/4.png";
import screen5 from "../assets/screens/ant/5.png";
import screen6 from "../assets/screens/ant/6.png";
import screen7 from "../assets/screens/ant/7.png";

const AntDemo = () => {
    return <Demo screenshots={[
        screen1,
        screen2,
        screen3,
        screen4,
        screen5,
        screen6,
        screen7,
    ]}/>
};

export default AntDemo;