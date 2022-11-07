import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import flight from "./flight";
import flight_sechedules from "./flight_sechedules";
import users from "./users";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([flight, flight_sechedules, users]),
});
