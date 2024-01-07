import { Provider } from 'react-redux';
import './App.css';
import Main from './components/main/Main';
import store from './components/redux/Store';

function App() {
  return (
    <Provider store={store}>   
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
