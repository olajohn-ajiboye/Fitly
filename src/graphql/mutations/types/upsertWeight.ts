/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: upsertWeight
// ====================================================

export interface upsertWeight_insert_fitly_weight_returning {
  __typename: "fitly_weight";
  id: string;
  user_id: any;
  entry_date: any;
  value: any;
}

export interface upsertWeight_insert_fitly_weight {
  __typename: "fitly_weight_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: upsertWeight_insert_fitly_weight_returning[];
}

export interface upsertWeight {
  /**
   * insert data into the table: "fitly.weight"
   */
  insert_fitly_weight: upsertWeight_insert_fitly_weight | null;
}

export interface upsertWeightVariables {
  id?: string | null;
  weight: any;
  user_id: any;
  entry_date: any;
}
