import React from "react";
import {
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import CircularButton from "./CircularButton";
import Tag from "./Tag";
import SecondaryTable from "./SecondaryTable";

const DNS = ({ dns }) => {
  return (
    <div>
      <div className="flex w-full items-center">
        <Tag>DNS</Tag>

        <CircularButton className="ml-2">
          <PlusCircleIcon />
        </CircularButton>
      </div>

      {dns.map((dns, index) => (
        <SecondaryTable
          columns={[
            {
              name: "name",
              title: "Name",
            },
            {
              name: "type",
              title: "Type",
            },
            {
              name: "ipAddress",
              title: "IP Address",
            },
            {
              name: "action",
              title: "",
              render: (item) => (
                <div className="flex">
                  <CircularButton className="mr-1">
                    <PencilIcon />
                  </CircularButton>
                  <CircularButton>
                    <TrashIcon />
                  </CircularButton>
                </div>
              ),
            },
          ]}
          data={[dns]}
        />
      ))}
    </div>
  );
};

export default DNS;
