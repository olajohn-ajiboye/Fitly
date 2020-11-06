/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: upsertCurrentUser
// ====================================================

export interface upsertCurrentUser_insert_fitly_user_one {
  __typename: "fitly_user";
  id: any;
  display_name: string;
  email: string;
  uid: string | null;
  photo_url: string | null;
}

export interface upsertCurrentUser {
  /**
   * insert a single row into the table: "fitly.user"
   */
  insert_fitly_user_one: upsertCurrentUser_insert_fitly_user_one | null;
}

export interface upsertCurrentUserVariables {
  display_name?: string | null;
  email?: string | null;
  uid: string;
  photo_url?: string | null;
}
