import React, { useState } from "react";
import CircularButton from "./CircularButton";
import VirtualServerTable from "./VirtualServerTable";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilIcon,
} from "@heroicons/react/16/solid";

const Table = ({ data }) => {
  const [toggled, setToggled] = useState(null);

  return (
    <div className="overflow-x-auto bg-white rounded-lg mt-4">
      <table className="border-collapse w-full rounded-lg">
        <thead className="rounded-t-lg">
          <tr className="border-b-2">
            <th className="py-3 font-normal"></th>
            <th className="py-3 font-normal text-left">Name</th>
            <th className="py-3 font-normal text-left w-40">
              Service Reference
            </th>
            <th className="py-3 font-normal w-3/12">Host names</th>
            <th className="py-3 font-normal ">PoPs</th>
            <th className="py-3 font-normal ">Spec</th>
            <th className="py-3 font-normal ">enabled</th>
            <th className="py-3 font-normal ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <>
              <tr key={index}>
                <td className="py-3 flex justify-center">
                  <CircularButton
                    onClick={() => {
                      toggled !== item.id
                        ? setToggled(item.id)
                        : setToggled(null);
                    }}
                  >
                    {toggled !== item.id ? (
                      <ChevronDownIcon />
                    ) : (
                      <ChevronUpIcon />
                    )}
                  </CircularButton>
                </td>
                <td className="py-3">{item.name}</td>
                <td className="py-3 w-40">{item.serviceReference}</td>
                <td className="py-3 text-center ">{item.hostName}</td>
                <td className="py-3 text-center">
                  {item.pointOfPreferences.join(",")}
                </td>
                <td className="py-3 text-center">{item.spec}</td>
                <td className="py-3 text-center">
                  {item.enabled ? "Yes" : "No"}
                </td>
                <td className="py-3 flex justify-center">
                  <CircularButton>
                    <PencilIcon />
                  </CircularButton>
                </td>
              </tr>
              <tr
                className={`accordian-body ${toggled === item.id ? "expand" : "collapse"} border-gray-200 border-b`}
              >
                <td colSpan="8">
                  <div>
                    <h3>Virtual Servers</h3>
                    <VirtualServerTable data={item.virtualServers} />
                    <div>
                      <h3>Tier1</h3>
                      <p>{item.tier1}</p>
                    </div>
                    <VirtualServerTable data={item.virtualServers} />
                    <div>
                      <h3>Origin server group</h3>
                      <p>{item.originServerGroup.pool}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <p>{data.length} Rows</p>
    </div>
  );
};

export default Table;
