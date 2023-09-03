class BuildResponse {
  buildSuccessfullResponse = result => {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify(result),
    };
  };

  buildErrorResponse = err => {
    return {
      statusCode: 500,
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
