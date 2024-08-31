import * as React from 'react';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const Parent = () => {

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
            <h1 className="mb-4">Parent</h1>
          </div>

          <div className="col-md-12 mb-4">
            <button className="btn btn-info" onClick={handleClickOpen}>+ Add Parent</button>
          </div>

          {/* table  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>Parent name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>email</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>phone</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>job</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>address</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>adjective of parent</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>is allowed to receive children</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">sayed</TableCell>
                  <TableCell align="center">sayed@gmail.com</TableCell>
                  <TableCell align="center">01210304516</TableCell>
                  <TableCell align="center">doctor</TableCell>
                  <TableCell align="center">zagazig</TableCell>
                  <TableCell align="center">father</TableCell>
                  <TableCell align="center">yes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>

      {/*add Parent Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogTitle id="form-dialog-title">Add parent</DialogTitle>

        <DialogContent>
          <div className='container'>
            <div className='row'>

              {/* Parent Name  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="Parent-name">Parent Name</InputLabel>
                  <OutlinedInput
                    id="Parent-name"
                    margin="dense"
                    label="Parent Name"
                  />
                </FormControl>
              </div>

              {/* email  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="email">email</InputLabel>
                  <OutlinedInput
                    id="email"
                    margin="dense"
                    label="email"
                    type='email'
                  />
                </FormControl>
              </div>

              {/* phone  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="phone">phone</InputLabel>
                  <OutlinedInput
                    id="phone"
                    margin="dense"
                    label="phone"
                  />
                </FormControl>
              </div>

              {/* job  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="job">job</InputLabel>
                  <OutlinedInput
                    id="job"
                    margin="dense"
                    label="job"
                  />
                </FormControl>
              </div>

              {/* address  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="address">address</InputLabel>
                  <OutlinedInput
                    id="address"
                    margin="dense"
                    label="address"
                  />
                </FormControl>
              </div>

              {/* adjective of parent  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="adjective-of-parent">adjective of parent</InputLabel>
                  <Select
                    id="adjective-of-parent"
                    displayEmpty
                    label="adjective of parent"
                  >
                    <MenuItem value=''>
                      <em>select adjective</em>
                    </MenuItem>
                    <MenuItem value=''>father</MenuItem>
                    <MenuItem value=''>mother</MenuItem>
                    <MenuItem value=''>brother</MenuItem>
                    <MenuItem value=''>uncle</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* is allowed to receive children  */}
              <div className='col-md-12 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <FormLabel htmlFor="is-allowed-to-receive-children">is allowed to receive children?</FormLabel>
                  <RadioGroup
                    name="radio-buttons-group"
                    defaultValue='yes'
                  >
                    <div className='d-flex'>
                      <FormControlLabel value='yes' control={<Radio />} label='yes' />
                      <FormControlLabel value='no' control={<Radio />} label='no' />
                    </div>
                  </RadioGroup>
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
  );
}

export default Parent;
