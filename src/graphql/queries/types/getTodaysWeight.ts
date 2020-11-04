/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodaysWeight
// ====================================================

export interface getTodaysWeight_fitly_weight {
  __typename: "fitly_weight";
  value: any;
}

export interface getTodaysWeight {
  /**
   * fetch data from the table: "fitly.weight"
   */
  fitly_weight: getTodaysWeight_fitly_weight[];
}

export interface getTodaysWeightVariables {
  user_id: any;
  entry_date: any;
}
