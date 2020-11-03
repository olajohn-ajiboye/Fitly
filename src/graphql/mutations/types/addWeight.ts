/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addWeight
// ====================================================

export interface addWeight_update_fitly_current_day_returning {
  __typename: "fitly_current_day";
  weight: number;
}

export interface addWeight_update_fitly_current_day {
  __typename: "fitly_current_day_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: addWeight_update_fitly_current_day_returning[];
}

export interface addWeight {
  /**
   * update data of the table: "fitly.current_day"
   */
  update_fitly_current_day: addWeight_update_fitly_current_day | null;
}

export interface addWeightVariables {
  weight: number;
  user_id: any;
  entry_date: any;
}
