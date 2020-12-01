import { useEffect, useState } from "react";

export function useTimeSince(
  since: Date
): { hours: string; minutes: string; seconds: string } {
  const [timeSince, setTimeSince] = useState({
    hours: "xxxx",
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
    }, 1000);
    return () => clearInterval(interval);
  }, [since]);

  return timeSince;
}
