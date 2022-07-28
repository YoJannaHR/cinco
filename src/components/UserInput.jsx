import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    dispatch(changeUser(userName));
    navigate("/pokedext");
  };

  return (
    <div className="user-container">
      {/* <img  src="https://i.ibb.co/nQXSxg5/pokebola.png" alt="" /> */}
      <img
        className="img-user"
        src="https://i.ibb.co/yB6VMRy/klipartz-com.png"
        // src="https://i.ibb.co/qYxWs3v/165f659fbdab9f3c143d50c1f172310c.png"
        alt="klipartz-com"
        border="0"
      />

      <div className="form-user">
        <form onSubmit={submit}>
          <input
            className="input-user"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter a name"
          />
          <div className="pokebola" onClick={submit}>
              <div className="pokebola-botao"></div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
