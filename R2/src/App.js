import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import Main from './components/main/Main';
import Item from './components/item/Item';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Main/>
          <Item/>
      </div>
    </Provider>
  );
}

export default App;
