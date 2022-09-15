export default (object) => {
  let query = "";
  let counter = 0

  for (const key in object) {
    if(counter < 1){
      query = `${key}=${object[key]}`;
      counter++
      continue
    }
    query = `${query}&${key}=${object[key]}`;
  }

  return query;
};
