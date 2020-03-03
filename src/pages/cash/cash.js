import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Cash = () => {
    const { sessions } = useContext(GlobalContext);
    //Crear tabla para meter los datos en cada HTMLTableRowElement
    //Cómo metemos las fechas?

    const StyledTableCell = withStyles(theme => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles(theme => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }))(TableRow);

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Buy In</StyledTableCell>
                            <StyledTableCell align="center">Gain</StyledTableCell>
                            <StyledTableCell align="center">Profit</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sessions.map(session => session.type === "cash" &&
                            <StyledTableRow>
                                <StyledTableCell align="center">{session.buyIn}€</StyledTableCell>
                                <StyledTableCell align="center">{session.gain}€</StyledTableCell>
                                <StyledTableCell align="center">{session.gain - session.buyIn}€</StyledTableCell>
                                <StyledTableCell align="center">{session.date}</StyledTableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};

export default Cash;