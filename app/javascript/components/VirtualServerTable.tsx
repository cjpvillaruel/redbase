import React from "react";
import CircularButton from "./CircularButton";
import { PencilIcon } from "@heroicons/react/16/solid";

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
    <table className="border-collapse w-full mb-4 mt-2">
      <thead className="font-thin">
        <tr>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            Cluster
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            Port
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            IP
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            VS Name
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            Terminator Type
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs">
            Ingress Traffic Type
          </th>
          <th className="font-normal uppercase text-gray-400 text-left text-xs"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="text-left">{item.cluster}</td>
            <td className="text-left">{item.port}</td>
            <td className="text-left">{item.ip}</td>
            <td className="text-left">{item.vsName}</td>
            <td className="text-left">{item.terminatorType}</td>
            <td className="text-left">{item.ingressTrafficType}</td>
            <td className="text-left">
              <CircularButton onClick={() => {}}>
                <PencilIcon />
              </CircularButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VirtualServerTable;
