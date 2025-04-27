import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

export async function loadQuery<QueryResponse>({
    query,
    params,
  }: {
    query: string;
    params?: QueryParams;
  }) {
    try {
      // Try fetching without filterResponse option first
      const rawResponse = await sanityClient.fetch<QueryResponse>(
        query,
        params ?? {}
      );
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