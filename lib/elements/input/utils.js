import _ from "lodash";

const Find = (data, value) => {
  const object = _.filter(data, (o) => _.includes(_.get(o, "value").toLowerCase(), value.toLowerCase()));

  return object;
}

export { Find }