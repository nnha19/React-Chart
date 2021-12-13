import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddPeople.css";

const AddPeople = ({ setPeople }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    !showForm && reset();
  }, [showForm]);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 4000);
    }
  }, [added]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setPeople((prev) => [...prev, data]);
      setShowForm(false);
      setLoading(true);
      setAdded(true);
      // Send http request to the server and save the data inside the database.
    } catch (err) {
      if (err && err.response && err.response.data) {
        setError(err.response.data);
      }
      setLoading(false);
    }
  };

  const ageOptions = Array.from(new Array(99)).map((a, index) => {
    return <option>{index + 1}</option>;
  });

  return (
    <div className="add-new">
      {added && <p className="added">New person successfully added.</p>}
      <button onClick={() => setShowForm(true)} className="add-new__btn">
        Add New Person
      </button>
      {showForm && (
        <>
          <div onClick={() => setShowForm(false)} className="backdrop"></div>
          <div className="form-container">
            <h1 className="form__header">Add New Person</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div>
                <label>Name</label>
                <input
                  {...register("name", { required: true })}
                  className="form__input"
                  type="text"
                />
                {errors.name && <p className="error">This field is required</p>}
              </div>
              <div>
                <label>Age</label>
                <select
                  {...register("age", { required: true })}
                  className="form__input"
                >
                  {ageOptions}
                </select>
                {errors.age && <p className="error">This field is required</p>}
              </div>
              <div>
                <label>Gender</label>
                <select
                  {...register("gender", { required: true })}
                  className="form__input"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && (
                  <p className="error">This field is required</p>
                )}
              </div>
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
