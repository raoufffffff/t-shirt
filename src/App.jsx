import CanvasModel from "./Canvas"
import Home from "./pages/Home"
import Cust from "./pages/Cust"

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Cust />
    </main>
  )
}

export default App
