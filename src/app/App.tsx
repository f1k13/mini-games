import GameBoard from "@/widgets/game-board/ui/game-board";
import "./styles/main.css";
import Modal from "@/shared/ui/modal/modal";
import { useEffect, useState } from "react";
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
    isOpen(true);
    isAuth ? isOpen(false) : isOpen(true);
  });
  return (
    <div className="h-screen mt-10 flex justify-center flex-col-reverse items-center">
      <GameBoard />
      {isAuth ? (
        <span className="text-2xl  bg-secondary px-8 py-3 rounded-xl  ">
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
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="bg-main p-2 rounded-xl text-textColor placeholder:text-textColor focus:bg-secondary border border-main transition ease-in-out delay-250 text-color outline-none text-1xl placeholder:text-main"
              placeholder="Введите ваш nickname"
            />
            <button
              onClick={loginUser}
              className="mt-5 bg-main p-2 rounded-xl text-textColor hover:bg-secondary border border-main transition ease-in-out delay-250"
            >
              Войти
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default App;
