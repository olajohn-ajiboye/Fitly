/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateWeight
// ====================================================

export interface updateWeight_update_fitly_weight_returning {
  __typename: "fitly_weight";
  value: any;
}

export interface updateWeight_update_fitly_weight {
  __typename: "fitly_weight_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: updateWeight_update_fitly_weight_returning[];
}

export interface updateWeight {
  /**
   * update data of the table: "fitly.weight"
   */
  update_fitly_weight: updateWeight_update_fitly_weight | null;
}

export interface updateWeightVariables {
  weight: any;
  user_id: any;
  entry_date: any;
}
