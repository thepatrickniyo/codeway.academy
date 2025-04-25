/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"y0hw9umf","dataset":"courses","useCdn":false,"stega":{"studioUrl":"\u002Fadmin"}}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
