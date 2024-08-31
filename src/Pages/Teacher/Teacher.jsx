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

const Teacher = () => {

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
                        <h1 className="mb-4">teacher</h1>
                    </div>

                    <div className="col-md-12 mb-4">
                        <button className="btn btn-info" onClick={handleClickOpen}>+ Add teacher</button>
                    </div>

                    {/* table  */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>name</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>email</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>phone</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>nationality id</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>nursery name</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>age stage</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>services</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="center">sayed osama</TableCell>
                                    <TableCell align="center">sayed@gmail.com</TableCell>
                                    <TableCell align="center">01210304514</TableCell>
                                    <TableCell align="center">19587954423012</TableCell>
                                    <TableCell align="center">tommorrow flowers</TableCell>
                                    <TableCell align="center">babies</TableCell>
                                    <TableCell align="center">services 1</TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>

            {/*add teacher Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle id="form-dialog-title">Add teacher</DialogTitle>

                <DialogContent>
                    <div className='container'>
                        <div className='row'>

                            {/* teacher Name  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="teacher-name">teacher Name</InputLabel>
                                    <OutlinedInput
                                        id="teacher-name"
                                        autoFocus
                                        margin="dense"
                                        label="teacher Name"
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

                            {/* nationality id  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="nationality-id">nationality id</InputLabel>
                                    <OutlinedInput
                                        id="nationality-id"
                                        margin="dense"
                                        label="nationality id"
                                    />
                                </FormControl>
                            </div>

                            {/* nursery name  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="nursery-name">nursery name</InputLabel>
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

                            {/* services  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="services">services</InputLabel>
                                    <Select
                                        id="services"
                                        displayEmpty
                                        label="services"
                                    >
                                        <MenuItem value=''>
                                            <em>select services</em>
                                        </MenuItem>
                                        <MenuItem value=''>services 1</MenuItem>
                                        <MenuItem value=''>services 2</MenuItem>
                                    </Select>
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

export default Teacher;
