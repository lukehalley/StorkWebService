import axios from 'axios';

const createUrl =
  'http://87.44.18.111:3000/api/devices/admin/available-device/add/';

const deleteUrl =
  'http://87.44.18.111:3000/api/devices/admin/available-device/delete/';

export async function addDevice(code) {
  return axios
    .post(createUrl, {
      dev_code: code,
      available: 'true',
      ownerId: null
    })
    .then(function(response) {
      console.log('Device REGISTER Successful');
    })
    .catch(function(error) {
      console.error('Device REGISTER Unsuccessful!');
    });
}

export async function remDevice(code) {
  return axios
    .delete(deleteUrl + code, {
      params: { foo: 'bar' }
    })
    .then(function(response) {
      console.log('Device DELETE Successful');
    })
    .catch(function(error) {
      console.log(
        'Device DELETE Unsuccessful! (More than likely the device doesnt exists)'
      );
    });
}
