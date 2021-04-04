import _ from 'lodash';

const user = {
  id: 1,
  name: 'Yura',
  age: '24',
}

_.forEach(user, (value, key) => {
  console.log(`Key: ${key} ${value}`);
})
 