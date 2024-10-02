import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName : "KLamilla16",
        name : "Kevin Lamilla",
        isFollowing : true
    },
    {
        userName : "ILamilla18",
        name : "Isaac Lamilla",
        isFollowing : false
    },
    {
        userName : "RLamilla22",
        name : "Anthonny Lamilla",
        isFollowing : true
    },
    {
        userName : "SLamilla22",
        name : "Pepe Lamilla",
        isFollowing : true
    },   
    {
        userName : "MLamilla5",
        name : "Matias Lamilla",
        isFollowing : false
    },
    {
        userName : "ELamilla28",
        name : "Elias Lamilla",
        isFollowing : true
    }
]
function App(){
    const format = (userName) => `@${userName}`
 return(
    <section className="App">
        {
            users.map(({userName,name,isFollowing})=>{
                return(
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        formatElement={format}
                        initialIsFollowing={isFollowing}
                        />  
                    )
            })
        }
    </section>
 )
}

export default App;