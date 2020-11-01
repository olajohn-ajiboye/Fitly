import { gql } from '@apollo/client';
export const GET_FAST = gql`
  query getUser {
    fitly_fast {
      id
      user_id
      day
      feeling
    }
    fitly_user(where: { id: { _eq: "6c1e05a7-8339-4a29-9a86-715a4e5ea14c" } }) {
      display_name
    }
  }
`;
