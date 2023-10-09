import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const UpdateItem = ({ idprop, dataprop, setData, setIiid }) => {
  const navigate = useNavigate();
  const [Month, setMonth] = useState("");
  const [PVSYST_GHI, setPVSYST_GHI] = useState();
  const [PVSYST_GTI, setPVSYST_GTI] = useState();
  const [PVSYST_Energy, setPVSYST_Energy] = useState();
  const [Contractual_Energy, setContractual_Energy] = useState();
  const [Actual_GTI, setActual_GTI] = useState();
  const [Actual_GHI, setActual_GHI] = useState();
  const [PVSyst_GTI_vs_Actual_GTI, setPVSyst_GTI_vs_Actual_GTI] = useState();
  const [PVSyst_GHI_vs_Actual_GHI, setPVSyst_GHI_vs_Actual_GHI] = useState();
  const [PVSyst_Energy_vs_Contractual_Energy, setPVSyst_Energy_vs_Contractual_Energy] = useState();
  const [T_Cell_Avg_C, setT_Cell_Avg_C] = useState();
  const [Actual_Inverter_Energy_KWh, setActual_Inverter_Energy_KWh] = useState();
  const [Actual_Export_Energy_KWh, setActual_Export_Energy_KWh] = useState();
  const [Actual_Import_Energy_KWh, setActual_Import_Energy_KWh] = useState();
  const [AC_loss_per, setAC_loss_per] = useState();
  const [Net_Energy, setNet_Energy] = useState();
  const [Normalised_Energy_KWh, setNormalised_Energy_KWh] = useState();
  const [Excess_Shortfall_Normalised_KWh, setExcess_Shortfall_Normalised_KWh] = useState();
  const [Excess_Shortfall_Normalised_in_percentage, setExcess_Shortfall_Normalised_in_percentage] = useState();
  const [Excess_Shortfall_KWh, setExcess_Shortfall_KWh] = useState();
  const [Excess_Shortfall__in_percentage, setExcess_Shortfall__in_percentage] = useState();

  useEffect(() => {
    keepReady();
  }, [])
  // console.log(dataprop);
  // console.log(idprop);

  //to change the route
  const routeChange = () => {
    let path = `../update`;
    navigate(path);
  }

  //to Update the data of specified ID
  const handleUpDate = async (ID) => {

    await axios
      .patch(`https://greenenco-api.onrender.com/details/${ID}`, {
        Month,
        PVSYST_GHI,
        PVSYST_GTI,
        PVSYST_Energy,
        Contractual_Energy,
        Actual_GTI,
        Actual_GHI,
        PVSyst_GTI_vs_Actual_GTI,
        PVSyst_GHI_vs_Actual_GHI,
        PVSyst_Energy_vs_Contractual_Energy,
        T_Cell_Avg_C,
        Actual_Inverter_Energy_KWh,
        Actual_Export_Energy_KWh,
        Actual_Import_Energy_KWh,
        AC_loss_per,
        Net_Energy,
        Normalised_Energy_KWh,
        Excess_Shortfall_Normalised_KWh,
        Excess_Shortfall_Normalised_in_percentage,
        Excess_Shortfall_KWh,
        Excess_Shortfall__in_percentage
      })
      .then((data) => {
        setMonth("");
        setPVSYST_GHI();
        setPVSYST_GTI();
        setPVSYST_Energy();
        setContractual_Energy();
        setActual_GTI();
        setActual_GHI();
        setPVSyst_GTI_vs_Actual_GTI();
        setPVSyst_GHI_vs_Actual_GHI();
        setPVSyst_Energy_vs_Contractual_Energy();
        setT_Cell_Avg_C();
        setActual_Inverter_Energy_KWh();
        setActual_Export_Energy_KWh();
        setActual_Import_Energy_KWh();
        setAC_loss_per();
        setNet_Energy();
        setNormalised_Energy_KWh();
        setExcess_Shortfall_Normalised_KWh();
        setExcess_Shortfall_Normalised_in_percentage();
        setExcess_Shortfall_KWh();
        setExcess_Shortfall__in_percentage();
        console.log("Updated" + data);
        setData();
        setIiid();
        routeChange();
        // }
      });
  }

  // data stored in input field
  const keepReady = () => {
    setMonth(dataprop.Month)
    setPVSYST_GHI(dataprop.PVSYST_GHI)
    setPVSYST_GTI(dataprop.PVSYST_GTI)
    setPVSYST_Energy(dataprop.PVSYST_Energy)
    setContractual_Energy(dataprop.Contractual_Energy)
    setActual_GTI(dataprop.Actual_GTI)
    setActual_GHI(dataprop.Actual_GHI)
    setPVSyst_GTI_vs_Actual_GTI(dataprop.PVSyst_GTI_vs_Actual_GTI)
    setPVSyst_GHI_vs_Actual_GHI(dataprop.PVSyst_GHI_vs_Actual_GHI)
    setPVSyst_Energy_vs_Contractual_Energy(dataprop.PVSyst_Energy_vs_Contractual_Energy)
    setT_Cell_Avg_C(dataprop.T_Cell_Avg_C)
    setActual_Inverter_Energy_KWh(dataprop.Actual_Inverter_Energy_KWh)
    setActual_Export_Energy_KWh(dataprop.Actual_Export_Energy_KWh)
    setActual_Import_Energy_KWh(dataprop.Actual_Import_Energy_KWh)
    setAC_loss_per(dataprop.AC_loss_per)
    setNet_Energy(dataprop.Net_Energy)
    setNormalised_Energy_KWh(dataprop.Normalised_Energy_KWh)
    setExcess_Shortfall_Normalised_KWh(dataprop.Excess_Shortfall_Normalised_KWh)
    setExcess_Shortfall_Normalised_in_percentage(dataprop.Excess_Shortfall_Normalised_in_percentage)
    setExcess_Shortfall_KWh(dataprop.Excess_Shortfall_KWh)
    setExcess_Shortfall__in_percentage(dataprop.Excess_Shortfall__in_percentage)
  }

  return (
    <div id="body">
      <div id="form">
        <label> Month:-</label>
        <input
          type="text"
          id="Month"
          value={Month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <br />
        <label>PVSYST_GHI</label>
        <input
          type="Number"
          required
          id="PVSYST_GHI"
          value={PVSYST_GHI}
          onChange={(e) => setPVSYST_GHI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">PVSYST_GTI</label>
        <input
          type="Number"
          id="PVSYST_GTI"
          value={PVSYST_GTI}
          onChange={(e) => setPVSYST_GTI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">PVSYST_Energy</label>
        <input
          type="Number"
          id="PVSYST_Energy"
          value={PVSYST_Energy}
          onChange={(e) => setPVSYST_Energy(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Contractual_Energy</label>
        <input
          type="Number"
          id="Contractual_Energy"
          value={Contractual_Energy}
          onChange={(e) => setContractual_Energy(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Actual_GTI</label>
        <input
          type="Number"
          id="Actual_GTI"
          value={Actual_GTI}
          onChange={(e) => setActual_GTI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Actual_GHI</label>
        <input
          type="Number"
          id="Actual_GHI"
          value={Actual_GHI}
          onChange={(e) => setActual_GHI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">PVSyst_GTI_vs_Actual_GTI</label>
        <input
          type="Number"
          id="PVSyst_GTI_vs_Actual_GTI"
          value={PVSyst_GTI_vs_Actual_GTI}
          onChange={(e) => setPVSyst_GTI_vs_Actual_GTI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">PVSyst_GHI_vs_Actual_GHI</label>
        <input
          type="Number"
          id="PVSyst_GHI_vs_Actual_GHI"
          value={PVSyst_GHI_vs_Actual_GHI}
          onChange={(e) => setPVSyst_GHI_vs_Actual_GHI(e.target.value)}
        />
        <br />
        <label htmlFor="desc">PVSyst_Energy_vs_Contractual_Energy</label>
        <input
          type="Number"
          id="PVSyst_Energy_vs_Contractual_Energy"
          value={PVSyst_Energy_vs_Contractual_Energy}
          onChange={(e) => setPVSyst_Energy_vs_Contractual_Energy(e.target.value)}
        />
        <br />
        <label htmlFor="desc">T_Cell_Avg_C</label>
        <input
          type="Number"
          id="T_Cell_Avg_C"
          value={T_Cell_Avg_C}
          onChange={(e) => setT_Cell_Avg_C(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Actual_Inverter_Energy_KWh</label>
        <input
          type="Number"
          id="Actual_Inverter_Energy_KWh"
          value={Actual_Inverter_Energy_KWh}
          onChange={(e) => setActual_Inverter_Energy_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Actual_Export_Energy_KWh</label>
        <input
          type="Number"
          id="Actual_Export_Energy_KWh"
          value={Actual_Export_Energy_KWh}
          onChange={(e) => setActual_Export_Energy_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Actual_Import_Energy_KWh</label>
        <input
          type="Number"
          id="Actual_Import_Energy_KWh"
          value={Actual_Import_Energy_KWh}
          onChange={(e) => setActual_Import_Energy_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">AC_loss_per</label>
        <input
          type="Number"
          id="AC_loss_per"
          value={AC_loss_per}
          onChange={(e) => setAC_loss_per(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Net_Energy</label>
        <input
          type="Number"
          id="Net_Energy"
          value={Net_Energy}
          onChange={(e) => setNet_Energy(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Normalised_Energy_KWh</label>
        <input
          type="Number"
          id="Normalised_Energy_KWh"
          value={Normalised_Energy_KWh}
          onChange={(e) => setNormalised_Energy_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Excess_Shortfall_Normalised_KWh</label>
        <input
          type="Number"
          id="Excess_Shortfall_Normalised_KWh"
          value={Excess_Shortfall_Normalised_KWh}
          onChange={(e) => setExcess_Shortfall_Normalised_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Excess_Shortfall_Normalised_in_percentage</label>
        <input
          type="Number"
          id="Excess_Shortfall_Normalised_in_percentage"
          value={Excess_Shortfall_Normalised_in_percentage}
          onChange={(e) => setExcess_Shortfall_Normalised_in_percentage(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Excess_Shortfall_KWh</label>
        <input
          type="Number"
          id="Excess_Shortfall_KWh"
          value={Excess_Shortfall_KWh}
          onChange={(e) => setExcess_Shortfall_KWh(e.target.value)}
        />
        <br />
        <label htmlFor="desc">Excess_Shortfall__in_percentage</label>
        <input
          type="Number"
          id="Excess_Shortfall__in_percentage"
          value={Excess_Shortfall__in_percentage}
          onChange={(e) => setExcess_Shortfall__in_percentage(e.target.value)}
        />
        <br />
        <button
          className="button"
          onClick={() => handleUpDate(dataprop._id)}
        >
          Update</button>
        <div>
          <br />
        </div>
      </div>
    </div>
  )
}
export default UpdateItem