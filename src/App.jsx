import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  function handleAddUser(email, password) {
    setUsers([...users, { email, password }]);
  }
  function handleDeleteUser(email) {
    const removeUser = users.filter((user) => {
      return user.email !== email;
    });
    setUsers(removeUser);
    console.log("user deleted");
  }

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/users"
              element={
                <Users
                  users={users}
                  addUser={handleAddUser}
                  deleteUser={handleDeleteUser}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
