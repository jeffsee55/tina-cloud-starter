import * as React from "react";

export const useUrlHash = () => {
  const [hash, setHash] = React.useState(null);
  const onHashChange = React.useCallback(
    (e) => setHash(e.currentTarget.location.hash.replace(/^#/, "")),
    [setHash]
  );
  React.useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
};