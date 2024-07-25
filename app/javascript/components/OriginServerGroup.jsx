import React from "react";
import SecondaryTable from "./SecondaryTable";
import Tag from "./Tag";

const OriginServerGroup = ({ originServerGroup }) => {
  return (
    <div>
      <div className="flex w-full items-center">
        <Tag>Origin server group</Tag>
        <p className="ml-2 font-semibold">{originServerGroup.pool}</p>
      </div>
      <SecondaryTable
        columns={[
          {
            name: "cluster",
            title: "Address",
          },
          {
            name: "port",
            title: "Port",
          },
        ]}
        data={[]}
      />
    </div>
  );
};
export default OriginServerGroup;
