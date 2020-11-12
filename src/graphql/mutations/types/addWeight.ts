/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addWeight
// ====================================================

export interface addWeight_insert_fitly_weight_one {
  __typename: "fitly_weight";
  entry_date: any;
  id: string;
  user_id: any;
  value: any;
}

export interface addWeight {
  /**
   * insert a single row into the table: "fitly.weight"
   */
  insert_fitly_weight_one: addWeight_insert_fitly_weight_one | null;
}

export interface addWeightVariables {
  weight?: any | null;
  user_id?: any | null;
  entry_date?: any | null;
}
