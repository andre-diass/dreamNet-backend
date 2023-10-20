class BuildResponse {
  buildSuccessfullResponse = (statusCodes, result) => {
    return {
      statusCode: statusCodes,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify(result),
    };
  };

  buildErrorResponse = (statusCodes, err) => {
    return {
      statusCode: statusCodes,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify({ error: (err as Error).message }),
    };
  };
}

export default new BuildResponse();
