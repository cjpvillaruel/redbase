import React from "react";
import Button from "./Button";
import Table from "./Table";
const sampleData = {
  name: "Deal a Day",
  routes: [
    {
      id: 1,
      name: "RS-2024-1010-CR21 ",
      serviceReference: "RS-2024-1010-CR21 ",
      hostName: "mfa.redshield.com",
      pointOfPreferences: ["OREI", "OHII"],
      spec: "1.0",
      enabled: true,
      virtualServers: [
        {
          cluster: "OHII",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_vs",
          terminatorType: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
        {
          cluster: "OHII",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_redir_vs",
          terminatorType: "Standard (HTTPS)",
          ingressTrafficType: "ALB",
        },
        {
          cluster: "OREI",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_vs",
          terminatorType: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
      ],
      tier1: "rs-1212",
      clusters: [
        {
          cluster: "test",
          port: 1111,
          ip: "10.176.21.40",
          terminator: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
      ],
      originServerGroup: {
        pool: "test",
        address: "52.6343",
        port: 80,
      },
      dns: [
        {
          name: "test",
          type: "CNAME",
          ipAddress: "52.2223",
        },
      ],
      monitorType: "HTTP",
    },
    {
      id: 2,
      name: "RS-2024-1010-CR21 ",
      serviceReference: "RS-2024-1010-CR21 ",
      hostName: "mfa.redshield.com",
      pointOfPreferences: ["OREI", "OHII"],
      spec: "1.0",
      enabled: true,
      virtualServers: [
        {
          cluster: "OHII",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_vs",
          terminatorType: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
        {
          cluster: "OHII",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_redir_vs",
          terminatorType: "Standard (HTTPS)",
          ingressTrafficType: "ALB",
        },
        {
          cluster: "OREI",
          port: 1111,
          ip: "10.176.21.40",
          vsName: "RS-2024-1010.CR21_vs",
          terminatorType: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
      ],
      tier1: "rs-1212",
      clusters: [
        {
          cluster: "test",
          port: 1111,
          ip: "10.176.21.40",
          terminator: "HTTPS Redirect",
          ingressTrafficType: "ALB",
        },
      ],
      originServerGroup: {
        pool: "test",
        address: "52.6343",
        port: 80,
      },
      dns: [
        {
          name: "test",
          type: "CNAME",
          ipAddress: "52.2223",
        },
      ],
      monitorType: "HTTP",
    },
  ],
};

const Content = () => {
  const { name, routes } = sampleData;
  return (
    <div className="pt-16 pl-16 pr-6 bg-zinc-100 min-h-screen">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="my-2">{routes.length} content routes</p>
      <div className="flex justify-between">
        <div>
          <Button variant="secondary" className="mr-2">
            Grouped by vSG
          </Button>
          <Button variant="secondary" className="mr-2">
            Grouped by app
          </Button>
          <Button variant="secondary" className="mr-2">
            Grouped by Tier
          </Button>
          <Button variant="primary" className="mr-2">
            Ungrouped
          </Button>
        </div>
        <div>
          <input type="text" className="bg-transparent border mx-2 h-10" />
          <Button variant="primary">Add new app</Button>
        </div>
      </div>

      <Table data={routes} />
    </div>
  );
};

export default Content;
