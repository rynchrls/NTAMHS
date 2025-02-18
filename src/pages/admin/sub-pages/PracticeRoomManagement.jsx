import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "@fontsource/pretendard/300.css";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/700.css";
import propTypes from "prop-types";
import { useState } from "react";

const artCenter1 = [
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
  "연습실",
];

function PracticeRoomManagement() {
  return (
    <Box
      sx={{
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#F6F6F6",
          padding: "8px 24px",
          marginBottom: "36px",
        }}
      >
        <Typography variant="h6">총 연습실 생성 수 : 75</Typography>
      </Box>
      <CreatePracticeRoom />
      <ArtCenter artCenter={artCenter1} title={"제1예술관 (room:25)"} />
      <div
        style={{
          width: "100%",
          borderTop: "2px dashed rgba(0,0,0,0.2)",
          borderTopStyle: "dashed",
          borderTopWidth: "1px",
          marginTop: "2rem",
        }}
      />
      <ArtCenter
        artCenter={artCenter1}
        room={25}
        title={"제2예술관 (room:25)"}
      />
      <div
        style={{
          width: "100%",
          borderTop: "2px dashed rgba(0,0,0,0.2)",
          borderTopStyle: "dashed",
          borderTopWidth: "1px",
          marginTop: "2rem",
        }}
      />
      <ArtCenter artCenter={artCenter1} room={50} title={"기숙사 (room:25)"} />
    </Box>
  );
}

export default PracticeRoomManagement;

const CreatePracticeRoom = () => {
  return (
    <form
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <InputComponent title={"연습실 이름"}>
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <TextField
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-root": {
                height: "24px", // Adjust height
                borderColor: "#0000001A", // Default border color
                "& fieldset": {
                  borderColor: "#0000001A", // Border color when not focused
                },
                "&:hover fieldset": {
                  borderColor: "#0000001A", // Prevent border color change on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0000001A", // Prevent border color change on focus
                },
              },
              "& .MuiInputBase-input": {
                padding: "8px", // Adjust padding
                fontSize: "13px", // Adjust font size
              },
            }}
            placeholder="추가할 연습실의 이름을 입력해 주세요"
            variant="outlined"
          />
        </div>
      </InputComponent>
      <InputComponent title={"연습실 건물"}>
        <div style={{ flexGrow: 1, textAlign: "left", paddingLeft: "1.5rem" }}>
          <SelectComponent option={"제1예술관"} />
          <SelectComponent option={"제2예술관"} />
          <SelectComponent option={"기숙사"} />
        </div>
      </InputComponent>
      <InputComponent title={"사용할 학과"}>
        <div style={{ flexGrow: 1, textAlign: "left", paddingLeft: "1.5rem" }}>
          <SelectComponent option={"무용과"} />
          <SelectComponent option={"음악연극과"} />
          <SelectComponent option={"한국음악과"} />
        </div>
      </InputComponent>
      <InputComponent title={"사용할 학교"}>
        <div style={{ flexGrow: 1, textAlign: "left", paddingLeft: "1.5rem" }}>
          <SelectComponent option={"중학교"} />
          <SelectComponent option={"고등학교"} />
        </div>
      </InputComponent>
      <Box sx={{ width: "100%", textAlign: "center", padding: "2rem" }}>
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#99E7FF",
            borderRadius: "24px",
            width: "250px",
            color: "white", // Text color (adjust if needed)
            fontWeight: "bold",
            fontSize: "14px", // Adjust text size
            "&:hover": {
              backgroundColor: "#80D0EB", // Slightly darker shade on hover
            },
          }}
        >
          생성하기
        </Button>
      </Box>
      <div
        style={{
          width: "100%",
          borderTop: "2px dashed rgba(0,0,0,0.2)",
          borderTopStyle: "dashed",
          borderTopWidth: "1px",
          marginBottom: "2rem",
        }}
      />
      <InputComponent title={"연습실 삭제"}>
        <div
          style={{
            flexGrow: 1,
            textAlign: "left",
            paddingLeft: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.7rem",
          }}
        >
          <SelectComponent option={"제1예술관 / 연습실1"} width={"80%"} />
          <Button
            sx={{
              textAlign: "center",
              backgroundColor: "#99E7FF",
              borderRadius: "24px",
              width: "170px",
              color: "white", // Text color (adjust if needed)
              fontWeight: "bold",
              fontSize: "14px", // Adjust text size
              "&:hover": {
                backgroundColor: "#80D0EB", // Slightly darker shade on hover
              },
            }}
          >
            삭제하기
          </Button>
        </div>
      </InputComponent>
      <div
        style={{
          width: "100%",
          borderTop: "2px dashed rgba(0,0,0,0.2)",
          borderTopStyle: "dashed",
          borderTopWidth: "1px",
          marginTop: "2rem",
        }}
      />
    </form>
  );
};

const InputComponent = ({ children, title, bgcolor, titleBgColor }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: titleBgColor || "#FAFAFA",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "170px",
          backgroundColor: bgcolor || "#F3F3F3",
          textAlign: "center",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Typography height={"100%"}>{title}</Typography>
      </div>
      {children}
    </Box>
  );
};

InputComponent.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  bgcolor: propTypes.string,
  titleBgColor: propTypes.string,
};

const SelectComponent = ({ option, width }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: width || "25%" }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          fontSize: "12px",
          height: "24px", // Set small height
          textAlign: "left",
          "& .MuiOutlinedInput-root": {
            height: "24px", // Adjust outer height
            fontSize: "12px", // Adjust text size
            border: "2px solid #0000001A", // Default border color
            "& fieldset": {
              border: "2px solid #0000001A", // Default border color
            },
            "&:hover fieldset": {
              border: "2px solid #0000001A", // Keep border color same on hover (no black border)
            },
            "&.Mui-focused fieldset": {
              border: "2px solid #0000001A", // Change focus border to #0000001A (no light blue)
            },
            "&.Mui-focused": {
              outline: "none", // Remove default outline
              boxShadow: "none", // Remove glow effect
            },
          },
          "& .MuiSelect-select": {
            padding: "4px 8px", // Reduce padding inside Select
          },
        }}
      >
        <MenuItem value="">{option}</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

SelectComponent.propTypes = {
  option: propTypes.string,
  width: propTypes.string,
};

const ArtCenter = ({ artCenter, room, title }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box sx={{ width: "100%", height: "auto", padding: "2rem 0rem" }}>
      <Typography variant="h6" marginBottom={"2rem"}>
        {title}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 equal columns
          gridTemplateRows: "repeat(5, 1fr)", // 5 equal rows
          gap: "10px", // Spacing between boxes
        }}
      >
        {artCenter.map((data, index) => (
          <Button
            onClick={() => setOpenModal(true)}
            key={index}
            style={{
              backgroundColor: "#F6F6F6",
              height: "auto", // You can adjust height
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontWeight: 600,
            }}
          >
            {`${data}${room ? room + index + 1 : index + 1}`}
          </Button>
        ))}
      </div>
      <ModalComponent open={openModal} handleClose={() => setOpenModal(false)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#D8D8D8",
              height: "auto",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <Typography fontWeight={"bold"}>연습실1 정보</Typography>
          </Box>
          <InputComponent
            title={"비콘"}
            bgcolor={"#E7E7E7"}
            titleBgColor={"#F6F6F6"}
          >
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <Typography>
                비콘 정보값1 / 비콘 정보값2 / 비콘 정보값3
              </Typography>
            </div>
          </InputComponent>
          <InputComponent
            title={"사용학과"}
            bgcolor={"#E7E7E7"}
            titleBgColor={"#F6F6F6"}
          >
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <Typography>한국음악과 / 무용과 / 음악연극과</Typography>
            </div>
          </InputComponent>
          <InputComponent
            title={"사용학교"}
            bgcolor={"#E7E7E7"}
            titleBgColor={"#F6F6F6"}
          >
            <div style={{ flexGrow: 1, textAlign: "center" }}>
              <Typography>고등학교</Typography>
            </div>
          </InputComponent>
        </Box>
      </ModalComponent>
    </Box>
  );
};

ArtCenter.propTypes = {
  artCenter: propTypes.array,
  room: propTypes.number,
  title: propTypes.string,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "auto",
  bgcolor: "transparent",
  borderRadius: "6px",
};

const ModalComponent = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

ModalComponent.propTypes = {
  open: propTypes.bool,
  handleClose: propTypes.func,
  children: propTypes.node,
};
