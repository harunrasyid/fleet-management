import { useState } from "react";

export function useModal(initial = false) {
  const [isShow, setShow] = useState<boolean>(initial);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return {
    isShow,
    openModal,
    closeModal,
  };
}
