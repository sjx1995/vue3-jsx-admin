import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";

export default defineComponent({
  setup() {
    const renderFooter = () => (
      <Layout.Footer class="text-center">
        Copyright © {new Date().getFullYear() === 2021 ? `2021` : `2021 - ${new Date().getFullYear()}`} Sunly. All
        rights reserved.
      </Layout.Footer>
    );

    return renderFooter;
  },
});
