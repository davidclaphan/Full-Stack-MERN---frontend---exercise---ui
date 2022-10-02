import React from 'react';
import { Link } from 'react-router-dom';

// link only to CreateExercisePage
// access to EditExercisePage will be available via icon in table components
function Navigation() {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='../create-exercise'>Submit New Workout </Link>
        </nav>
    );
}

export default Navigation;