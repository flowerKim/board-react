import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Authentication from "../Authentication";
import BoardMain from "../BoardMain";
import useUserStore from "../../stores/useStore";
import { useCookies } from "react-cookie";
import axios from "axios";
import LeftMenu from "../Navigation/LeftMenu";

function MainLayout() {
  const [boardResponse, setBoardResponse] = useState("");
  const [cookies] = useCookies();
  const { user } = useUserStore();

  const getBoard = async (token) => {
    const requestOption = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get("http://localhost:4000/api/board/", requestOption)
      .then((response) => {
        console.log("response.data ", response);
        setBoardResponse(response.data);
      })
      .catch((error) => "");
  };

  useEffect(() => {
    const token = cookies.token;
    if (token) getBoard(token);
    else setBoardResponse("");
    console.log(user);
    console.log("cookies token", cookies.token);
  }, [cookies.token]);

  return (
    <>
      <Navigation />
      <div className="AppContainer">
        <LeftMenu />
        {user ? <BoardMain /> : <Authentication />}
      </div>
    </>
  );
}

export default MainLayout;
