import './App.css';
import ImprovedMovieList from './components/ImprovedMovieList';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';
import {useState} from 'react';
// import ImprovedMovieList from './components/ImprovedMovieList';
 
function App() {
  const [isLoading, setIsLoading] = useState(false);
//to see the changes change the useState - false

  if(isLoading){
    return <Spinner/>
  } else {
    return (
      <div className="App">
        {/* <MovieList /> */}

        <ImprovedMovieList/>
      </div>
    );
  }
  }
 
 
export default App;