import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

// existing exercise info populated to form when rendering page
export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]       = useState(exercise.name);
    const [reps, setReps]       = useState(exercise.reps);
    const [weight, setWeight]   = useState(exercise.weight);
    const [unit, setUnit]       = useState(exercise.unit);
    const [date, setDate]       = useState(exercise.date.substring(0, 10));
    
    const history = useHistory();

    // below executed after form updated and submitted via button click
    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Workout has been updated!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit workout, please try again. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");  // push app user back to home page for success OR failure
    }

    // edit form is identical to create form
    return (
        <>
        <article>
            <h2>Edit an Existing Workout</h2>
            <p>Make changes to your workout, make sure all fields are filled in before submiting!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Edit Exercise</legend>
                    <label for="name">Exercise</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="reps"># of Reps</label>
                    <input
                        type="number"
                        min={1}
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />

                    <label for="weight">Weight / Distance</label>
                    <input
                        type="number"
                        min={1}
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label for="unit">Unit</label>
                    <select
                        type="select"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit"
                        required >
                        
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                        <option value="min">min</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Update Workout</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;