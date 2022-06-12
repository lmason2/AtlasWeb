import * as React from "react"
import LandingPage from "../LandingPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MyTeam from "../MyTeam";
import TrainingHome from "../MyTraining";
import WeightsHome from "../MyWeights";
import Feed from "../Feed";
import MyMessages from "../MyMessages";
import Auth from "../Auth/Auth";

const Home = (props: any) => {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Auth />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/training" element={<TrainingHome />} />
          <Route path="/weights" element={<WeightsHome />} />
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path="/messages" element={<MyMessages />} />
        </Routes>
      </Router>
    );
}

export default Home;