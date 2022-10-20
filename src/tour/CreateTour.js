import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

const useStyle = makeStyles({
  heading: {
    marginTop: "2rem",
  },
});

function CreateTour() {
  const classes = useStyle();
  return (
    <>
      <Box textAlign="center" className={classes.heading} p={2}>
        <Typography variant="h3">CreateTour 🏖️</Typography>
      </Box>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="duration"
                  name="duration"
                  variant="outlined"
                  required
                  fullWidth
                  id="duration"
                  label="Duration"
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default CreateTour;
