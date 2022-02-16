
import './App.css';
import EditData from './components/EditData';
import ShowData from './components/ShowData';
import TableData from './components/TableData';

function App() {
  return (
    <div className="App">
      <ShowData/>
      <TableData/>
      <EditData/>
    </div>
  );
}

export default App;
