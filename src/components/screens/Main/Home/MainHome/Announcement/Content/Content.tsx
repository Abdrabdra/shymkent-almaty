import InfoStats from "@components/modules/InfoStat/InfoStat";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Main from "./Main/Main";

const cars = [
  {
    id: 0,
    image: "",
    title: "Алматы - Шымкент",
    price: 15000,
    city: "Выезд 19 нояб. 20:00",
    publishDate: "19 ноябрь",
    views: 1280,
    tags: { releaseDate: "Алматы", condition: "Шымкент", mileage: "6 часов" },
  },
  {
    id: 1,
    image: "",
    title: "Алматы - Тараз",
    price: 12000,
    city: "Выезд 19 нояб. 20:00",
    publishDate: "19 ноябрь",
    views: 1280,
    tags: { releaseDate: "Алматы", condition: "Тараз", mileage: "6 часов" },
  },
  {
    id: 2,
    image: "",
    title: "Алматы - Кордай",
    price: 10000,
    city: "Выезд 19 нояб. 20:00",
    publishDate: "19 ноябрь",
    views: 1280,
    tags: { releaseDate: "Алматы", condition: "Кордай", mileage: "6 часов" },
  },
  {
    id: 3,
    image: "",
    title: "Алматы - Бишкек",
    price: 20000,
    city: "Выезд 19 нояб. 20:00",
    publishDate: "19 ноябрь",
    views: 1280,
    tags: { releaseDate: "Алматы", condition: "Бишкек", mileage: "6 часов" },
  },
  {
    id: 4,
    image: "",
    title: "Алматы - Чунджа",
    price: 14000,
    city: "Выезд 19 нояб. 20:00",
    publishDate: "19 ноябрь",
    views: 1280,
    tags: { releaseDate: "Алматы", condition: "Чунджа", mileage: "6 часов" },
  },
];

const Content = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/home/one/${id}`);
  };

  return (
    <Box>
      <Typography variant="h4" my={1}>
        Популярные Направления
      </Typography>
      <Stack spacing={1.5}>
        {cars.map((car, index) => (
          <Box
            key={index}
            onClick={() => handleNavigate(car.id)}
            sx={{
              height: "146px",
              backgroundColor: "common.white",
              borderRadius: "10px",
            }}
          >
            <Main
              title={car.title}
              city={car.city}
              price={car.price}
              tags={car.tags}
            />
            <InfoStats views={car.views} publishDate={car.publishDate} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Content;
