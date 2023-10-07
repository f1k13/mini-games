import React from "react";
import styles from "./modal.module.css";
const Modal = ({
  children,
  setActive,
}: {
  children: React.ReactNode;
  active: boolean;
  setActive: (value: boolean) => void;
}) => {
  return (
    <div className={styles.root}>
      <svg
        onClick={() => setActive(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#fff"
        className="absolute top-[290px] right-[750px] text-2xl
        cursor-pointer"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
      <div className="p-20 rounded-xl w-1/4 transition ease-in-out delay-150 bg-bgModal h-96 ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
