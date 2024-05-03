import { Header } from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ChatBot from './components/ChatBot';
import Services from './components/Services';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Services />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
