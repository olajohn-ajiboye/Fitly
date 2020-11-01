/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_fitly_fast {
  __typename: "fitly_fast";
  id: any;
  user_id: any;
  feeling: string;
}

export interface getUser_fitly_user {
  __typename: "fitly_user";
  display_name: string;
}

export interface getUser {
  /**
   * fetch data from the table: "fitly.fast"
   */
  fitly_fast: getUser_fitly_fast[];
  /**
   * fetch data from the table: "fitly.user"
   */
  fitly_user: getUser_fitly_user[];
}
