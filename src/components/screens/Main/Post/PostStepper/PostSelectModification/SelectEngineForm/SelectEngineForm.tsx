import SubmitButton from "@components/ui/Button/SubmitButton";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  RadioGroup,
  Stack,
  FormLabel,
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  incrementStep,
  setFormSelectedEngine,
  setFormSelectedTransport,
} from "@store/reducers/stepper/stepper.slice";
import { SelectFormProps } from "../PostSelectModification.types";

import AbsoluteBox from "@components/modules/AbsoluteBox";

enum Options {
  Option1 = "4",
  Option2 = "6",
}
const name = "selectedEngine";

const SelectEngineForm: FC<SelectFormProps> = ({ expanded }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        selectedEngine: Options.Option1.toString(),
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          dispatch(setFormSelectedEngine(values.selectedEngine));
          console.log(values.selectedEngine);
          dispatch(incrementStep());
        }, 250);
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup
              name={name}
              value={values.selectedEngine.toString()}
              onChange={(event) => {
                setFieldValue(name, event.currentTarget.value);
              }}
            >
              <FormControlLabel
                value={Options.Option1}
                control={<Radio required />}
                label={Options.Option1}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <Divider sx={{ width: "250px", marginLeft: "16px" }} />
              <FormControlLabel
                value={Options.Option2}
                control={<Radio required />}
                label={Options.Option2}
                labelPlacement="start"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: expanded === "panel1" ? "initial" : "none" }}>
            <AbsoluteBox>
              <SubmitButton type="submit" />
            </AbsoluteBox>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SelectEngineForm;
