// import AppRouter from './routes/AppRouter';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import TopNav from './Components/TopNav/TopNav';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <TopNav />
          <img src={logo} className="App-logo" alt="logo" />
          <Search />
        </header>
        {/* <main>
          <AppRouter />
        </main> */}
      </div>
    </>
  );
}

export default App;
