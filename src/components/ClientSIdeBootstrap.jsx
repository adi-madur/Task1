"use client";
import React, { useEffect } from "react";

const ClientSIdeBootstrap = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
};

export default ClientSIdeBootstrap;
