import React from 'react';
import { RiEdit2Fill, RiDeleteBin2Line } from 'react-icons/ri'

/* 
* Exercise populated as a table row will have a column for each of the 5 properties (ID excluded),
*   additional columns for Edit button and Delete button (import icons)
*/
function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><RiEdit2Fill onClick={() => onEdit(exercise)} /></td>
            <td><RiDeleteBin2Line onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;