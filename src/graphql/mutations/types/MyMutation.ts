/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MyMutation
// ====================================================

export interface MyMutation_insert_fitly_current_day {
  __typename: "fitly_current_day_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface MyMutation {
  /**
   * insert data into the table: "fitly.current_day"
   */
  insert_fitly_current_day: MyMutation_insert_fitly_current_day | null;
}

export interface MyMutationVariables {
  weight: number;
  start: any;
  user_id: any;
}
