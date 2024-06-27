export default function Header() {
  return (
    <div className="flex flex-row min-h-80 w-full bg-background">
      <div className="w-4"></div>
      <div className="flex flex-col justify-end w-4/6">
        <div className=" rounded bg-background p-6 pl-0 text-6xl text-tangy">
          Github Explorer
        </div>
        <div className=" bg-background px-8 pb-6 pl-0 text-slate-200">
          Explore Github Repositories and User Profiles
        </div>
      </div>
      <div className="m-auto relative top-16">
        <img src="src\assets\react.svg" alt="github logo" width={300} className="" />
      </div>
      <div className="w-4"></div>
    </div>
  );
}
