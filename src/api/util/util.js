export default async function getResponse(promise) {
  const response = {
    data: null,
    error: null,
  };
  try {
    let responseObj = await promise;
    response.data = responseObj.data;
  } catch (err) {
    response.error = err;
  }
  return response;
}
