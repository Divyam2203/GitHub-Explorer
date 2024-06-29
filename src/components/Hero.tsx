export default function Hero({ handleSearch }: any) {
  return (
    <div className="relative h-96">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-3 md:px-0">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Github Explorer
        </h1>
        <p className="text-gray-300">
          Explore Github Repositories and Projects
        </p>

        <form
          className="relative w-full max-w-lg rounded-lg border border-gray-200 p-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            id="text"
            name="text"
            required
            className="w-full rounded-md p-3"
            placeholder="Search Repositories"
          />

          <button type="submit" className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
