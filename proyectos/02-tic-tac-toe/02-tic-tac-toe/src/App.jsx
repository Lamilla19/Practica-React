/*Creamos una constante para los turnos del juego*/
/*{} esto denomina que es un objeto*/
const TURNOS = {
  X : "x",
  Y : "y"
}
/*Sintaxi*/
/*const array = Array(longitud).fill(valor);*/
const tablero = Array(9).fill(null)

const Square = ({children , updateBoard , index})=>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App() {

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <section className="game">
        {
          tablero.map((_,index)=>{
            return(
              <Square
              key={index}
              index={index}
              >
              {index}
              </Square>            
            )
          })
        }
      </section>

    </main>
  )
}

export default App
