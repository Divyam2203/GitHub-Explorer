import { useEffect, useState } from "react";
import Cards from "./Cards";

interface dataFormat {
  total_count: number;
  incomplete_result: boolean;
  items: any;
}

interface viewAreaProp{
  searchString : string
}


export default function ViewArea({searchString} : viewAreaProp) {

  const [data, setData] = useState<dataFormat>({
    total_count: 0,
    incomplete_result: false,
    items: [],
  });

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${searchString}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //const { total_count, incomplete_result, items } = Data;
    console.log(searchString, data.total_count, data.incomplete_result, data.items);
  }, []);

  return (
    <div className="flex justify-evenly bg-purps">
      <Cards  />
    </div>
  );
}
