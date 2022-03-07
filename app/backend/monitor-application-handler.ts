const spawn = require("child_process").spawn;

exports.loadTest = async (event: any) => {
  return await new Promise((resolve, reject) => {
    console.log("Load test is starting.. ", JSON.stringify(event));
    let childK6Process = spawn("k6", [
      "run",
      `test/${event.targetServiceName}`,
      "--out",
      "influxdb=http://admin:password@influxdb.domain.net:8086/k6db",
    ]);

    childK6Process.stdout.on("data", function(data: Object) {
      process.stdout.write(data.toString());
    });

    childK6Process.stderr.on("data", function(data: Object) {
      process.stdout.write(data.toString());
    });

    childK6Process.on("close", function(code: any) {
      console.log("Finished with code " + code);
      resolve();
    });

    childK6Process.on("error", function(code: any) {
      console.log("Error Occured", code);
      reject();
    });
  })
};