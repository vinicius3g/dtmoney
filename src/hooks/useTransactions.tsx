import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transactions {
  id?: number;
  amount: number;
  category: string;
  title: string;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// interface TransactionInput {
//     title: string
//     value: number;
//     category: string;
//     type: string
// }

// type TransactionInput = Pick<Transactions, "id" | "createdAt">;

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsAxios {
  transactions: Transactions[];
}

type TransactionInput = Omit<Transactions, "id" | "createdAt">;

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get<TransactionsAxios>("/transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post<any>("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
