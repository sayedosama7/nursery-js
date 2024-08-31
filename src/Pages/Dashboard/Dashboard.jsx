import './Dashborad.css'
const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">dashboard</h1>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className=" rounded-9 px-3 pt-3 shadow-6-soft border border-light">
              <h6 className='fw-bold text-secondary'>nursery 1</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon fa fa-user text-success dashborad-icon"></div>
                <div className="flex-column align-items-center justify-content-center">
                  <p className="fw-bold text-info">25 children</p>
                  <p className="fw-bold text-info">2 staff</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className=" rounded-9 px-3 pt-3 shadow-6-soft border border-light">
              <h6 className='fw-bold text-secondary'>nursery 2</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon fas fa-list-check text-danger dashborad-icon"></div>
                <div className="flex-column align-items-center justify-content-center">
                  <p className="fw-bold text-info">25 children</p>
                  <p className="fw-bold text-info">2 staff</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className=" rounded-9 px-3 pt-3 shadow-6-soft border border-light">
              <h6 className='fw-bold text-secondary'>nursery 3</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon fas fa-seedling text-warning dashborad-icon"></div>
                <div className="flex-column align-items-center justify-content-center">
                  <p className="fw-bold text-info">25 children</p>
                  <p className="fw-bold text-info">2 staff</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className=" rounded-9 px-3 pt-3 shadow-6-soft border border-light">
              <h6 className='fw-bold text-secondary'>nursery 4</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="icon fas fa-chart-bar text-primary dashborad-icon"></div>
                <div className="flex-column align-items-center justify-content-center">
                  <p className="fw-bold text-info">25 children</p>
                  <p className="fw-bold text-info">2 staff</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
