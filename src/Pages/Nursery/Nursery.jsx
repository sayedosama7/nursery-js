/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Nursery = () => {

  const [open, setOpen] = React.useState(false);
  const [nurseryDetails, setNurseryDetails] = React.useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    workingHoursFrom: '',
    workingHoursTo: '',
    extraWorkingHoursFrom: '',
    extraWorkingHoursTo: ''
  });

  const handleChange = (e) => {
    setNurseryDetails({
      ...nurseryDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleAdd = () => {
    // Here you can handle the form submission to add a new nursery
    console.log(nurseryDetails);
    setOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <h1 className="mb-4">Nursery</h1>
          </div>

          <div className="col-md-12 mb-4">
            <button className="btn btn-info" onClick={handleClickOpen}>+ Add Nursery</button>
          </div>

          {/* table  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>Nursery name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>address</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>email</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>phone</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>working hours</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>extra working hours</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">Tomorrow's flowers</TableCell>
                  <TableCell align="center">zagazig</TableCell>
                  <TableCell align="center">tomorrow_flowers@gmail.com</TableCell>
                  <TableCell align="center">01210304516</TableCell>
                  <TableCell align="center">from : 7.00 am  <br />  to : 2.00 pm</TableCell>
                  <TableCell align="center">from : 2.00 pm <br />  to : 4.00 pm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>

      {/*add Nursery Dialog */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Nursery</DialogTitle>

        <DialogContent>
          <div className='container'>
            <div className='row'>

              {/* Nursery Name  */}
              <div className='col-md-6 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="Nursery-name">Nursery Name</InputLabel>
                  <OutlinedInput
                    id="Nursery-name"
                    autoFocus
                    margin="dense"
                    label="Nursery Name"
                  // value={nurseryDetails.name}
                  // onChange={handleChange}
                  />
                </FormControl>
              </div>

              {/* address */}
              <div className='col-md-6 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="address">address</InputLabel>
                  <OutlinedInput
                    id="address"
                    margin="dense"
                    label="address"
                  // value={nurseryDetails.address}
                  // onChange={handleChange}
                  />
                </FormControl>
              </div>

              {/* Nursery email  */}
              <div className='col-md-6 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="Nursery email">Nursery email</InputLabel>
                  <OutlinedInput
                    id="Nursery email"
                    margin="dense"
                    label="Nursery email"
                    type='email'
                  // value={nurseryDetails.email}
                  // onChange={handleChange}
                  />
                </FormControl>
              </div>

              {/* Nursery phone  */}
              <div className='col-md-6 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="Nursery phone">Nursery phone</InputLabel>
                  <OutlinedInput
                    id="Nursery phone"
                    margin="dense"
                    label="Nursery phone"
                    type='tel'
                  // value={nurseryDetails.phone}
                  // onChange={handleChange}
                  />
                </FormControl>
              </div>

              {/* Nursery working hours  */}
              <div className="row">
                <h6 className='text-primary my-4'>working hours</h6>
                {/* Nursery working hours  from */}
                <div className='col-md-6 mb-3'>
                  <FormControl fullWidth variant="outlined" size='small'>
                    <InputLabel htmlFor="Nursery phone">from</InputLabel>
                    <OutlinedInput
                      id="Nursery working hours"
                      margin="dense"
                      label="Nursery from"
                      type='time'
                    // value={nurseryDetails.workingHoursFrom}
                    // onChange={handleChange}
                    />
                  </FormControl>
                </div>

                {/* Nursery working hours to  */}
                <div className='col-md-6 mb-3'>
                  <FormControl fullWidth variant="outlined" size='small'>
                    <InputLabel htmlFor="Nursery phone">to</InputLabel>
                    <OutlinedInput
                      id="Nursery working hours"
                      margin="dense"
                      label="Nursery from"
                      type='time'
                    // value={nurseryDetails.workingHoursTo}
                    // onChange={handleChange}
                    />
                  </FormControl>
                </div>
              </div>

              {/* Nursery Extra working hours  */}
              <div className="row">
                <h6 className='text-primary my-3'>extra working hours</h6>

                {/* Nursery Extra working hours from  */}
                <div className='col-md-6 mb-3'>
                  <FormControl fullWidth variant="outlined" size='small'>
                    <InputLabel htmlFor="Nursery phone">from</InputLabel>
                    <OutlinedInput
                      id="Nursery working hours"
                      margin="dense"
                      label="Nursery from"
                      type='time'
                    // value={nurseryDetails.extraWorkingHoursFrom}
                    // onChange={handleChange}
                    />
                  </FormControl>
                </div>

                {/* Nursery Extra working hours to */}
                <div className='col-md-6 mb-3'>
                  <FormControl fullWidth variant="outlined" size='small'>
                    <InputLabel htmlFor="Nursery phone">to</InputLabel>
                    <OutlinedInput
                      id="Nursery working hours"
                      margin="dense"
                      label="Nursery from"
                      type='time'
                    // value={nurseryDetails.extraWorkingHoursTo}
                    // onChange={handleChange}
                    />
                  </FormControl>
                </div>
              </div>

            </div>
          </div>
        </DialogContent>
        <DialogActions className='d-flex justify-content-between mx-5 pb-4'>
          <Button onClick={handleAdd} className='btn-info' disableElevation>
            Add
          </Button>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Nursery;
