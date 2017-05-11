import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});

const peopleData = [
  { id: 1, firstName: 'John', lastName: 'Smith' },
  { id: 2, firstName: 'Sara', lastName: 'Smith' },
  { id: 3, firstName: 'Budd', lastName: 'Deey' },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    people: {
      type: new GraphQLList(PersonType),
      resolve: () => peopleData,
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
