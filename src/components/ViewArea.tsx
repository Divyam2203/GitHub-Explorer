// import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function ViewArea({data}:any) {
  //let items = data.items;
  console.log(data)
  return (
    <>
    <div className="mx-8 flex flex-col justify-center mb-20">
      {data.items.map((item:any)=>(<Cards item={item} />))}
      </div>
    </>
  );
}
