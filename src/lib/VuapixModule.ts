import {
  Action,
  Module,
  GetterTree,
  ActionTree,
} from 'vuex';
import { Dictionary, RootStore, VuapixEntryState } from './types';
import Vuapix from './Vuapix';

export default class VuapixModule implements Module<{}, RootStore> {
  vuapix: typeof Vuapix;

  namespaced = true;

  getters: GetterTree<{}, RootStore> = {};

  actions: ActionTree<{}, RootStore> = {};

  modules: Dictionary<Module<VuapixEntryState, RootStore>> = {};

  constructor(vuapix: typeof Vuapix, dataType: string) {
    this.vuapix = vuapix;
    Object.keys(this.vuapix.modules[dataType]).forEach((entryName) => {
      this.actions[entryName] = this.actionFactory(dataType, entryName);
      this.modules[entryName] = this.moduleFactory(dataType, entryName);
    });
  }

  actionFactory(dataType: string, entryName: string): Action<{}, RootStore> {
    return async ({ commit }, params) => {
      let data;
      try {
        commit(`${entryName}/startQuerying`);
        data = await this.vuapix.modules[dataType][entryName].doQuery.call(this.vuapix.ctx, params);
        commit(`${entryName}/endQuerying`, { data });
      } catch (error) {
        commit(`${entryName}/catchError`, { error });
      }
      return data;
    };
  }

  moduleFactory(dataType: string, entryName: string): Module<VuapixEntryState, RootStore> {
    return {
      namespaced: true,
      state: () => ({
        querying: false,
        data: null,
        error: null,
      }),
      getters: {
        querying: (state) => state.querying,
        data: (state) => (this.vuapix.modules[dataType][entryName].getter
          ? this.vuapix.modules[dataType][entryName].getter.call(this.vuapix.ctx, state.data)
          : state.data
        ),
        error: (state) => state.error,
      },
      mutations: {
        startQuerying: (state) => {
          state.querying = true;
          state.error = null;
        },
        endQuerying: (state, { data }) => {
          state.data = data;
          state.querying = false;
        },
        catchError: (state, { error }) => {
          state.error = error;
          state.querying = false;
        },
      },
    };
  }
}
