import { Consumer } from './Containers/ClickHandler';
import './App.css';
import ClickHandler from './Containers/ClickHandler';
import Titleplace from './components/Titleplace';
function App() {
  return (
    <ClickHandler>
      <div className="main">
          <img src="https://i.kym-cdn.com/entries/icons/mobile/000/036/061/cover2.jpg" alt="" className="amongusBackground" />
        </div>
        <div className="centered">
          <div className="toptitle">
            <h1 className="title">Pop Dwaney johansohn</h1>
            <Consumer>
              {number =>{
                return <h1 className="title" id="counter">{number}</h1>
              }}
            </Consumer>
          </div>
          <div className="dwaynepict">
            <div className="relativewrapper">
              <img src="Assets/afterNew.png" alt="" className="imagechange" id="after" />
              <img src="Assets/beforeNew.png" alt="" className="imagechange" id="before" />
            </div>
          </div>
        </div>
    </ClickHandler>
  );
}

export default App;
