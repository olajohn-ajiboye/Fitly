/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateFast
// ====================================================

export interface updateFast_update_fitly_fast_by_pk {
  __typename: "fitly_fast";
  id: string;
  end_time: any | null;
  entry_date: any;
  start_time: any;
  feeling: string | null;
}

export interface updateFast {
  /**
   * update single row of the table: "fitly.fast"
   */
  update_fitly_fast_by_pk: updateFast_update_fitly_fast_by_pk | null;
}

export interface updateFastVariables {
  id: string;
  end_time?: any | null;
  feeling?: string | null;
  start_time?: any | null;
}
