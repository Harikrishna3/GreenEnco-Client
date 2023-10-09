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

function App() {
  const [iiid, setIiiD] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const [assignmentData, setAssignmentData] = useState();

  //to fetch the data
  const getData = async () => {
    await fetch("https://greenenco-api.onrender.com/details", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignmentData(data);
      });
  };

  //fatchs the data of specified Id and sends to update Item
  const onUpdate = () => {
    // getData();

    // assignmentData &&  assignmentData.forEach((dataa) => {
    //     if (dataa._id === iiid) {
    //       //     setDataUpdate(data)
    //       setData(dataa)
    //       console.log(data);
    //     }
    // })
    iiid &&
      fetch(`https://greenenco-api.onrender.com/details/${iiid}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    iiid && routeChange();
  };

  //changes the route to update item page
  const routeChange = () => {
    let path = `/updateItem`;
    navigate(path);
  };
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route
          path="/update"
          element={<Update setid={setIiiD} onUpdate={onUpdate} />}
        />
        {data && (
          <Route
            path="/updateItem"
            element={
              data && (
                <UpdateItem
                  idprop={iiid}
                  dataprop={data}
                  setData={setData}
                  setIiid={setIiiD}
                />
              )
            }
          />
        )}
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
