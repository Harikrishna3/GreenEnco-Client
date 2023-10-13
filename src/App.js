import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Create from "./Components/Create";
import SideBar from "./Components/SideBar";
import Read from "./Components/Read";
import Delete from "./Components/Delete";
import Update from "./Components/Update";
import UpdateItem from "./Components/UpdateItem";
import { useState } from "react";
import Charts from "./Components/Charts";

function App() {
  const [data, setData] = useState(); // to save the fetched data

  //fatchs the data of specified Id and sends to update Item
  const onUpdate = (id) => {
    setData();
    fetch(`https://greenenco-api.onrender.com/details/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });

  };

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update onUpdate={onUpdate} />} />
        {data && (
          <Route
            path="/updateItem"
            element={data && <UpdateItem dataprop={data} setData={setData} />}
          />
        )}
        <Route path="/delete" element={<Delete />} />
        <Route path="/barchart" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
