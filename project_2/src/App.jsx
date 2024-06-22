import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactForm from "./components/ContactForm/ContactForm";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactUs />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
