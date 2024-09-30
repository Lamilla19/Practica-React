import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

function App(){
    return (
    <div className="App">
        <TwitterFollowCard userName="klamilla16" name="Kevin Lamilla" isFollowing="Seguir"/>
        <TwitterFollowCard userName="ILamilla18" name="Isaac Lamilla" isFollowing="Seguir"/>
        <TwitterFollowCard userName="ALamilla22" name="Anthonny Lamilla" isFollowing="Seguir"/>
    </div>
)
}

export default App;