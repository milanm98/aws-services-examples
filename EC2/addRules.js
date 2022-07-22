import {
  EC2Client,
  AuthorizeSecurityGroupIngressCommand,
} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client({ region: "us-east-1" });

const params = {
  GroupId: "sg-0fb71dd438cdbfafe",
  IpPermissions: [
    {
      IpProtocol: "tcp",
      FromPort: 80,
      ToPort: 80,
      IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "myrule" }],
    },
  ],
};

const run = async () => {
  try {
    const data = await ec2Client.send(
      new AuthorizeSecurityGroupIngressCommand(params)
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
