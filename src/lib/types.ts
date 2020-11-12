import { Store } from 'vuex';

/**
 * UTILS
 */
export interface Dictionary<T> {
  [key: string]: T;
}

/**
 * VUAPIX
 */
export type VuapixModulePayload = Dictionary<{
  cache: boolean;
  single: boolean;
  getter?: Function;
  doQuery: (payload: any) => Promise<any>;
}>;

export type VuapixPayloadWithNamespace = [
  string,
  Dictionary<VuapixModulePayload>,
];

export type VuapixPaylaod = VuapixPayloadWithNamespace | [
  Dictionary<VuapixModulePayload>,
];

/**
 * VUAPIX MODULES
 */
export type RootStore = Store<any>;

export interface VuapixEntryState {
  querying: boolean;
  data: any;
  error: Error;
}
