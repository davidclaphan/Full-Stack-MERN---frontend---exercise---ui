import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]       = useState('');
    const [weight, setWeight]   = useState('');
    const [unit, setUnit]       = useState('');
    const [date, setDate]       = useState('');
    
    const history = useHistory();

    // below will execute after form filled in and submitted via button click
    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("New Workout Added, Way to Go!"); 
        } else {
            alert(`Failed to create workout, status code = ${response.status}.`);  
        }
        history.push("/"); // push user back to home page for success OR failure
    };

    /* 
    * Form contains text, number, select, and date inputs, and a submit button.
    * All fields are required, number fields must be greater than 0.
    */
    return (
        <>
        <article>
            <h2>Submit a New Workout</h2>
            <p>
                Add a new exercise to the Home Screen table by filling in <b>ALL</b> fields
            </p>
            <p><ul><li>Reps & Weight/Distance must be greater than 0</li></ul></p>

            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Add Exercise</legend>
                    <p>
                    <label for="name">Exercise</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required />
                    </p>

                    <p>
                    <label for="reps"># of Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps"
                        min={1}
                        required />
                    </p>

                    <p>
                    <label for="weight">Weight / Distance</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight"
                        min={1}
                        required />
                    </p>

                    <p>
                    <label for="unit">Unit</label>
                    <select
                        type="select"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit"
                        required='required' >
                        
                        <option></option>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                        <option value="min">min</option>
                    </select>
                    </p>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />

                    <p>
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={createExercise}
                        id="submit"
                    >Submit Workout</button></label>
                    </p>

                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreateExercisePage;