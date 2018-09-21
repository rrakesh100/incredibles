import axios from 'axios';
import $ from 'jquery';


export function registerUser(userObj) {
  console.log(userObj);
  return axios.post(
    'http://sakshi.myofficestation.com/user_register/user/register',
    {
      name: "gnm123",
      mail: "gnm@gmail.com",
      pass: {
        pass1: "123456",
        pass2: "123456"
      },
      address: {
        first_name: "test",
        last_name: "123",
        city: "delhi",
        street1: "abc",
        zone: "east",
        postal_code: "123456"
      }
    }
  );

//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://sakshi.myofficestation.com/user_register/user/register",
//   "method": "POST",
//   "headers": {
//     "Content-Type": "application/json",
//     "Cache-Control": "no-cache"
//   },
//   "processData": false,
//   "data": "{\n\"name\" : \"gnm123\",\n\"mail\" : \"gnm@gmail.com\",\n\"pass\" :{ \"pass1\" : \"123456\", \"pass2\" : \"123456\" } ,\n\"address\" : {\n\t\n\t\"first_name\" : \"test\",\n\t\"last_name\" : \"123\",\n\t\"city\" : \"delhi\",\n\t\"street1\" : \"abc\",\n\t\"zone\" : \"east\",\n\t\"postal_code\" : \"123456\"\n}\t\n\n}"
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
}
