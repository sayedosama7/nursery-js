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

const Student = () => {

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
                        <h1 className="mb-4">Student</h1>
                    </div>

                    <div className="col-md-12 mb-4">
                        <button className="btn btn-info" onClick={handleClickOpen}>+ Add Student</button>
                    </div>

                    {/* table  */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>student name</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>age</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>age stage</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>submission date</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>admission date</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>medical file</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>behavior file</TableCell>
                                    <TableCell align="center" className='fw-bold text-info'>has brothers</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="center">waad</TableCell>
                                    <TableCell align="center">8 years</TableCell>
                                    <TableCell align="center">primary</TableCell>
                                    <TableCell align="center">1-8-2024</TableCell>
                                    <TableCell align="center">21-9-2024</TableCell>
                                    <TableCell align="center">file</TableCell>
                                    <TableCell align="center">file</TableCell>
                                    <TableCell align="center">yes</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>

            {/*add Student Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                disableScrollLock
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="form-dialog-title">Add student</DialogTitle>

                <DialogContent>
                    <div className='container'>
                        <div className='row'>

                            {/* student Name  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="student-name">student Name</InputLabel>
                                    <OutlinedInput
                                        id="student-name"
                                        autoFocus
                                        margin="dense"
                                        label="student Name"
                                    />
                                </FormControl>
                            </div>

                            {/* age  */}
                            <div className='col-md-4 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="age">age</InputLabel>
                                    <OutlinedInput
                                        id="age"
                                        margin="dense"
                                        label="age"
                                    />
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

                            {/* submission date  */}
                            <div className='col-md-6 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="submission-date">submission date</InputLabel>
                                    <OutlinedInput
                                        id="submission-date"
                                        margin="dense"
                                        label="submission date"
                                        type='date'
                                    />
                                </FormControl>
                            </div>

                            {/* admission date  */}
                            <div className='col-md-6 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="admission-date">admission date</InputLabel>
                                    <OutlinedInput
                                        id="admission-date"
                                        margin="dense"
                                        label="admission date"
                                        type='date'
                                    />
                                </FormControl>
                            </div>

                            {/* medical file  */}
                            <div className='col-md-6 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="medical-file">medical file</InputLabel>
                                    <OutlinedInput
                                        id="medical-file"
                                        margin="dense"
                                        label="medical file"
                                        type='file'
                                    />
                                </FormControl>
                            </div>

                            {/* behavior file  */}
                            <div className='col-md-6 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <InputLabel htmlFor="behavior-file">behavior file</InputLabel>
                                    <OutlinedInput
                                        id="behavior-file"
                                        margin="dense"
                                        label="behavior file"
                                        type='file'
                                    />
                                </FormControl>
                            </div>

                            {/* has brothers  */}
                            <div className='col-md-12 mt-4'>
                                <FormControl fullWidth variant="outlined" size='small'>
                                    <FormLabel htmlFor="has-brothers">has brothers</FormLabel>
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

export default Student;
