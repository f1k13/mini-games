import GameBoard from "@/widgets/game-board/ui/game-board";
import "./styles/main.css";
import Modal from "@/shared/ui/modal/modal";
import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { setUserFx } from "@/entities/user/lib/userEffects";
import { $isAuth } from "@/shared/model/auth/auth";
import { useStore } from "effector-react/effector-react.mjs";
import { $user } from "@/entities/user/model/user";

const App = () => {
  const [open, isOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const isAuth = useStore($isAuth);
  const user = useStore($user);
  const loginUser = () => {
    if (nickname) {
      setUserFx(nickname);
    }
    isOpen(false);
  };
  useEffect(() => {
    isAuth ? isOpen(false) : isOpen(true);
  });
  return (
    <div className="h-screen flex justify-center flex-col-reverse items-center">
      <GameBoard />
      {isAuth ? (
        <span className="text-2xl bg-secondary px-8 py-3 rounded-xl  ">
          {user?.balance}р
        </span>
      ) : (
        <button
          onClick={() => isOpen(!open)}
          className="bg-secondary px-8 py-3 rounded-xl  hover:bg-secondaryHover transition-all"
        >
          Войти
        </button>
      )}
      {open && (
        <Modal active={open} setActive={isOpen}>
          <form className="flex flex-col" action="">
            <TextField
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              id="outlined-basic"
              label="Введите nickname"
              variant="outlined"
            />
            <Button onClick={loginUser} className="mt-5" variant="outlined">
              Войти
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default App;
