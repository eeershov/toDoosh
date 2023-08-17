import { Status, statuses } from "../../interfaces/statuses";

export default function FetchStatusHandler({status}: {status: Status}) {

  function HandleStatus() {
    switch (status) {
      case statuses.loading:
        return <LoadingStyle/>;
      case statuses.error:
        return <ErrorStyle/>;
      default:
        return;
    }
  }

  function ErrorStyle() {
    return (
      <p className="text-center w-full">
        Woops, error getting data from the server.
      </p>
    );
  }

  function LoadingStyle() {
    return (
        <div className="animate-pulse">
          <div className="h-10 w-full flex items-center">
            <div className="m-2 rounded-full bg-gray-200 h-7 w-7"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-64"></div>
          </div>
          <div className="h-10 w-full flex items-center">
            <div className="m-2 rounded-full bg-gray-200 h-7 w-7"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-96"></div>
          </div>
          <div className="h-10 w-full flex items-center">
            <div className="m-2 rounded-full bg-gray-200 h-7 w-7"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-64"></div>
          </div>
        </div>
    );
  }


  return (
    <>
      <HandleStatus/>
    </>
  );
}
