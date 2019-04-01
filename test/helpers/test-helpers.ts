import axios from 'axios';

const createUrl =
  'http://87.44.18.111:3000/api/devices/admin/available-device/add/';

const deleteUrl =
  'http://87.44.18.111:3000/api/devices/admin/available-device/delete/';

export async function addDevice(code) {
  return axios
    .post(createUrl, {
      stork_code: code,
      available: 'true',
      ownerId: null
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
}

export async function remDevice(code) {
  return axios
    .delete(deleteUrl + code, {
      params: { foo: 'bar' }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
}
