import React from 'react';
import Exercise from './Exercise';

// table header contains  displayed properties of exercise, edit, and delete
// table body contains Exercise components mapped as rows
function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <caption> Exercises & Details</caption>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th># of Reps</th>
                    <th>Weight / Distance</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) =>
                    <Exercise
                        exercise={exercise}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}               
                />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;