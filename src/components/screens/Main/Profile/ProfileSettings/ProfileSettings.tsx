import { Box, IconButton, Stack, Typography } from "@mui/material";

import QueryStatsIcon from "@mui/icons-material/QueryStats";

const ProfileSettings = () => (
  <Stack
    p={2}
    spacing={1.8}
    sx={{
      flex: "1",
      bgcolor: "success.100",
      borderRadius: "20px",
      height: "170px",
    }}
  >
    <Box>
      <IconButton color="primary" sx={{ backgroundColor: "secondary.100" }}>
        <QueryStatsIcon sx={{}} />
      </IconButton>
    </Box>
    <Stack spacing={0.7}>
      <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
        Настройки
      </Typography>
      <Typography
        sx={{ fontSize: "12px", fontWeight: 600, color: "secondary.900" }}
      >
        Способ оплаты. Изменение языка, цвета.
      </Typography>
    </Stack>
  </Stack>
);

export default ProfileSettings;
