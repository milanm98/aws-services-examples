import { EC2Client, CreateSecurityGroupCommand } from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client({ region: "us-east-1" });

const params = {
  Description: "This is v3 sdk security group",
  GroupName: "v3",
};

const run = async () => {
  try {
    const data = await ec2Client.send(new CreateSecurityGroupCommand(params));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
