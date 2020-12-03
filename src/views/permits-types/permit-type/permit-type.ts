import httpClient from "@/core/api/http-client";
import PermitTypeModel from "@/core/model/permit-type-model";
import notification from "@/core/utils/notification";
import { State } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PermitType extends Vue {
  @State((state) => state.loading) isLoading: boolean | undefined;
  model: PermitTypeModel = new PermitTypeModel();

  mounted() {
    if (this.$route.params.id && !isNaN(parseInt(this.$route.params.id)))
      httpClient
        .getById("api/permitstypes", this.$route.params.id)
        .then((response) => (this.model = new PermitTypeModel(response)));
  }

  submitted() {
    notification({
      type: "success",
      title: `Tipo de permiso ${
        this.model.id ? "actualizado" : "agregado"
      } exitosamente.`,
    });
    this.$router.back();
  }

  onSubmit() {
    this.$validator.validateAll().then(async (isValid) => {
      if (!isValid) return;
      if (this.model.id && this.model.id > 0)
        httpClient
          .put(`api/permitstypes/${this.model.id}`, this.model)
          .then(() => this.submitted());
      else
        httpClient
          .post("api/permitstypes", this.model)
          .then(() => this.submitted());
    });
  }
}
