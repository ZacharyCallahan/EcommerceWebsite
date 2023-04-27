// This function is the endpoint's request handler.
exports = async function({ query, headers, body }, response) {
  const result = await context.services
    .get('mongodb-atlas')
    .db("groovygear")
    .collection("")
    .find({})
    .toArray();

  // Send the result back to the client
  return result
};
