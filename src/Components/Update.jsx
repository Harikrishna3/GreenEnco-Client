import { useEffect, useState } from "react";

const Update = ({ setid, onUpdate }) => {
  const [assignmentData, setAssignmentData] = useState();

  //fatch the data
  const getData = () => {

    fetch("https://greenenco-api.onrender.com/details", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {

        setAssignmentData(data);

      })
  }

  //fetch the data
  useEffect(() => {
    getData();
  }, []);


  // handles Updata
  const handleUpdate = (id) => {
    setid(id);
    onUpdate();
    // routeChange();
  }
  return (
    <>
      <h1>Update</h1>
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
                  <tr key={data._id} >
                    <td onClick={() => handleUpdate(data._id)}><button>Update</button></td>
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
export default Update