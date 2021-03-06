var CarbonClient = require('@carbon-io/carbon-client')

var client = new CarbonClient("http://localhost:8888")

var usersCollection = client.getCollection("users")
usersCollection.saveObject("123456",
  {
    _id: "123456",
    name: "joe",
    address: {
      city: "San Francisco",
      zipcode: 94401
    }
  },
  function(e, result) {
    console.log(result)
  }
)


/* underlying HTTP call
 * PUT http://localhost:8888/users/123456
 * body: {_id: "123456",name: "joe",address: {city: "San Francisco",zipcode: 94401}}
 */