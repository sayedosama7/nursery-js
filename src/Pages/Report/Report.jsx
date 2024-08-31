import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">report page</h1>
          </div>

          {/* table  */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className='fw-bold text-info'>report</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>report</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>report</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>report</TableCell>
                  <TableCell align="center" className='fw-bold text-info'>report</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell align="center">report</TableCell>
                  <TableCell align="center">report</TableCell>
                  <TableCell align="center">report</TableCell>
                  <TableCell align="center">report</TableCell>
                  <TableCell align="center">report</TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Profile