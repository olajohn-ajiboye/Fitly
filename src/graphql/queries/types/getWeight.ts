/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWeight
// ====================================================

export interface getWeight_fitly_weight {
  __typename: "fitly_weight";
  value: any;
  user_id: any;
  id: string;
  entry_date: any;
}

export interface getWeight {
  /**
   * fetch data from the table: "fitly.weight"
   */
  fitly_weight: getWeight_fitly_weight[];
}

export interface getWeightVariables {
  user_id: any;
  entry_date: any;
}
