import InfoStats from "@components/modules/InfoStat/InfoStat";
import { Box, Container, Stack } from "@mui/material";
import axios from "api/axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Description,
  DoubleTab,
  ImageBox,
  TagBox,
  TitleBox,
} from "./BodyOneHome";

const OneHome = () => {
  const params = useParams();
  const { announceId } = params;

  const [products, setProducts] = React.useState({
    _id: 1,
    title: "фыв",
    to: "фывфыв",
    from: "asdas",
    price: 1111,
    picture: "asdasd",
  });
  useEffect(() => {
    hotelLoad();
  }, []);

  const hotelLoad = async () => {
    const result = await axios.get(`/hotel/${announceId}`);
    setProducts(result.data);
  };

  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          <ImageBox picture={products.picture} />
          <TagBox />
          <TitleBox title={products.title} price={products.price} />
          <DoubleTab />
          <Description />
          <InfoStats views={180} publishDate={"26 ноябрь"} />
        </Stack>
      </Container>
    </Box>
  );
};

export default OneHome;
