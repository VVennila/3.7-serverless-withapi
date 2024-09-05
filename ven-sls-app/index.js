module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};
module.exports.handler1 = async (event1) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "serverless for S3",
      },
      null,
      2
    ),
  };
};

