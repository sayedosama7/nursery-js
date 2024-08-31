import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
const ServicesType = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">Services</h1>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-info">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-utensils fa-xl text-white"></div>
                <p className="fw-bold text-info mt-2 text-white">food</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-secondary">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-music fa-xl text-dark"></div>
                <p className="fw-bold text-info mt-2 text-dark">music</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-success">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-chalkboard text-white fa-xl"></div>
                <p className="fw-bold text-info mt-2 text-white">learning</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-danger">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-hand-holding-medical text-white fa-xl"></div>
                <p className="fw-bold text-info mt-2 text-white">care</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-warning">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-dna text-white fa-xl"></div>
                <p className="fw-bold text-info mt-2 text-white">bathroom</p>
              </div>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <div className=" rounded-9 px-3 pt-3 pb-1 text-center bg-primary">
              <div className="flex-column justify-content-center align-items-center">
                <div className="icon fas fa-bed text-white fa-xl"></div>
                <p className="fw-bold text-info mt-2 text-white">sleep</p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <button className="btn btn-info" onClick={handleClickOpen}>+ Add service type</button>
          </div>

          {/* table  */}
          <TableContainer component={Paper} className='mt-4'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>service type name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">food</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/*add service type Dialog */}
          <Dialog
            open={open}
            onClose={handleClose}
            disableScrollLock
            aria-describedby="alert-dialog-slide-description"
            fullWidth
          >

            <DialogTitle id="form-dialog-title">Add service type</DialogTitle>
            
            <DialogContent>
              <div className='container'>
                <div className='row'>

                  {/* service type name */}
                  <div className='col-md-12 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="service-type-name">service type name</InputLabel>
                      <OutlinedInput
                        id="service-type-name"
                        margin="dense"
                        label="service type name"
                      />
                    </FormControl>
                  </div>



                </div>
              </div>
            </DialogContent>
            <DialogActions className='d-flex justify-content-between mx-5 pb-4'>
              <Button onClick={handleAdd} className='btn-info' disableElevation>Add</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default ServicesType