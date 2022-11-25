import { Box, Divider, Stack, Typography } from "@mui/material";
import { RootState, useTypedSelector } from "@store/index";

const data = [
  {
    title: "Откуда",
    value: "Алматы",
  },
  {
    title: "Куда",
    value: "Шымкент",
  },
  {
    title: "Цена",
    value: "15 000 KZT",
  },
  {
    title: "Выезд",
    value: "19.11.2022, 20:00",
  },
  {
    title: "Транспорт",
    value: "Toyota Camry 70",
  },
  {
    title: "Колчество мест",
    value: "3",
  },
];
const len = data.length;

const DetailsTab = () => {
  const stateGeneration = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedGeneration
  );
  const stateCase = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedCase
  );
  const stateManufacture = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedManufacture
  );
  const stateGear = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedGear
  );
  const stateCondition = useTypedSelector(
    (state: RootState) => state.stepper.form.selectedCondition
  );

  const stateData = [
    { value: stateGeneration, title: "Поколение" },
    { value: stateCase, title: "Кузов" },
    { value: stateManufacture, title: "Год Выпуска" },
    { value: stateGear, title: "Двигатель" },
    { value: stateCondition, title: "Пробег" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Stack>
        {data.map((row, index) => (
          <Stack spacing={1} sx={{ paddingTop: "0.5rem" }}>
            <Box sx={{ display: "flex" }} key={index}>
              <Typography
                sx={{
                  flex: "1",
                  color: "secondary.900",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.title}
              </Typography>
              <Typography
                sx={{
                  flex: "1",
                  display: "display",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                {row.value}
              </Typography>
            </Box>
            {len != index + 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DetailsTab;
