import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import resume from "./assets/resume1.pdf"

function App() {

  // const [showPromise, setShowPromise] = useState(false);

  // const toggleShowPromiseHandler = useCallback((event) => {
  //   // console.log("In the click handler!")
  //   setShowPromise((oldValue) => { return !oldValue; })
  // }, [])

  console.log(window.location);

  let content = "";

  // Temporary router
  switch (window.location.pathname) {
    // Home page
    case "/":
      content = (
        <HomePage />
      )
      break;

    // About page
    case "/about":
      content = (
        <AboutPage />
      )
      break;

    // Practices page
    case "/contact":
      content = (
        <ContactPage/>
      )
      break;

    default:
      content = <p>Sorry, that page could not be found.</p>
  }


  return (


    <Layout >
      {content}
    </Layout>

  );
}

export default App;

