import { MutationTree } from "vuex";
import State from "@/store/state";
import {
    SET_LOADING
} from "./mutation-types";

const mutations: MutationTree<State> = {
    [SET_LOADING](state: State, loading: boolean): void {
        state.loading = loading;
    }
};

export default mutations;
