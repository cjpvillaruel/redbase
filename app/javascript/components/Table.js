import React, { useState } from "react";
import CircularButton from "./CircularButton";
import VirtualServerTable from "./VirtualServerTable";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import Tag from "./Tag";
import ClusterTable from "./ClustersTable";
import DNS from "./DNS";
import OriginServerGroup from "./OriginServerGroup";

const Table = ({ data }) => {
  const [toggled, setToggled] = useState(1);

  return (
    <div className="overflow-x-auto bg-white rounded-lg mt-4 pb-2">
      <table className="border-collapse w-full rounded-lg ">
        <thead className="rounded-t-lg">
          <tr className="border-b-2">
            <th className="py-3 font-semibold text-sm"></th>
            <th className="py-3 font-semibold text-sm text-left w-40">Name</th>
            <th className="py-3 font-semibold text-sm text-left w-40">
              Service Reference
            </th>
            <th className="py-3 font-semibold text-sm w-3/12 text-left">
              Host names
            </th>
            <th className="py-3 font-semibold text-sm ">PoPs</th>
            <th className="py-3 font-semibold text-sm ">Spec</th>
            <th className="py-3 font-semibold text-sm flex justify-center">
              <LockClosedIcon className="size-4" />
            </th>
            <th className="py-3 font-semibold text-sm  w-14"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <>
              <tr key={index}>
                <td className="py-3 font-medium text-sm pl-2 w-14">
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
                <td className="py-3 font-medium text-sm">{item.name}</td>
                <td className="py-3 font-medium text-sm w-40">
                  {item.serviceReference}
                </td>
                <td className="py-3 font-medium text-sm text-left ">
                  {item.hostName}
                </td>
                <td className="py-3 font-medium text-sm text-center">
                  {item.pointOfPreferences.join(", ")}
                </td>
                <td className="py-3 font-medium text-sm text-center">
                  {item.spec}
                </td>
                <td className="py-3 font-medium text-sm text-center">
                  {item.enabled ? "Yes" : "No"}
                </td>
                <td className="py-3 font-medium text-sm flex  w-14">
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
                    <div className="flex items-center">
                      <Tag>Tier1</Tag>
                      <p className="ml-2 font-bold text-xs">{item.tier1}</p>
                    </div>

                    <ClusterTable clusters={item.clusters} />
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <OriginServerGroup
                        originServerGroup={item.originServerGroup}
                      />
                      <DNS dns={item.dns} />
                      <div>
                        <div className="flex w-full items-center">
                          <Tag>Monitoring</Tag>
                        </div>
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
