import React from "react";
import PageHeadings from "../components/PageHeadings";

const ContactPage = () => {
  const page = "Contact";
  const description =
    "Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.";

  return (
    <>
      <PageHeadings page={page} description={description}></PageHeadings>
    </>
  );
};
export default ContactPage;
