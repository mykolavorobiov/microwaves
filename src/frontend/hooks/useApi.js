import { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { UserContext } from "../contexts";

export function useApi() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [requestConfig, setRequestConfig] = useState(null);
  const loggedInUser = useContext(UserContext);
  const controller = useMemo(() => new AbortController(), []);

  useEffect(() => {
    let canAbort = false;

    if (!requestConfig) return;

    requestConfig.signal = controller.signal;

    axios(requestConfig)
      .then(({ data }) => setResponse(data))
      .catch((error) => setError(error));

    return () => {
      if (canAbort) {
        return controller.abort();
      }

      canAbort = true;
    };
  }, [controller, requestConfig, loggedInUser, setResponse, setError]);

  return [setRequestConfig, response, error];
}
