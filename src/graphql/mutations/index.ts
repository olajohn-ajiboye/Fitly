import { gql } from '@apollo/client';

export const ADD_FAST = gql`
  mutation addFast {
    insert_fitly_fast_one(
      object: {
        end_time: "2020-10-31T22:44:10.35273"
        feeling: "HAPPY"
        start_time: "2020-10-31T22:44:10.35273"
        user_id: "d64d5a75-edf3-4127-8183-6a02f638a31c"
      }
    ) {
      end_time
      feeling
      id
      start_time
      user_id
    }
  }
`;
