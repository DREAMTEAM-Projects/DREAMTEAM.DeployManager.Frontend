import { createContext, useContext, useState } from "react";
import { MyContextData } from "../interfaces/context";

const Context = createContext<MyContextData>({
  data: 0,
  dispatchData: () => {},
});

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(0);

  const dispatchData = () => {
    setData((data) => data + 1);
  };
  return (
    <Context.Provider value={{ data, dispatchData }}>
      {children}
    </Context.Provider>
  );
};

const useDeployContext = () => {
  const { ...props } = useContext(Context);
  return {
    ...props,
  };
};

export { ContextProvider, useDeployContext };
