import { Status } from "../../interfaces/statuses";

export default function FetchStatusHandler({status}: {status: Status}) {

  return (
    <div>{status}</div>
  );
}
