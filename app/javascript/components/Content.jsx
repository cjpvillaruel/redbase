import React, { useEffect, useState } from "react";
import Button from "./Button";
import Table from "./Table";
import { BarsArrowDownIcon, PlusIcon } from "@heroicons/react/16/solid";

const Content = () => {
  const [data, setData] = useState(null);

  const getRedbaseData = async () => {
    const response = await fetch("http://localhost:3000/redbase");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getRedbaseData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  const { name, routes } = data;
  return (
    <div className="pt-16 pl-16 pr-6 bg-zinc-100 min-h-screen">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="my-2">{routes.length} content routes</p>
      <div className="flex justify-between flex-wrap">
        <div className="flex items-start mb-2 flex-wrap">
          <Button variant="secondary" className="mr-2">
            <BarsArrowDownIcon className="size-6" />
            Grouped by vSG
          </Button>
          <Button variant="secondary" className="mr-2">
            <BarsArrowDownIcon className="size-6" />
            Grouped by app
          </Button>
          <Button variant="secondary" className="mr-2">
            <BarsArrowDownIcon className="size-6" />
            Grouped by Tier
          </Button>
          <Button variant="primary" className="mr-2">
            <BarsArrowDownIcon className="size-6" />
            Ungrouped
          </Button>
        </div>
        <div className="flex mb-2">
          <input
            type="text"
            className="bg-transparent border mx-2 h-10 px-2"
            placeholder="Content route search"
          />
          <Button variant="primary">
            <PlusIcon className="size-6" /> Add new app
          </Button>
        </div>
      </div>

      <Table data={routes} />
    </div>
  );
};

export default Content;
