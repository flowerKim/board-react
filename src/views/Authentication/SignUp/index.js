import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { PostApi } from "../../../apis";

const SignUp = ({ setAuthView }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressDetail, setUserAddressDetail] = useState("");
  const [requestResult, setRequestResult] = useState("");

  const signUpHandler = async () => {
    const data = {
      userEmail,
      userPassword,
      userPasswordCheck,
      userNickname,
      userPhoneNumber,
      userAddress,
      userAddressDetail,
    };

    const signUpResponse = await PostApi("api/auth/signUp", data);
    if (!signUpResponse) {
      alert("회원가입에 실패했습니다.");
      return;
    }
    if (!signUpResponse.result) {
      alert("회원가입에 실패했습니다.");
      return;
    }
    alert("회원가입에 성공했습니다.");
    setAuthView(false);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw", padding: 5 }}>
      <Box>
        <Typography variant="h5">회원가입</Typography>
      </Box>
      <Box height={"50vh"}>
        <TextField
          fullWidth
          label="이메일주소"
          type="email"
          variant="standard"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="비밀번호"
          type="password"
          variant="standard"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <TextField
          fullWidth
          label="비밀번호 확인"
          type="password"
          variant="standard"
          onChange={(e) => setUserPasswordCheck(e.target.value)}
        />
        <TextField
          fullWidth
          label="닉네임"
          variant="standard"
          onChange={(e) => setUserNickname(e.target.value)}
        />
        <TextField
          fullWidth
          label="휴대폰번호"
          variant="standard"
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        />
        <TextField
          fullWidth
          label="주소"
          variant="standard"
          onChange={(e) => setUserAddress(e.target.value)}
        />
        <TextField
          fullWidth
          label="상세주소"
          variant="standard"
          onChange={(e) => {
            setUserAddressDetail(e.target.value);
          }}
        />
        <h3>{requestResult}</h3>
      </Box>

      <Box component="div">
        <Button fullWidth variant="contained" onClick={() => signUpHandler()}>
          회원가입
        </Button>
      </Box>
      <Box component="div" display="flex" mt={2}>
        <Typography>기존 사용자 이신가요?</Typography>
        <Typography fontWeight={800} ml={1} onClick={() => setAuthView(false)}>
          로그인
        </Typography>
      </Box>
    </Card>
  );
};

export default SignUp;
