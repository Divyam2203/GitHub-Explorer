import axios from "axios";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import ViewArea from "./components/ViewArea";

//  `https://api.github.com/search/repositories?q=${data.text}`,
export default function App() {
  const [inputString, setInputString] = useState("");
  const [receivedData, setReceivedData] = useState<any | null>({
    total_count: 0,
    incomplete_results: false,
    items: [],
  });

  const getData = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=10`,
      );
      setReceivedData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  function handleSearch(event: any) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    setInputString(data.text as string);
    //console.log(inputString);
  }

  useEffect(() => {
    let timerOut = setTimeout(() => {
      if (inputString !== "") {
        console.log("fetching");
        getData(inputString as string);
      }
    }, 700);
    return () => {
      clearTimeout(timerOut);
    };
  }, [inputString]);

  return (
    <div className="m-0 h-screen overflow-auto p-0">
      <Hero handleSearch={handleSearch} />
      <ViewArea data={receivedData} />
    </div>
  );
}
