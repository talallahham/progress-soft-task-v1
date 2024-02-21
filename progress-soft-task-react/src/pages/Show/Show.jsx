import React from "react";
import Show from "../../components/Show/Show";
import Nav from "../../components/Nav/Nav";
import { useLoaderData } from "react-router-dom";

const ShowPage = () => {
  const deals = useLoaderData();
  return (
    <>
      <Nav />
      <Show deals={deals} />
    </>
  );
};

export default ShowPage;
