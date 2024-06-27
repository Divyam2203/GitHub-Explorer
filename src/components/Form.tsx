import {  useState} from "react";
import ViewArea from "./ViewArea";


export default function Form() {

  const [searchString, setSearchString]=useState("")
  


  function handleSearch(event: any) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data.text)
    setSearchString(data.text as string)

  }

  return (
    <div className="mb-8 flex flex-col bg-background">
      <form onSubmit={handleSearch} className="flex w-4/6 flex-row py-6">
        <div className="w-2 shrink"></div>
        <input
          type="text"
          name="text"
          id="text"
          required
          className="m-2 h-10 w-2/6 min-w-60 rounded-xl border bg-background p-2 brightness-75"
        />
        <button className="m-2 rounded-xl bg-accent p-2">Search</button>
      </form>
      {searchString == "" ?  <></> : <ViewArea searchString={searchString} />}    
    </div>
  );
}
