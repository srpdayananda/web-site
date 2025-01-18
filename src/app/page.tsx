import { FC, ReactNode } from "react";
import Home from "./pages/home/page";

interface PageProps {
  children?: ReactNode;
}

const page: FC<PageProps> = ({ children }) => {
  return <div>{children ? children : <Home />}</div>;
};

export default page;
