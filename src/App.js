import { Router } from "./router/Router";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/yqL-06P89Hg",
  name: "ore",
  mail: "xxxxxxxxxxx.com",
  phone: "00120-828-828",
  company: {
    name: "XXXX株式会社"
  },
  web: "https://google.com"
};

export default function App() {
  return <Router />;
}
