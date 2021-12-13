import React, { useState } from "react";
import "./AddPeople.css";

const AddPeople = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="add-new">
      <button onClick={() => setShowForm(true)} className="add-new__btn">
        Add New Person
      </button>
      {showForm && (
        <>
          <div onClick={() => setShowForm(false)} className="backdrop"></div>
          <div className="form-container">
            <h1 className="form__header">Add New Person</h1>
            <form className="form">
              <input className="form__input" type="text" placeholder="Name" />
              <input className="form__input" type="text" placeholder="Age" />
              <input className="form__input" type="text" placeholder="Gender" />
              <button
                style={{ width: "100%", marginTop: "1rem" }}
                className="add-new__btn"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AddPeople;
