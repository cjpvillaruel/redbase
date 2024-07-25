import React, { useState } from "react";
import CircularButton from "./CircularButton";
import VirtualServerTable from "./VirtualServerTable";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import Tag from "./Tag";

const Table = ({ data }) => {
  const [toggled, setToggled] = useState(1);

  return (
    <div className="overflow-x-auto bg-white rounded-lg mt-4 pb-2">
      <table className="border-collapse w-full rounded-lg">
        <thead className="rounded-t-lg">
          <tr className="border-b-2">
            <th className="py-3 font-semibold"></th>
            <th className="py-3 font-semibold text-left">Name</th>
            <th className="py-3 font-semibold text-left w-40">
              Service Reference
            </th>
            <th className="py-3 font-semibold w-3/12">Host names</th>
            <th className="py-3 font-semibold ">PoPs</th>
            <th className="py-3 font-semibold ">Spec</th>
            <th className="py-3 font-semibold ">enabled</th>
            <th className="py-3 font-semibold  w-14">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <>
              <tr key={index}>
                <td className="py-3 pl-2 w-14">
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
                <td className="py-3 flex  w-14">
                  <CircularButton>
                    <EllipsisVerticalIcon />
                  </CircularButton>
                </td>
              </tr>
              <tr
                className={` accordian-body ${toggled === item.id ? "expand" : "collapse"} border-gray-200 border-b`}
              >
                <td colSpan="8">
                  <div className="px-2 py-4">
                    <Tag>Virtual Servers</Tag>
                    <VirtualServerTable data={item.virtualServers} />
                    <div className="flex">
                      <Tag>Tier1</Tag>
                      <p className="ml-2 font-semibold">{item.tier1}</p>
                    </div>
                    <VirtualServerTable data={[]} />
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <div className="flex items-center">
                        <Tag>Origin server group</Tag>
                        <p className="ml-2 font-semibold">
                          {item.originServerGroup.pool}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Tag>DNS</Tag>

                        <CircularButton className="ml-2">
                          <PlusCircleIcon />
                        </CircularButton>
                      </div>
                      <div className="flex items-center">
                        <Tag>Monitoring</Tag>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <p className="text-gray-400 text-xs m-2">{data.length} Rows</p>
    </div>
  );
};

export default Table;
