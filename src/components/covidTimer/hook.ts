import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTimeSince(since: Date) {
  const [timeSince, setTimeSince] = useState({
    hours: "xxx",
    minutes: "xx",
    seconds: "xx",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const seconds = Math.floor((now.getTime() - since.getTime()) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      setTimeSince({
        hours: hours.toString(),
        minutes: (minutes % 60).toString(),
        seconds: (seconds % 60).toString(),
      });
    });
    return () => clearInterval(interval);
  }, [since]);

  return timeSince;
}
