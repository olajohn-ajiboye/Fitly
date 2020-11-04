/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: upsertWeight
// ====================================================

export interface upsertWeight_insert_fitly_weight_one {
  __typename: "fitly_weight";
  value: any;
}

export interface upsertWeight {
  /**
   * insert a single row into the table: "fitly.weight"
   */
  insert_fitly_weight_one: upsertWeight_insert_fitly_weight_one | null;
}

export interface upsertWeightVariables {
  weight: any;
  user_id: any;
  entry_date: any;
}
