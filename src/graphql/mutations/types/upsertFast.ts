/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: upsertFast
// ====================================================

export interface upsertFast_insert_fitly_fast_returning {
	__typename: 'fitly_fast'
	id: string
	user_id: any
	start_time: any
	end_time: any | null
	entry_date: any
	feeling: string | null
}

export interface upsertFast_insert_fitly_fast {
	__typename: 'fitly_fast_mutation_response'
	/**
	 * data of the affected rows by the mutation
	 */
	returning: upsertFast_insert_fitly_fast_returning[]
}

export interface upsertFast {
	/**
	 * insert data into the table: "fitly.fast"
	 */
	insert_fitly_fast: upsertFast_insert_fitly_fast | null
}

export interface upsertFastVariables {
	id?: string | null
	start_time: any
	user_id: any
	entry_date: any
	end_time?: any | null
	feeling?: string | null
}
