import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import * as React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PostSelectModification from "@components/screens/Main/Post/PostStepper/PostSelectModification";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TopHomeDrawer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/home/filter");
  };

  const [departure, setDeparture] = React.useState("");
  const [arrive, setArrive] = React.useState("");

  const handleDChange = (event: SelectChangeEvent) => {
    setDeparture(event.target.value as string);
  };
  const handleAChange = (event: SelectChangeEvent) => {
    setArrive(event.target.value as string);
  };

  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ flex: "1" }}
    >
      <Box sx={{ flex: "0.3" }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: "common.white" }}
          >
            Откуда
          </InputLabel>
          <Select
            variant={"outlined"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={departure}
            label="Откуда"
            displayEmpty
            onChange={handleDChange}
            sx={{
              borderRadius: "15px",
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "common.white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "common.white",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"Алматы"}>Алматы</MenuItem>
            <MenuItem value={"Шымкент"}>Шымкент</MenuItem>
            <MenuItem value={"Астана"}>Астана</MenuItem>
            <MenuItem value={"Тараз"}>Тараз</MenuItem>
            <MenuItem value={"Талгар"}>Талгар</MenuItem>
            <MenuItem value={"Бишкек"}>Бишкек</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ flex: "0.3" }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: "common.white" }}
          >
            Куда
          </InputLabel>
          <Select
            variant={"outlined"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={arrive}
            label="Куда"
            displayEmpty
            onChange={handleAChange}
            sx={{
              borderRadius: "15px",
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "common.white",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "common.white",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"Алматы"}>Алматы</MenuItem>
            <MenuItem value={"Шымкент"}>Шымкент</MenuItem>
            <MenuItem value={"Астана"}>Астана</MenuItem>
            <MenuItem value={"Тараз"}>Тараз</MenuItem>
            <MenuItem value={"Талгар"}>Талгар</MenuItem>
            <MenuItem value={"Бишкек"}>Бишкек</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Сегодня"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  input: {
                    color: "common.white",
                    "&::placeholder": {
                      textOverflow: "ellipsis !important",
                      color: "common.white",
                    },
                  },
                  color: "common.white",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    "& fieldset": {
                      borderColor: "common.white",
                    },
                    "&:hover fieldset": {
                      borderColor: "common.white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "common.white",
                    },
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Button
        variant="contained"
        sx={{
          borderRadius: "15px",
          height: "50px",
          width: "120px",
          fontSize: "16px",
        }}
      >
        Поиск
      </Button>
    </Stack>
  );
};

export default TopHomeDrawer;
