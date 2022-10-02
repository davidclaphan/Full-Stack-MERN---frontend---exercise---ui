/* 
* David Claphan
* ONID: claphand
* Due Date: 08/11/2022
* CS290 - Web Development
* Assignment 7: Full Stack MERN App
*/


// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (stored in pages directory)
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Exercise Tracker App</h1>
            <p>Full-Stack MERN App</p>
          </header>

          <Navigation /> 

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>&copy; <em>2022 David Claphan</em></p>
          </footer>

      </Router>
    </>
  );
}

export default App;
