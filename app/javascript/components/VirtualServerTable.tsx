import React from "react";

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
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th>Cluster</th>
          <th>Port</th>
          <th>IP</th>
          <th>VS Name</th>
          <th>Terminator Type</th>
          <th>Ingress Traffic Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.cluster}</td>
            <td>{item.port}</td>
            <td>{item.ip}</td>
            <td>{item.vsName}</td>
            <td>{item.terminatorType}</td>
            <td>{item.ingressTrafficType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VirtualServerTable;
