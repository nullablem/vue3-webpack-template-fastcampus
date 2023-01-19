exports.hander = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'DM',
      age: 4,
      email: "gmail.com"
    })
  }
}