/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentWeight
// ====================================================

export interface getCurrentWeight_fitly_weight {
  __typename: "fitly_weight";
  value: any;
}

export interface getCurrentWeight {
  /**
   * fetch data from the table: "fitly.weight"
   */
  fitly_weight: getCurrentWeight_fitly_weight[];
}

export interface getCurrentWeightVariables {
  user_id: any;
  entry_date: any;
}
