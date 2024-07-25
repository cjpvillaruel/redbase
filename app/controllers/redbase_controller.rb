class RedbaseController < ApplicationController
  def index
    @data = {
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
              id: "1",
              cluster: "OHII",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_vs",
              terminatorType: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
            {
              id: "2",
              cluster: "OHII",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_redir_vs",
              terminatorType: "Standard (HTTPS)",
              ingressTrafficType: "ALB",
            },
            {
              id: "3",
              cluster: "OREI",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_vs",
              terminatorType: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
          ],
          tier1: "RS-2024-1010-T1-4",
          clusters: [
            {
              id: "1",
              cluster: "test",
              port: 1111,
              ip: "10.176.21.40",
              terminator: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
          ],
          originServerGroup: {
            pool: "RS-2024-1010-T1-4_pool",
            address: "52.6343",
            port: 80,
          },
          dns: [
            {
              id: "1",
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
              id: "1",
              cluster: "OHII",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_vs",
              terminatorType: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
            {
              id: "2",
              cluster: "OHII",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_redir_vs",
              terminatorType: "Standard (HTTPS)",
              ingressTrafficType: "ALB",
            },
            {
              id: "3",
              cluster: "OREI",
              port: 1111,
              ip: "10.176.21.40",
              vsName: "RS-2024-1010.CR21_vs",
              terminatorType: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
          ],
          tier1: "RS-2024-1010-T1-4",
          clusters: [
            {
              id: "1",
              cluster: "test",
              port: 1111,
              ip: "10.176.21.40",
              terminator: "HTTPS Redirect",
              ingressTrafficType: "ALB",
            },
          ],
          originServerGroup: {
            pool: "RS-2024-1010-T1-4_pool",
            address: "52.6343",
            port: 80,
          },
          dns: [
            {
              id: "1",
              name: "test",
              type: "CNAME",
              ipAddress: "52.2223",
            },
          ],
          monitorType: "HTTP",
        },
      ],
    }
    respond_to do |format|
      format.json { render json: @data }
     end
  end  
end
  