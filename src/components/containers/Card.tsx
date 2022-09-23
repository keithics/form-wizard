function Card({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="max-w-7xl">
            <div className="bg-gray-50 sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
