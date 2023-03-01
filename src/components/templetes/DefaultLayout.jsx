import { Footer } from "../atoms/layput/Footer";
import { Header } from "../atoms/layput/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
