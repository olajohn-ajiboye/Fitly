/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addFast
// ====================================================

export interface addFast_insert_fitly_fast_one {
  __typename: "fitly_fast";
  end_time: any;
  feeling: string;
  id: any;
  start_time: any;
  user_id: any;
}

export interface addFast {
  /**
   * insert a single row into the table: "fitly.fast"
   */
  insert_fitly_fast_one: addFast_insert_fitly_fast_one | null;
}
