import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

// export async function loadQuery<QueryResponse>({
//   query,
//   params,
// }: {
//   query: string;
//   params?: QueryParams;
// }) {
//   const { result } = await sanityClient.fetch<QueryResponse>(
//     query,
//     params ?? {},
//     { filterResponse: false }
//   );

//   console.log("Query result:", result);

//   return {
//     data: result,
//   };
// }

export async function loadQuery<QueryResponse>({
    query,
    params,
  }: {
    query: string;
    params?: QueryParams;
  }) {
    try {
      // First, log the query to make sure it's correct
      console.log("Executing query:", query);
      
      // Try fetching without filterResponse option first
      const rawResponse = await sanityClient.fetch<QueryResponse>(
        query,
        params ?? {}
      );
      
      console.log("Raw Sanity response:", rawResponse);
      
      // Return the data directly if it's already in the right format
      return {
        data: rawResponse,
      };
    } catch (error) {
      console.error("Error fetching from Sanity:", error);
      return {
        data: [] as unknown as QueryResponse,
        error,
      };
    }
  }