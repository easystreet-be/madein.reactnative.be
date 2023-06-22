import { useRouter } from "next/router";
import { useEffect } from "react";

const HomePage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/projects");
  }, [push]);
  return <p></p>;
};

export default HomePage;
