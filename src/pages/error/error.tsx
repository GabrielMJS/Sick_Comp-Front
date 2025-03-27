import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as any;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-xl text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      {error && (
        <p className="mt-2 text-sm text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go back Home
      </Link>
    </div>
  );
}
