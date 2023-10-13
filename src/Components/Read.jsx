import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css'

const Read = () => {
  const [assignmentData, setAssignmentData] = useState();

  // fetchs the data
  const getData = () => {
    fetch("https://greenenco-api.onrender.com/details", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAssignmentData(data);
      });
  };

  //calls the function after rendered
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div 
    style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
  }}
>
      <h1>Read</h1>
      <Link to={"/barchart"}>
      <button style={{marginLeft:"10rem",padding:"10px",color:"white", backgroundColor:"#3d5aff"}}>Show in charts</button>
      </Link>
    </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Month</th>
              <th>PVSYST GHI</th>
              <th>PVSYST GTI</th>
              <th>PVSYST Energy</th>
              <th>Contractual Energy</th>
              <th>Actual GTI</th>
              <th>Actual GHI</th>
              <th>PVSyst GTI vs Actual GTI</th>
              <th>PVSyst GHI vs Actual GHI</th>
              <th>PVSyst Energy vs Contractual Energy</th>
              <th>T -Cell Avg(°C)</th>
              <th>Actual Inverter Energy (KWh)</th>
              <th>Actual Export Energy (KWh)</th>
              <th>Actual Import Energy (KWh)</th>
              <th>AC loss (%)</th>
              <th>Net Energy</th>
              <th>Normalised Energy (KWh)</th>
              <th>Excess/Shortfall (Normalised) KWh</th>
              <th>Excess/Shortfall (Normalised) (%)</th>
              <th>Excess/Shortfall (KWh)</th>
              <th>Excess/Shortfall (%)</th>
            </tr>
          </thead>
          <tbody>

            {assignmentData &&
              assignmentData.map((data) => {
                return (
                  <tr>
                    <td>{data.Month}</td>
                    <td>{data.PVSYST_GHI}</td>
                    <td>{data.PVSYST_GTI}</td>
                    <td>{data.PVSYST_Energy}</td>
                    <td>{data.Contractual_Energy}</td>
                    <td>{data.Actual_GTI}</td>
                    <td>{data.Actual_GHI}</td>
                    <td>{data.PVSyst_GTI_vs_Actual_GTI}</td>
                    <td>{data.PVSyst_GHI_vs_Actual_GHI}</td>
                    <td>{data.PVSyst_Energy_vs_Contractual_Energy}</td>
                    <td>{data.T_Cell_Avg_C}</td>
                    <td>{data.Actual_Inverter_Energy_KWh}</td>
                    <td>{data.Actual_Export_Energy_KWh}</td>
                    <td>{data.Actual_Import_Energy_KWh}</td>
                    <td>{data.AC_loss_per}</td>
                    <td>{data.Net_Energy}</td>
                    <td>{data.Normalised_Energy_KWh}</td>
                    <td>{data.Excess_Shortfall_Normalised_KWh}</td>
                    <td>{data.Excess_Shortfall_Normalised_in_percentage}</td>
                    <td>{data.Excess_Shortfall_KWh}</td>
                    <td>{data.Excess_Shortfall__in_percentage}</td>
                  </tr>

                )
              })

            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read