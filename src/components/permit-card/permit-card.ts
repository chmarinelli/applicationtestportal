import PermitModel from '@/core/model/permit-model';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PermitCard extends Vue {
    @Prop() permit: PermitModel | undefined;
    @Prop({ default: false }) isSelectedView: boolean | undefined;
    @Prop({ default: false }) isAdvanced: boolean | undefined;

    onView() {
        this.$emit('view')
    }
}
