import httpClient from '@/core/api/http-client';
import PermitTypeModel from '@/core/model/permit-type-model';
import notification from '@/core/utils/notification';
import { Component, Vue } from "vue-property-decorator";
import { State } from 'vuex-class';
import permitsTypesFields from './permits-types-fields';

@Component({})
export default class PermitsTypes extends Vue {
    @State(state => state.loading) isLoading: boolean | undefined;
    field = permitsTypesFields;
    types: PermitTypeModel[] = [];
    async mounted() {
        this.types = await httpClient.get('api/permitstypes');
    }

    onDelete(index: number) {
        const type = this.types[index];
        notification({
            type: "warning",
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            showCancelButton: true,
            confirmButtonText: "¡Sí, eliminar!",
            resultFunction: (confirmation) => {
                if (confirmation.value) {
                    httpClient.delete(`api/permitstypes/${type.id}`)
                        .then(() => {
                            this.types.splice(index, 1);
                            (this.$refs.table as any).refresh()
                            notification({ type: "success", title: "Tipo de permiso eliminado exitosamente." });
                        })
                }
            }
        });
    }


}
