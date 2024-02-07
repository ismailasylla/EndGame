export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform: [String]!
  }
  type Review {
    id:ID!,
    rating: Int!,
    content: String!
  }
  type Author {
    id: ID!,
    name: string!,
    verified: Boolean!
  }
  type Query {
    reviews: [Reviews]
    games: [Game]
    authors: [Author]
  }
`;
