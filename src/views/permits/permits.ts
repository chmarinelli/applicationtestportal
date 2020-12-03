import PermitCard from '@/components/permit-card/permit-card.vue';
import httpClient from '@/core/api/http-client';
import PermitModel from '@/core/model/permit-model';
import notification from '@/core/utils/notification';
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        PermitCard
    }
})
export default class Permits extends Vue {
    permits: PermitModel[] = [];
    isShowingPermit: boolean = false;
    selectedModel: PermitModel | null = null;
    async mounted() {
        this.permits = await httpClient.get('api/permits');
    }


    isSelectedView(model: PermitModel) {
        return !!this.selectedModel && this.selectedModel.id == model.id
    }

    onDelete(id: number) {
        const index = this.permits.findIndex(x => x.id == id);
        notification({
            type: "warning",
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            showCancelButton: true,
            confirmButtonText: "¡Sí, eliminar!",
            resultFunction: (confirmation) => {
                if (confirmation.value) {
                    httpClient.delete(`api/permits/${id}`)
                        .then(() => {
                            if (this.selectedModel && this.selectedModel.id == id) this.selectedModel = null;
                            this.permits.splice(index, 1);
                            notification({ type: "success", title: "Permiso eliminado exitosamente." });
                        })
                }
            }
        });
    }
}
