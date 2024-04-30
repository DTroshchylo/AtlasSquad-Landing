declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode
  export = Schema
}

declare module '*.glsl' {
  const value: string;
  export default value;
}