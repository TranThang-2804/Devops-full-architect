import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import FlightSearchBox from "../../home/components/FlightSearchBox";
import "./FlightSearchBar.css";
import { Divider, Stack } from "@mui/material";
import WalaTextField from "../../../components/WalaTextField";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import { useSelector } from "react-redux";
import {
  airportSelector,
  dateSelector,
  passengerSelector,
  seatClassSelector,
} from "../../../redux/selectors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props}></Slide>;
});

const FlightSearchBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { adult, child, infant } = useSelector(passengerSelector);
  const { from, to } = useSelector(airportSelector);
  const { departureDate, returnDate } = useSelector(dateSelector);
  const seatClass = useSelector(seatClassSelector);
  const passengerValue = adult
    .toString()
    .concat(
      " Adult, ",
      child.toString(),
      " Child, ",
      infant.toString(),
      " Infant"
    );
  const departureDateTime =
    departureDate.getDate() +
    "/" +
    (departureDate.getMonth() + 1) +
    "/" +
    departureDate.getFullYear();
  const returnDateTime = returnDate
    ? returnDate.getDate() +
      "/" +
      (returnDate.getMonth() + 1) +
      "/" +
      returnDate.getFullYear()
    : "";
  const dateValue = departureDateTime.concat(
    returnDate ? "  ->  " : " One way",
    returnDateTime
  );
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
      >
        <WalaTextField
          sx={{ width: 200 }}
          disabled
          iconStart={
            <FlightTakeoffIcon sx={{ color: "#2196f3", fontSize: 25 }} />
          }
          value={from}
        />
        <WalaTextField
          sx={{ width: 200 }}
          disabled
          iconStart={<FlightLandIcon sx={{ color: "#2196f3", fontSize: 25 }} />}
          value={to}
        />
        <WalaTextField
          sx={{ width: 300 }}
          disabled
          iconStart={<DateRangeIcon sx={{ color: "#2196f3", fontSize: 25 }} />}
          value={dateValue}
        />
        <WalaTextField
          sx={{ width: 250 }}
          disabled
          iconStart={
            <AirlineSeatReclineNormalIcon
              sx={{ color: "#2196f3", fontSize: 25 }}
            />
          }
          value={passengerValue}
        />
        <WalaTextField
          sx={{ width: 200 }}
          disabled
          iconStart={
            <FlightClassIcon sx={{ color: "#2196f3", fontSize: 25 }} />
          }
          value={seatClass}
        />
        <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button>
      </Stack>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent>
          <div id="bar">
            <FlightSearchBox />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FlightSearchBar;
