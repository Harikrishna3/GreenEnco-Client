
import {
  useNavigate,

} from 'react-router-dom';
import { useFormik } from 'formik';
import './Create.css'

const Create = () => {

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
        // Make an HTTP POST request to the specified URL like http://localhost:3500/deltails
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

  return (
    <div id="body">
      <form onSubmit={formik.handleSubmit}>
        <div id="form" >
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