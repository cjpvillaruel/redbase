import React from "react";
import CircularButton from "./CircularButton";
import { PencilIcon } from "@heroicons/react/16/solid";
import SecondaryTable from "./SecondaryTable";

const VirtualServerTable = ({ data }) => {
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
