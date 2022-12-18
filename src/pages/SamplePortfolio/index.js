import { Link } from "react-router-dom";
import config from "../../config";
import Slider from "./Slider";

function SamplePortfolio() {
        
    return (
        // <>
        // <ul className="flex justify-between p-10">
        //     <li>
        //         <Link to={config.routes.sample1}>
        //             sample1
        //         </Link>
        //     </li>

        //     <li>
        //     <Link to={config.routes.sample2}>
        //             sample2
        //         </Link>
        //     </li>

        //     <li>
        //     <Link to={config.routes.sample3}>
        //             sample3
        //         </Link>
        //     </li>

        //     <li>
        //     <Link to={config.routes.sample4}>
        //             sample4
        //         </Link>
        //     </li>

        // </ul>
        <Slider/>
    );
}

export default SamplePortfolio;
