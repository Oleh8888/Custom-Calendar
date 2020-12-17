import React from "react";
import './note.css';

export default function NewNote({ newText, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New text"
        value={newText.title || ""}
        onChange={handleChange}
      />
      {!newText.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newText.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add text</button>
        </>
      )}
    </form>
  );
}