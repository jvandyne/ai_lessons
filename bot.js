const { BedrockClient, ListFoundationModelsCommand } = require('@aws-sdk/client-bedrock');

const client = new BedrockClient({ region: 'us-east-2' });

const command = new ListFoundationModelsCommand({});
client.send(command).then((data) => {
    console.log(data);
}
).catch((error) => {
    console.error(error);
});