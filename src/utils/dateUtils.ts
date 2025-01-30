export const formatLastFed = (dateString: string): string => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${formattedDate} kl. ${formattedTime}`;
};
export const wasRecentlyFed = (lastFed: string): boolean => {
  const lastFedTime = new Date(lastFed).getTime();
  const fourHoursAgo = Date.now() - 4 * 60 * 60 * 1000;

  return lastFedTime > fourHoursAgo;
};
