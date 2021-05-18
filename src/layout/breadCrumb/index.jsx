import { defineComponent } from "vue";
import { Breadcrumb } from "ant-design-vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const renderBreadItem = (name) => <Breadcrumb.Item>{name}</Breadcrumb.Item>;

    console.log(route.matched);

    return () => <Breadcrumb>{route.matched.map((item) => renderBreadItem(item.meta.title))}</Breadcrumb>;
  },
});
