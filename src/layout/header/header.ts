import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
    get currentDate() {
        return new Date();
    }
}
