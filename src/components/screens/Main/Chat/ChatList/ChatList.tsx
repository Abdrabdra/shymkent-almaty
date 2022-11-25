import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import ChatRow from "./ChatRow";

const data = [
  {
    id: 0,
    car: "Шымкент Алматы",
    name: "Акжол",
  },
  {
    id: 1,
    car: "Шымкент Алматы",
    name: "Акжол",
  },
  {
    id: 2,
    car: "Шымкент Алматы",
    name: "Акжол",
  },
  {
    id: 3,
    car: "Шымкент Алматы",
    name: "Акжол",
  },
  {
    id: 4,
    car: "Шымкент Алматы",
    name: "Акжол",
  },
];

const ChatList = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={1}>
          {data.map((row, index) => (
            <ChatRow data={row} key={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ChatList;
