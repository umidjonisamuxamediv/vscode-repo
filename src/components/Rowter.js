import React from "react";
import{Routes,Route} from "react-router-dom"
import BesicLeaut from "./Layaut";
import HomePage from "../cards/Card1";
import WarMoviseContainer from "../WarMovis/Card1/Homepagedefault";
import TrendingContainer from "../Trending/Card1/Homepagedefault";
import PopolyarContainer from "../Popular/Card1/Homepagedefault";
import FonatstikContainer from "../Fantastik/Card1/Homepagedefault";
import ScinecsContainer from "../Science/Card1/Homepagedefault";
import * as ROUTS from '../constant/Routs'

const RowteContainer =()=>{
    return <Routes>
        <Route
        path={ROUTS.CARTOONS}
        element={<BesicLeaut>
            <HomePage/>
        </BesicLeaut>}/>
        <Route
        path={ROUTS.WAR}
        element={<BesicLeaut>
            <WarMoviseContainer/>
        </BesicLeaut>}/>
        <Route
        path={ROUTS.TRENDING}
        element={<BesicLeaut>
            <TrendingContainer/>
        </BesicLeaut>}/>
        <Route
        path={ROUTS.POPULAR}
        element={<BesicLeaut>
            <PopolyarContainer/>
        </BesicLeaut>}/>
        <Route
        path={ROUTS.FANTASY}
        element={<BesicLeaut>
            <FonatstikContainer/>
        </BesicLeaut>}/>
        <Route
        path={ROUTS.SCIENCE}
        element={<BesicLeaut>
            <ScinecsContainer/>
        </BesicLeaut>}/>
        
        <Route path="/cartoons" element={<BesicLeaut>
            <h1>cartons</h1>
            </BesicLeaut>}/>
            <Route path="*" element={<BesicLeaut><h1>
            Page Nod Faund
            </h1></BesicLeaut>}/>
    </Routes>
}
export default RowteContainer