/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentWeight
// ====================================================

export interface getCurrentWeight_fitly_current_day {
  __typename: "fitly_current_day";
  id: any;
  weight: number | null;
  day_start: any;
}

export interface getCurrentWeight {
  /**
   * fetch data from the table: "fitly.current_day"
   */
  fitly_current_day: getCurrentWeight_fitly_current_day[];
}

export interface getCurrentWeightVariables {
  user_id: any;
  day_start: any;
}
