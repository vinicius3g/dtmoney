import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  function hanldeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function hanldeCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header openOnNewTransactionModal={hanldeOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hanldeCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
