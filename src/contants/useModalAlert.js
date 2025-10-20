import React from "react";

export const useModalAlert = () => {
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
    onConfirm: null,
    showCancel: false,
  });

  const showAlert = (config) => {
    setModalState({
      isOpen: true,
      ...config,
    });
  };

  const closeAlert = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return {
    modalState,
    showAlert,
    closeAlert,
  };
};