// import { useQuery , useMutation} from '@apollo/client';
// import { useEffect } from 'react';

// interface DefaultVariables{
//     user_id: string
//     entry_date: string
// }

// // interface UseNewEntry<T> {
// // variables: T
// // query: T
// // mutation:
// // }

// // checks first if entry exist for given user for given day before updating
// // upserting wouldn't work here because of possibility of multiple on_conflict
// export function usAddNewEntry<Q, QT, MT, M,V=DefaultVariables, >(variables:V,queryType:QT, mutationType:MT,query:Q,mutation:M ){

//     const { data, refetch } = useQuery<QT,typeof V>(query, {
//         variables,
//         fetchPolicy: 'cache-first',
//     })

// }

export {}
