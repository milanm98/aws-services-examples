import { EC2Client, CreateKeyPairCommand } from "@aws-sdk/client-ec2";
import { writeFile } from "fs";
const ec2Client = new EC2Client({ region: "us-east-1" });

const params = {
  KeyName: "v3key",
  KeyType: "rsa",
};

const run = async () => {
  try {
    const data = await ec2Client.send(new CreateKeyPairCommand(params));
    console.log("key pair has been created", data);
    writeFile("v3key.pem", data.KeyMaterial, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File saved");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

run();
