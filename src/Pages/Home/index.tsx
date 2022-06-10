import * as React from "react"
import LandingPage from "../LandingPage";
import MyTeam from "../MyTeam";

const Home = (props: any) => {

    return <>{props.authenticated ? <MyTeam /> : <LandingPage />}</>;
}

export default Home;