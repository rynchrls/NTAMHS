import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import propTypes from "prop-types";
import PracticeRoomManagement from "./sub-pages/PracticeRoomManagement";

const AdminPage = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        overflow: "auto",
        textAlign: "center",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        관리자 페이지
      </Typography>
      <TabsComponent value={value} setValue={setValue} />
      {value === 0 && <PracticeRoomManagement />}
    </Box>
  );
};

export default AdminPage;

const TabsComponent = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "200px", // Add spacing between tabs
          "& .MuiTabs-indicator": {
            display: "none", // Hide the underline
          },
          "& .MuiTab-root": {
            color: "gray", // Default tab color
            transition: "0.3s",
            textTransform: "none",
            fontSize: "18px",
            letterSpacing: "0.5px",
            fontWeight: "bold", // Make all tabs bold
            "&:hover": {
              color: "black", // Slightly lighter on hover
            },
            "&.Mui-selected": {
              color: "rgba(0, 0, 0)", // Active tab is black with 0.8 transparency
              fontWeight: "bold",
            },
          },
        }}
      >
        <Tab
          value={0}
          label="연습실 관리"
          disableRipple
          disableFocusRipple
          sx={{ width: "15%" }}
        />
        <Tab
          value={1}
          label="예약현황"
          disableRipple
          disableFocusRipple
          sx={{ width: "15%" }}
        />
        <Tab
          value={2}
          label="회원 관리"
          disableRipple
          disableFocusRipple
          sx={{ width: "15%" }}
        />
        <Tab
          value={3}
          label="공지사항 관리"
          disableRipple
          disableFocusRipple
          sx={{ width: "15%" }}
        />
      </Tabs>
    </Box>
  );
};

TabsComponent.propTypes = {
  value: propTypes.number,
  setValue: propTypes.func,
};
