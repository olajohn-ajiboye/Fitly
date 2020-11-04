/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWeights
// ====================================================

export interface getWeights_fitly_weight {
  __typename: "fitly_weight";
  value: any;
  entry_date: any;
}

export interface getWeights {
  /**
   * fetch data from the table: "fitly.weight"
   */
  fitly_weight: getWeights_fitly_weight[];
}

export interface getWeightsVariables {
  user_id: any;
}
