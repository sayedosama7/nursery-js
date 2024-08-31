/* eslint-disable react/no-unescaped-entities */
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

const Class = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("Opening Dialog");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing Dialog");
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
            <h1 className="mb-4">Classes</h1>
          </div>

          <div className="col-md-12 mb-4">
            <button className="btn btn-info" onClick={handleClickOpen}>+ Add Class</button>
          </div>

          {/* table  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>class name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>students age stage</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>nursery name</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>class type</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>class services</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>class teacher</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>minimum students</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>maximum students</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">baby class</TableCell>
                  <TableCell align="center">10 month</TableCell>
                  <TableCell align="center">Tomorrow's flowers</TableCell>
                  <TableCell align="center">babies</TableCell>
                  <TableCell align="center">services</TableCell>
                  <TableCell align="center">sayed osama</TableCell>
                  <TableCell align="center">10</TableCell>
                  <TableCell align="center">20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>

      {/*add class Dialog */}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogTitle id="form-dialog-title">Add class</DialogTitle>

        <DialogContent>
          <div className='container'>
            <div className='row'>

              {/* class name  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="class-name">Class Name</InputLabel>
                  <OutlinedInput
                    id="class-name"
                    autoFocus
                    margin="dense"
                    label="Class Name"
                  />
                </FormControl>
              </div>

              {/* students age stage  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="students-age-stage">students age stage</InputLabel>
                  <OutlinedInput
                    id="students-age-stage"
                    margin="dense"
                    label="students age stage"
                  />
                </FormControl>
              </div>

              {/* nursery name  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="class-type">nursery name</InputLabel>
                  <Select
                    id="nursery-name"
                    displayEmpty
                    label="nursery name"
                  >
                    <MenuItem value=''>
                      <em>nursery name</em>
                    </MenuItem>
                    <MenuItem value=''>nursery 1</MenuItem>
                    <MenuItem value=''>nursery 2</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* class type  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="class-type" id='class-type-label'>Class Type</InputLabel>
                  <Select
                    labelId="class-type-label"
                    id="class-type"
                    displayEmpty
                    label="Class Type"
                  >
                    <MenuItem value=''>
                      choose Class Type
                    </MenuItem>
                    <MenuItem value=''>Type 1</MenuItem>
                    <MenuItem value=''>Type 2</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* class services  */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="class-type">Class services</InputLabel>
                  <Select
                    id="class-services"
                    displayEmpty
                    label="Class services"
                  >
                    <MenuItem value=''>
                      <em>Class services</em>
                    </MenuItem>
                    <MenuItem value=''>services 1</MenuItem>
                    <MenuItem value=''>services 2</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* class teacher */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="class-teacher">Class Teacher</InputLabel>
                  <Select
                    id="class-teacher"
                    displayEmpty
                    label="Class Teacher"
                  >
                    <MenuItem value=''>
                      <em>Class Teacher</em>
                    </MenuItem>
                    <MenuItem value=''>Teacher 1</MenuItem>
                    <MenuItem value=''>Teacher 2</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* minimum students */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="minimum-students">minimum students</InputLabel>
                  <OutlinedInput
                    id="minimum-students"
                    margin="dense"
                    label="minimum students"
                  />
                </FormControl>
              </div>

              {/* maximum students */}
              <div className='col-md-4 mt-4'>
                <FormControl fullWidth variant="outlined" size='small'>
                  <InputLabel htmlFor="maximum-students">maximum students</InputLabel>
                  <OutlinedInput
                    id="maximum-students"
                    margin="dense"
                    label="maximum students"
                  />
                </FormControl>
              </div>

            </div>
          </div>
        </DialogContent>
        <DialogActions className='d-flex justify-content-between mx-5 pb-4'>
          <Button onClick={handleAdd} className='btn-info' disableElevation>
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default Class;
