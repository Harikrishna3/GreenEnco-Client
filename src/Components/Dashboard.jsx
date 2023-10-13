import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div class="dashboard-container">
        <div class="content">
          <h1>Welcome to Your Dashboard</h1>
          <h4 style={{ color: '#0000CD',display: "inline"}}>GET</h4><p style={{ color: 'blue',marginLeft: "60px" }}>https://greenenco-api.onrender.com/details</p><p style={{marginLeft: "60px"}}>Gives all data</p>
          <h4 style={{ color: '#0000CD' }}>GET</h4> <p style={{ color: 'blue' ,marginLeft: "60px"}}>https://greenenco-api.onrender.com/details/:id</p><p style={{marginLeft: "60px"}}>Gives details of specified Id </p>
          <h4 style={{ color: 'green' }}>POST</h4><p style={{ color: 'blue', marginLeft: "60px" }}>https://greenenco-api.onrender.com/details/:id</p><p style={{marginLeft: "60px"}}>To Create or Add the Data in database</p>
          <h4 style={{ color: '#FFD700' }}>PATCH</h4><p style={{ color: 'blue', marginLeft: "60px" }}>https://greenenco-api.onrender.com/details/:id</p><p style={{marginLeft: "60px"}}>To make a update in specified ID</p>
          <h4 style={{ color: 'red' }}>DELETE</h4><p style={{ color: 'blue', marginLeft: "60px" }}>https://greenenco-api.onrender.com/details/:id</p><p style={{marginLeft: "60px"}}>To delete data of specified ID</p>
          <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
          <p>The backend system serves as the core component for application, responsible for handling data storage, retrieval, and update. Its primary purpose is to support and enable the functionality of the entire application. It does so by providing a RESTful API that allows communication between the frontend and the data store.</p>
          <p><h3>Data Management:</h3> The backend system acts as a bridge between the frontend and the database. It handles CRUD (Create, Read, Update, Delete) operations on the application's data. This means it can create new records, retrieve existing ones, update data, and delete records when necessary.</p>
        </div>

      </div>
    </>
  )
}
export default Dashboard