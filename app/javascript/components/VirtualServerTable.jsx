import React from "react";
import CircularButton from "./CircularButton";
import { PencilIcon } from "@heroicons/react/16/solid";
import SecondaryTable from "./SecondaryTable";

const VirtualServerTable = ({ data }) => {
  // const data = [
  //   {
  //     cluster: "test",
  //     port: 1111,
  //     ip: "10.176.21.40",
  //     vsName: "test",
  //     terminatorType: "HTTPS Redirect",
  //     ingressTrafficType: "ALB",
  //   },
  //   // Add more data objects here if needed
  // ];
  return (
    <SecondaryTable
      columns={[
        {
          name: "cluster",
          title: "Cluster",
        },
        {
          name: "port",
          title: "Ports",
        },
        {
          name: "ip",
          title: "IP",
        },
        {
          name: "vsName",
          title: "Vs Name",
        },
        {
          name: "terminatorType",
          title: "Terminator Type",
        },
        {
          name: "ingressTrafficType",
          title: "Ingress Traffic Type",
        },
        {
          name: "action",
          title: "",
          className: "w-14",
          render: (item) => (
            <CircularButton onClick={() => {}}>
              <PencilIcon />
            </CircularButton>
          ),
        },
      ]}
      data={data}
    />
  );
};

export default VirtualServerTable;
