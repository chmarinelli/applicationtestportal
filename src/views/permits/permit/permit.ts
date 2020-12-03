import httpClient from "@/core/api/http-client";
import PermitModel from "@/core/model/permit-model";
import PermitTypeModel from "@/core/model/permit-type-model";
import notification from "@/core/utils/notification";
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class Permit extends Vue {
  @State((state) => state.loading) isLoading: boolean | undefined;
  types: PermitTypeModel[] = [];
  model: PermitModel = new PermitModel();
  min: Date = new Date();

  async mounted() {
    this.types = await httpClient.get("api/permitstypes");
    if (this.$route.params.id && !isNaN(parseInt(this.$route.params.id)))
      httpClient
        .getById("api/permits", this.$route.params.id)
        .then((response) => (this.model = new PermitModel(response)));
  }

  submitted() {
    notification({
      type: "success",
      title: `Solicitud de permiso ${
        this.model.id ? "actualizada" : "agregada"
      } exitosamente.`,
    });
    this.$router.back();
  }

  onSubmit() {
    this.$validator.validateAll().then(async (isValid) => {
      if (!isValid) return;
      if (this.model.id && this.model.id > 0)
        httpClient
          .put(`api/permits/${this.model.id}`, this.model)
          .then(() => this.submitted());
      else
        httpClient
          .post("api/permits", this.model)
          .then(() => this.submitted());
    });
  }
}
