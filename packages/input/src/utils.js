import _ from "lodash";

const Find = (data, value) => {
  if (value !== null) {
    const object = _.filter(data, (o) => _.includes(_.get(o, "value").toLowerCase(), value.toLowerCase()));

    return object;
  } else return []
}

const FindByKey = (data, key, value) => {
  const object = _.filter(data, (o) => _.includes(_.get(o, key), value));

  return object;
}

const FindIndex = (data, value) => {
  const object = _.findIndex(data, { value: value });

  return object;
}

export { Find, FindByKey, FindIndex }
