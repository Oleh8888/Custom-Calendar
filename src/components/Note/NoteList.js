import React from "react";

export default function NoteList({ allText, handleDelete }) {
  return (
    <ul>
      {allText.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}
