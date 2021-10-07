import { Consumer } from './Containers/ClickHandler';
import './App.css';
import ClickHandler from './Containers/ClickHandler';
import FullSizedBackground from './components/FullSizedBackground';
import TopTitle from './components/TopTitle';
import DwaynePict from './components/DwaynePict';
function App() {
  return (
    <ClickHandler>
        <FullSizedBackground />
        <div className="centered">
          <Consumer>
            {
              numberNow => {
                return <TopTitle nowNumber={numberNow}/>
              }
            }
          </Consumer>
          <DwaynePict />
        </div>
    </ClickHandler>
  );
}

export default App;
