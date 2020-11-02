/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addWeight
// ====================================================

export interface addWeight_insert_fitly_current_day {
  __typename: "fitly_current_day_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface addWeight {
  /**
   * insert data into the table: "fitly.current_day"
   */
  insert_fitly_current_day: addWeight_insert_fitly_current_day | null;
}

export interface addWeightVariables {
  weight: number;
  start: any;
  user_id: any;
}
