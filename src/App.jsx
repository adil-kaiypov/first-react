import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';


function App() {
  const Ingredients = [
    'whopper',
    'whopper',
    'whopper',
    'whopper'
  ];
  return (
    <div className="App">
      <Header text='this is header'/>
      <Body text="this is body" Ingredients = {Ingredients} />
      <Footer text="this is footer"/>
    </div>
  );
}

export default App;
