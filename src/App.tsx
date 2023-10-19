import Cats from './components/Cats';
import Header from './components/Header';
import Footer from './components/Footer';
import Tips from './components/Tips';
import Form from './components/Forms/Form';

function App() {
  return (
    <div className="container">
      <Header />
      <Cats />
      <Form />
      <Tips />
      <Footer />
    </div>
  );
}
export default App;
