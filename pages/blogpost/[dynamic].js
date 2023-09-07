import { useRouter } from "next/router";
import React from "react";

const dynamic = () => {
  const router = useRouter();
  const route = router.query.dynamic;
  console.log(route);

  return <p>{route}</p>;
};

export default dynamic;
