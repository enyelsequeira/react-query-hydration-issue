import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomeTable = () => {
  const query = useQuery({
    queryKey: ["key"],
    queryFn: async () => {
      console.log(
        "running on ",
        typeof window === "undefined" ? "server" : "client"
      );
      await sleep(3000);
      return Promise.resolve(5);
    },
    suspense: true,
  });
  return (
    <div>
      <div>{query.data}</div>
    </div>
  );
};

export default HomeTable;
