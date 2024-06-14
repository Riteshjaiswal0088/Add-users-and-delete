import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Users({ users = [], addUser, deleteUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    addUser(email, password);
    e.preventDefault();
    setEmail("");
    setPassword("");
    navigate("/users");
  }

  function handleDelete(email) {
    deleteUser(email);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col md-5"></div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h5 className="text-center card-body-title">Add-Users Form</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary w-100" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col md-5"></div>
          <div className="col">
            <h4 style={{ textAlign: "center" }}>Users details</h4>
            <div className="list-group">
              {users.map(function (user) {
                return (
                  <div key={user.email} className="list-group-item">
                    {user.email}, {user.password}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(user.email)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Users;
