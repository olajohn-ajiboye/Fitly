import { gql } from '@apollo/client';

export const GET_FAST = gql`
  query getUser {
    fitly_fast {
      id
      user_id
      feeling
    }
    fitly_user(where: { id: { _eq: "6c1e05a7-8339-4a29-9a86-715a4e5ea14c" } }) {
      display_name
    }
  }
`;

export const GET_CURRENT_WEIGHT = gql`
  query getCurrentWeight($user_id: uuid!, $day_start: timestamptz!) {
    fitly_current_day(
      where: { user_id: { _eq: $user_id }, day_start: { _eq: $day_start } }
    ) {
      id
      weight
      day_start
    }
  }
`;
