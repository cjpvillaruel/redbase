import React from "react";
import SecondaryTable from "./SecondaryTable";

const ClustersTable = ({ clusters }) => {
  return (
    <SecondaryTable
      data={clusters}
      columns={[
        {
          name: "cluster",
          title: "Cluster",
        },
        {
          name: "ip",
          title: "IP",
        },
        {
          name: "port",
          title: "Port",
        },

        {
          name: "terminator",
          title: "Terminator",
        },
        {
          name: "ingressTraficType",
          title: "Ingress Traffic Type",
        },
      ]}
    />
  );
};
export default ClustersTable;
