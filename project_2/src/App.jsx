import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <ContactUs />
    </div>
  )
}

export default App
