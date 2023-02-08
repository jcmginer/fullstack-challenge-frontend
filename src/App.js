import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Helper } from './Components/Helper/Helper';
import Router from './routes/Router';


function App() {


  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <>
      <Helper />
      <Router />
    </>
  );

}

export default App;
