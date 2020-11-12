import * as vuex from 'vuex';
import {
  Dictionary,
  RootStore,
  VuapixModulePayload,
  VuapixPaylaod,
  VuapixPayloadWithNamespace,
} from './types';
import { VUAPIX_NS } from './const';
import { formatHelpersArgs } from './helpers';
import VuapixModule from './VuapixModule';

/* eslint-disable-next-line @typescript-eslint/class-name-casing */
class _Vuapix extends Function {
  ctx = {
    $store: null,
  };

  namespace = VUAPIX_NS;

  modules: Dictionary<VuapixModulePayload>;

  constructor(...payload: VuapixPaylaod) {
    super();
    if (_Vuapix.guardPayloadNamespace(payload)) {
      [this.namespace, this.modules] = payload;
    } else {
      [this.modules] = payload;
    }
  }

  static guardPayloadNamespace(payload: VuapixPaylaod): payload is VuapixPayloadWithNamespace {
    return (typeof payload[0] === 'string');
  }

  static install(vuapix: _Vuapix, store: RootStore) {
    vuapix.linkStore(store);
    vuapix.ctx.$store.registerModule(vuapix.namespace, { namespaced: true });
    Object.keys(vuapix.modules).forEach((dataType) => {
      vuapix.registerModule(dataType, vuapix.modules[dataType]);
    });
  }

  private linkStore(store) {
    this.ctx.$store = store;
  }

  hasModule(dataType: string): boolean {
    return this.ctx.$store.hasModule([this.namespace, dataType]);
  }

  registerModule(dataType: string, module: VuapixModulePayload, options?: object) {
    this.modules[dataType] = module;
    const vuapixModule = new VuapixModule(this, dataType);
    this.ctx.$store.registerModule([this.namespace, dataType], vuapixModule, options);
  }

  unregisterModule(dataType: string) {
    this.ctx.$store.unregisterModule([this.namespace, dataType]);
    delete this.modules[dataType];
  }
}

const Vuapix = new Proxy(_Vuapix, {
  apply: (target, self, args) => new Vuapix(...args),
  construct: (_V, args) => new Proxy(new _V(...args), {
    apply: (t, s, a) => _V.install(t, ...a),
    get: (target, prop, receiver) => {
      if (['hasModule', 'registerModule', 'unregisterModule'].includes(prop)) {
        return target[prop].bind(target);
      }
      if (['mapState', 'mapGetters', 'mapActions', 'mapMutations'].includes(prop)) {
        return (...a) => vuex[prop](...formatHelpersArgs(target.namespace, a));
      }
      return Reflect.get(...arguments);
    },
  }),
});

export default Vuapix;
