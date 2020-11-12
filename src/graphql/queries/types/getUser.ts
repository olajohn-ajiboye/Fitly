/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_fitly_user {
  __typename: "fitly_user";
  id: any;
  uid: string | null;
  display_name: string;
  email: string;
  photo_url: string | null;
}

export interface getUser {
  /**
   * fetch data from the table: "fitly.user"
   */
  fitly_user: getUser_fitly_user[];
}

export interface getUserVariables {
  email?: string | null;
  uid?: string | null;
}
