import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExercise }) {
    const history = useHistory();  // hook allows access to history instance for navigation

    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }

    // UPDATE an existing exercise
    const onEditExercise = async exercise => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }


    // DELETE an exercise 
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercise(exercises);
            alert("Workout has been deleted, please refresh the page")
        } else {
            console.error(`Failed to delete workout with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD the exercise database into table, loads when screen is initially rendered or refreshed
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY instructional text and exercises in a table, table built using compenents (see /components folder under /src)
    return (
        <>
            <article>
                <h2>Submitted Workouts</h2>
                <p> Below are the workouts that have been recorded</p>
                    <ul>
                        <li>Use the navigation button above to add new exercises to the table</li>
                        <li>Edit an existing entry by clicking the edit button in the table row</li>
                        <li>Delete exercises by clicking the delete button in the table row</li>
                    </ul>

                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;

