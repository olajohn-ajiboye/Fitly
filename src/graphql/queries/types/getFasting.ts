/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFasting
// ====================================================

export interface getFasting_fitly_fast_by_pk {
  __typename: "fitly_fast";
  end_time: any | null;
  entry_date: any;
  feeling: string | null;
  id: string;
  start_time: any;
  user_id: any;
}

export interface getFasting {
  /**
   * fetch data from the table: "fitly.fast" using primary key columns
   */
  fitly_fast_by_pk: getFasting_fitly_fast_by_pk | null;
}

export interface getFastingVariables {
  id: string;
}
