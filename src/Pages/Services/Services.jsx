/* eslint-disable react/no-unescaped-entities */
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
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const Services = () => {
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

          <div className="col-md-12">
            <button className="btn btn-info" onClick={handleClickOpen}>+ Add service</button>
          </div>

          {/* table  */}
          <TableContainer component={Paper} className='mt-4'>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>service name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>duration of service</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>nursery name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>service type</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>age stage</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>age stage type</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>service value</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>discount on service</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>number of days</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>service days</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">food</TableCell>
                  <TableCell align="center">one hour</TableCell>
                  <TableCell align="center">Tomorrow's flowers</TableCell>
                  <TableCell align="center">food</TableCell>
                  <TableCell align="center">10 month</TableCell>
                  <TableCell align="center">babies</TableCell>
                  <TableCell align="center">50 $</TableCell>
                  <TableCell align="center">10 $</TableCell>
                  <TableCell align="center">3</TableCell>
                  <TableCell align="center">saturday, sunday , monday</TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/*add service Dialog */}
          <Dialog
            open={open}
            onClose={handleClose}
            disableScrollLock
            aria-describedby="alert-dialog-slide-description"
          >

            <DialogTitle id="form-dialog-title">Add service</DialogTitle>

            <DialogContent>
              <div className='container'>
                <div className='row'>

                  {/* service name */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="service-name">service name</InputLabel>
                      <OutlinedInput
                        id="service-name"
                        margin="dense"
                        label="service name"
                      />
                    </FormControl>
                  </div>

                  {/* duration of service  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="duration-of-service">duration of service</InputLabel>
                      <OutlinedInput
                        id="duration-of-service"
                        margin="dense"
                        label="duration of service"
                      />
                    </FormControl>
                  </div>

                  {/* nursery Name  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="nursery-name">nursery Name</InputLabel>
                      <Select
                        id="nursery-name"
                        displayEmpty
                        label="nursery name"
                      >
                        <MenuItem value=''>
                          <em>select nursery name</em>
                        </MenuItem>
                        <MenuItem value=''>nursery 1</MenuItem>
                        <MenuItem value=''>nursery 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* service type */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="service-type">service type</InputLabel>
                      <Select
                        id="service-type"
                        displayEmpty
                        label="service type"
                      >
                        <MenuItem value=''>
                          <em>select service type</em>
                        </MenuItem>
                        <MenuItem value=''>service type 1</MenuItem>
                        <MenuItem value=''>service type 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* age stage  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="age-stage">age stage</InputLabel>
                      <Select
                        id="age-stage"
                        displayEmpty
                        label="age stage"
                      >
                        <MenuItem value=''>
                          <em>select age stage</em>
                        </MenuItem>
                        <MenuItem value=''>age stage 1</MenuItem>
                        <MenuItem value=''>age stage 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* age stage type */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="age-stage-type">age stage type</InputLabel>
                      <Select
                        id="age-stage-type"
                        displayEmpty
                        label="age stage type"
                      >
                        <MenuItem value=''>
                          <em>select age stage type</em>
                        </MenuItem>
                        <MenuItem value=''>age stage type 1</MenuItem>
                        <MenuItem value=''>age stage type 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {/* service value  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="service-value">service value</InputLabel>
                      <OutlinedInput
                        id="service-value"
                        margin="dense"
                        label="service value"
                      />
                    </FormControl>
                  </div>

                  {/* discount on service  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="discount-on-service">discount on service</InputLabel>
                      <OutlinedInput
                        id="discount-on-service"
                        margin="dense"
                        label="discount on service"
                      />
                    </FormControl>
                  </div>

                  {/* number of days  */}
                  <div className='col-md-4 mt-4'>
                    <FormControl fullWidth variant="outlined" size='small'>
                      <InputLabel htmlFor="number-of-days">number of days</InputLabel>
                      <OutlinedInput
                        id="number-of-days"
                        margin="dense"
                        label="number of days"
                      />
                    </FormControl>
                  </div>

                  {/* choose days  */}
                  <div className="col-md-12">
                    <label className="mt-3 d-flex">choose day</label>
                    <div className="days">
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="1"
                          control={
                            <Checkbox
                            />
                          }
                          label="saturday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="2"
                          control={
                            <Checkbox
                            />
                          }
                          label="sunday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="3"
                          control={
                            <Checkbox
                            />
                          }
                          label="monday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="4"
                          control={
                            <Checkbox
                            />
                          }
                          label="tuesday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="5"
                          control={
                            <Checkbox
                            />
                          }
                          label="wednesday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="4"
                          control={
                            <Checkbox
                            />
                          }
                          label="thrusday"
                        />
                      </div>
                      <div>
                        <FormControlLabel
                          className="d-flex"
                          name="days"
                          value="7"
                          control={
                            <Checkbox
                            />
                          }
                          label="friday"
                        />
                      </div>
                    </div>
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
  );
};

export default Services;
