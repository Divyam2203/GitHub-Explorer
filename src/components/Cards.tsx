export default function Cards({ item }: any) {
  return (
    <>
      <div className="my-4">
        <a href={item.html_url} target="_blank">
          <div className="relative mx-auto flex max-w-md cursor-pointer flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg duration-200 hover:scale-105 hover:shadow-xl md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0">
            <div className="flex w-full flex-col space-y-2 bg-white p-3 md:w-4/6">
              <h3 className="truncate text-xl font-black text-gray-800 md:text-3xl">
                {item.full_name}
              </h3>
              <div className="flex">
                <div className="rounded-full bg-slate-300">
                  <img
                    src={item.owner.avatar_url}
                    alt="avatar"
                    className="size-6 rounded-full"
                  />
                </div>
                <p className="ml-2 text-sm font-bold text-gray-600">
                  {item.owner.login}
                </p>
              </div>
              <p className="text-base text-gray-500 md:text-lg">
                {item.description}
              </p>

              <div className="item-center flex justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="ml-1 text-sm font-bold text-gray-600">
                    {item.stargazers_count}
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    viewBox="0 1 20 20"
                    fill="currentColor"
                  >
                    <path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" />
                  </svg>
                  <p className="ml-1 text-sm font-bold text-gray-600">
                    {item.stargazers_count}
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-1 text-sm font-bold text-gray-600">
                    {item.stargazers_count}
                  </p>
                </div>
                <div className="hidden rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 md:block">
                  {item.language}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
