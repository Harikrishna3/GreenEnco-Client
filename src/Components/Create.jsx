// import { useState } from "react";
// import axios from 'axios';
import {
  useNavigate,

} from 'react-router-dom';
import { useFormik } from 'formik';
import './Create.css'

const Create = () => {
  // const [Month, setMonth] = useState("");
  // const [PVSYST_GHI, setPVSYST_GHI] = useState();
  // const [PVSYST_GTI, setPVSYST_GTI] = useState();
  // const [PVSYST_Energy, setPVSYST_Energy] = useState();
  // const [Contractual_Energy, setContractual_Energy] = useState();
  // const [Actual_GTI, setActual_GTI] = useState();
  // const [Actual_GHI, setActual_GHI] = useState();
  // const [PVSyst_GTI_vs_Actual_GTI, setPVSyst_GTI_vs_Actual_GTI] = useState();
  // const [PVSyst_GHI_vs_Actual_GHI, setPVSyst_GHI_vs_Actual_GHI] = useState();
  // const [PVSyst_Energy_vs_Contractual_Energy, setPVSyst_Energy_vs_Contractual_Energy] = useState();
  // const [T_Cell_Avg_C, setT_Cell_Avg_C] = useState();
  // const [Actual_Inverter_Energy_KWh, setActual_Inverter_Energy_KWh] = useState();
  // const [Actual_Export_Energy_KWh, setActual_Export_Energy_KWh] = useState();
  // const [Actual_Import_Energy_KWh, setActual_Import_Energy_KWh] = useState();
  // const [AC_loss_per, setAC_loss_per] = useState();
  // const [Net_Energy, setNet_Energy] = useState();
  // const [Normalised_Energy_KWh, setNormalised_Energy_KWh] = useState();
  // const [Excess_Shortfall_Normalised_KWh, setExcess_Shortfall_Normalised_KWh] = useState();
  // const [Excess_Shortfall_Normalised_in_percentage, setExcess_Shortfall_Normalised_in_percentage] = useState();
  // const [Excess_Shortfall_KWh, setExcess_Shortfall_KWh] = useState();
  // const [Excess_Shortfall__in_percentage, setExcess_Shortfall__in_percentage] = useState();

  // Define initial form values
  const initialValues = {
    Month: '',
    PVSYST_GHI: '',
    PVSYST_GTI: '',
    PVSYST_Energy: '',
    Contractual_Energy: '',
    Actual_GTI: '',
    Actual_GHI: '',
    PVSyst_GTI_vs_Actual_GTI: '',
    PVSyst_GHI_vs_Actual_GHI: '',
    PVSyst_Energy_vs_Contractual_Energy: '',
    T_Cell_Avg_C: '',
    Actual_Inverter_Energy_KWh: '',
    Actual_Export_Energy_KWh: '',
    Actual_Import_Energy_KWh: '',
    AC_loss_per: '',
    Net_Energy: '',
    Normalised_Energy_KWh: '',
    Excess_Shortfall_Normalised_KWh: '',
    Excess_Shortfall_Normalised_in_percentage: '',
    Excess_Shortfall_KWh: '',
    Excess_Shortfall__in_percentage: '',
  };

  // Define validation function
  const validate = (values) => {
    const errors = {};

    // Add validation rules for each field
    if (!values.Month) {
      errors.Month = 'Month is required';
    }
    // Add validation rules for numeric fields
    const numericFields = [
      'PVSYST_GHI',
      'PVSYST_GTI',
      'PVSYST_Energy',
      'Contractual_Energy',
      'Actual_GTI',
      'Actual_GHI',
      'PVSyst_GTI_vs_Actual_GTI',
      'PVSyst_GHI_vs_Actual_GHI',
      'PVSyst_Energy_vs_Contractual_Energy',
      'T_Cell_Avg_C',
      'Actual_Inverter_Energy_KWh',
      'Actual_Export_Energy_KWh',
      'Actual_Import_Energy_KWh',
      'AC_loss_per',
      'Net_Energy',
      'Normalised_Energy_KWh',
      'Excess_Shortfall_Normalised_KWh',
      'Excess_Shortfall_Normalised_in_percentage',
      'Excess_Shortfall_KWh',
      'Excess_Shortfall__in_percentage',
    ];

    numericFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = `${field} is required`;
      } else if (isNaN(values[field])) {
        errors[field] = `${field} must be a number`;
      }
    });

    return errors;
  };

  //for data validation and inserting data
  const formik = useFormik({
    initialValues,
    validate, // Use the validation function
    onSubmit: async (values) => {
      // Handle form submission here
      console.log(values);
      try {
        // Make an HTTP POST request to the specified URL
        const response = await fetch('https://greenenco-api.onrender.com/details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Handle success, e.g., show a success message
          console.log('Form data submitted successfully');
          routeChange();

        } else {
          // Handle errors, e.g., show an error message
          console.error('Failed to submit form data');
        }

      } catch (error) {
        // Handle network or other errors
        console.error('An error occurred while submitting form data', error);
      }
    }
  }

  );

  //to navigate to read path after inserting data
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../read`;
    navigate(path);
  }

  // const handleAdd = () => {
  //   handleSubmit();
  //   routeChange();
  // }

  // const handleSubmit = () => {
  //   console.log(Month);


  //   var formData = new FormData();
  //   formData.append("Month", Month);
  //   formData.append("PVSYST_GHI", PVSYST_GHI);
  //   formData.append("PVSYST_GTI", PVSYST_GTI);
  //   formData.append("PVSYST_Energy", PVSYST_Energy);
  //   formData.append("Contractual_Energy", Contractual_Energy);
  //   formData.append("Actual_GTI", Actual_GTI);
  //   formData.append("Actual_GHI", Actual_GHI);
  //   formData.append("PVSyst_GTI_vs_Actual_GTI", PVSyst_GTI_vs_Actual_GTI);
  //   formData.append("PVSyst_GHI_vs_Actual_GHI", PVSyst_GHI_vs_Actual_GHI);
  //   formData.append("PVSyst_Energy_vs_Contractual_Energy", PVSyst_Energy_vs_Contractual_Energy);
  //   formData.append("T_Cell_Avg_C", T_Cell_Avg_C);
  //   formData.append("Actual_Inverter_Energy_KWh", Actual_Inverter_Energy_KWh);
  //   formData.append("Actual_Export_Energy_KWh", Actual_Export_Energy_KWh);
  //   formData.append("Actual_Import_Energy_KWh", Actual_Import_Energy_KWh);
  //   formData.append("AC_loss_per", AC_loss_per);
  //   formData.append("Net_Energy", Net_Energy);
  //   formData.append("Normalised_Energy_KWh", Normalised_Energy_KWh);
  //   formData.append("Excess_Shortfall_Normalised_KWh", Excess_Shortfall_Normalised_KWh);
  //   formData.append("Excess_Shortfall_Normalised_in_percentage", Excess_Shortfall_Normalised_in_percentage);
  //   formData.append("Excess_Shortfall_KWh", Excess_Shortfall_KWh);
  //   formData.append("Excess_Shortfall__in_percentage", Excess_Shortfall__in_percentage);
  //   for (var key of formData.entries()) {
  //     console.log(key[0] + ', ' + key[1])
  //   }

  //   axios.post("https://greenenco-api.onrender.com/details", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   setMonth("");
  //   setPVSYST_GHI();
  //   setPVSYST_GTI();
  //   setPVSYST_Energy();
  //   setContractual_Energy();
  //   setActual_GTI();
  //   setActual_GHI();
  //   setPVSyst_GTI_vs_Actual_GTI();
  //   setPVSyst_GHI_vs_Actual_GHI();
  //   setPVSyst_Energy_vs_Contractual_Energy();
  //   setT_Cell_Avg_C();
  //   setActual_Inverter_Energy_KWh();
  //   setActual_Export_Energy_KWh();
  //   setActual_Import_Energy_KWh();
  //   setAC_loss_per();
  //   setNet_Energy();
  //   setNormalised_Energy_KWh();
  //   setExcess_Shortfall_Normalised_KWh();
  //   setExcess_Shortfall_Normalised_in_percentage();
  //   setExcess_Shortfall_KWh();
  //   setExcess_Shortfall__in_percentage();
  // };

  return (
    <div id="body">
      <form onSubmit={formik.handleSubmit}>
        <div id="form">
          <h1>Create</h1>
          <label htmlFor="Month">Month:</label>
          {formik.touched.Month && formik.errors.Month ? (
            <div className="error">{formik.errors.Month}</div>
          ) : null}
          <input
            type="text"
            id="Month"
            name="Month"
            value={formik.values.Month}
            onChange={formik.handleChange}
          />

          <div>
            <label htmlFor="PVSYST_GHI">PVSYST_GHI:</label>
            {formik.touched.PVSYST_GHI && formik.errors.PVSYST_GHI ? (
              <div className="error">{formik.errors.PVSYST_GHI}</div>
            ) : null}
            <input
              type="number"
              id="PVSYST_GHI"
              name="PVSYST_GHI"
              value={formik.values.PVSYST_GHI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="PVSYST_GTI">PVSYST_GTI:</label>
            {formik.touched.PVSYST_GTI && formik.errors.PVSYST_GTI ? (
              <div className="error">{formik.errors.PVSYST_GTI}</div>
            ) : null}
            <input
              type="number"
              id="PVSYST_GTI"
              name="PVSYST_GTI"
              value={formik.values.PVSYST_GTI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="PVSYST_Energy">PVSYST_Energy:</label>
            {formik.touched.PVSYST_Energy && formik.errors.PVSYST_Energy ? (
              <div className="error">{formik.errors.PVSYST_Energy}</div>
            ) : null}
            <input
              type="number"
              id="PVSYST_Energy"
              name="PVSYST_Energy"
              value={formik.values.PVSYST_Energy}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Contractual_Energy">Contractual_Energy:</label>
            {formik.touched.Contractual_Energy && formik.errors.Contractual_Energy ? (
              <div className="error">{formik.errors.Contractual_Energy}</div>
            ) : null}
            <input
              type="number"
              id="Contractual_Energy"
              name="Contractual_Energy"
              value={formik.values.Contractual_Energy}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Actual_GTI">Actual_GTI:</label>
            {formik.touched.Actual_GTI && formik.errors.Actual_GTI ? (
              <div className="error">{formik.errors.Actual_GTI}</div>
            ) : null}
            <input
              type="number"
              id="Actual_GTI"
              name="Actual_GTI"
              value={formik.values.Actual_GTI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Actual_GHI">Actual_GHI:</label>
            {formik.touched.Actual_GHI && formik.errors.Actual_GHI ? (
              <div className="error">{formik.errors.Actual_GHI}</div>
            ) : null}
            <input
              type="number"
              id="Actual_GHI"
              name="Actual_GHI"
              value={formik.values.Actual_GHI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="PVSyst_GTI_vs_Actual_GTI">PVSyst_GTI_vs_Actual_GTI:</label>
            {formik.touched.PVSyst_GTI_vs_Actual_GTI && formik.errors.PVSyst_GTI_vs_Actual_GTI ? (
              <div className="error">{formik.errors.PVSyst_GTI_vs_Actual_GTI}</div>
            ) : null}
            <input
              type="number"
              id="PVSyst_GTI_vs_Actual_GTI"
              name="PVSyst_GTI_vs_Actual_GTI"
              value={formik.values.PVSyst_GTI_vs_Actual_GTI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="PVSyst_GHI_vs_Actual_GHI">PVSyst_GHI_vs_Actual_GHI:</label>
            {formik.touched.PVSyst_GHI_vs_Actual_GHI && formik.errors.PVSyst_GHI_vs_Actual_GHI ? (
              <div className="error">{formik.errors.PVSyst_GHI_vs_Actual_GHI}</div>
            ) : null}
            <input
              type="number"
              id="PVSyst_GHI_vs_Actual_GHI"
              name="PVSyst_GHI_vs_Actual_GHI"
              value={formik.values.PVSyst_GHI_vs_Actual_GHI}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="PVSyst_Energy_vs_Contractual_Energy">PVSyst_Energy_vs_Contractual_Energy:</label>
            {formik.touched.PVSyst_Energy_vs_Contractual_Energy && formik.errors.PVSyst_Energy_vs_Contractual_Energy ? (
              <div className="error">{formik.errors.PVSyst_Energy_vs_Contractual_Energy}</div>
            ) : null}
            <input
              type="number"
              id="PVSyst_Energy_vs_Contractual_Energy"
              name="PVSyst_Energy_vs_Contractual_Energy"
              value={formik.values.PVSyst_Energy_vs_Contractual_Energy}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="T_Cell_Avg_C">T_Cell_Avg_C:</label>
            {formik.touched.T_Cell_Avg_C && formik.errors.T_Cell_Avg_C ? (
              <div className="error">{formik.errors.T_Cell_Avg_C}</div>
            ) : null}
            <input
              type="number"
              id="T_Cell_Avg_C"
              name="T_Cell_Avg_C"
              value={formik.values.T_Cell_Avg_C}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Actual_Inverter_Energy_KWh">Actual_Inverter_Energy_KWh:</label>
            {formik.touched.Actual_Inverter_Energy_KWh && formik.errors.Actual_Inverter_Energy_KWh ? (
              <div className="error">{formik.errors.Actual_Inverter_Energy_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Actual_Inverter_Energy_KWh"
              name="Actual_Inverter_Energy_KWh"
              value={formik.values.Actual_Inverter_Energy_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Actual_Export_Energy_KWh">Actual_Export_Energy_KWh:</label>
            {formik.touched.Actual_Export_Energy_KWh && formik.errors.Actual_Export_Energy_KWh ? (
              <div className="error">{formik.errors.Actual_Export_Energy_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Actual_Export_Energy_KWh"
              name="Actual_Export_Energy_KWh"
              value={formik.values.Actual_Export_Energy_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Actual_Import_Energy_KWh">Actual_Import_Energy_KWh:</label>
            {formik.touched.Actual_Import_Energy_KWh && formik.errors.Actual_Import_Energy_KWh ? (
              <div className="error">{formik.errors.Actual_Import_Energy_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Actual_Import_Energy_KWh"
              name="Actual_Import_Energy_KWh"
              value={formik.values.Actual_Import_Energy_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="AC_loss_per">AC_loss_per:</label>
            {formik.touched.AC_loss_per && formik.errors.AC_loss_per ? (
              <div className="error">{formik.errors.AC_loss_per}</div>
            ) : null}
            <input
              type="number"
              id="AC_loss_per"
              name="AC_loss_per"
              value={formik.values.AC_loss_per}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Net_Energy">Net_Energy:</label>
            {formik.touched.Net_Energy && formik.errors.Net_Energy ? (
              <div className="error">{formik.errors.Net_Energy}</div>
            ) : null}
            <input
              type="number"
              id="Net_Energy"
              name="Net_Energy"
              value={formik.values.Net_Energy}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Normalised_Energy_KWh">Normalised_Energy_KWh:</label>
            {formik.touched.Normalised_Energy_KWh && formik.errors.Normalised_Energy_KWh ? (
              <div className="error">{formik.errors.Normalised_Energy_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Normalised_Energy_KWh"
              name="Normalised_Energy_KWh"
              value={formik.values.Normalised_Energy_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Excess_Shortfall_Normalised_KWh">Excess_Shortfall_Normalised_KWh:</label>
            {formik.touched.Excess_Shortfall_Normalised_KWh && formik.errors.Excess_Shortfall_Normalised_KWh ? (
              <div className="error">{formik.errors.Excess_Shortfall_Normalised_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Excess_Shortfall_Normalised_KWh"
              name="Excess_Shortfall_Normalised_KWh"
              value={formik.values.Excess_Shortfall_Normalised_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Excess_Shortfall_Normalised_in_percentage">Excess_Shortfall_Normalised_in_percentage:</label>
            {formik.touched.Excess_Shortfall_Normalised_in_percentage && formik.errors.Excess_Shortfall_Normalised_in_percentage ? (
              <div className="error">{formik.errors.Excess_Shortfall_Normalised_in_percentage}</div>
            ) : null}
            <input
              type="number"
              id="Excess_Shortfall_Normalised_in_percentage"
              name="Excess_Shortfall_Normalised_in_percentage"
              value={formik.values.Excess_Shortfall_Normalised_in_percentage}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Excess_Shortfall_KWh">Excess_Shortfall_KWh:</label>
            {formik.touched.Excess_Shortfall_KWh && formik.errors.Excess_Shortfall_KWh ? (
              <div className="error">{formik.errors.Excess_Shortfall_KWh}</div>
            ) : null}
            <input
              type="number"
              id="Excess_Shortfall_KWh"
              name="Excess_Shortfall_KWh"
              value={formik.values.Excess_Shortfall_KWh}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="Excess_Shortfall__in_percentage">Excess_Shortfall__in_percentage:</label>
            {formik.touched.Excess_Shortfall__in_percentage && formik.errors.Excess_Shortfall__in_percentage ? (
              <div className="error">{formik.errors.Excess_Shortfall__in_percentage}</div>
            ) : null}
            <input
              type="number"
              id="Excess_Shortfall__in_percentage"
              name="Excess_Shortfall__in_percentage"
              value={formik.values.Excess_Shortfall__in_percentage}
              onChange={formik.handleChange}
            />
            <br />
            <br /> 
            <button className='button' type="submit">Submit</button>
            <div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Create