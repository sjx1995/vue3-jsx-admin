import { defineComponent, Transition, ref } from "vue";
import { Layout } from "ant-design-vue";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sideBar";

export default defineComponent({
  setup() {
    const renderMain = () => {
      const sideCollapsible = ref(false);
      const slots = {
        default: ({ Component }) => (
          <Transition name="slide-fade">
            <Component />
          </Transition>
        ),
      };

      const toggleCollapse = (val) => {
        sideCollapsible.value = val;
      };

      return (
        <Layout class="flex h-full">
          <SideBar collapsible={sideCollapsible} />
          <Layout>
            <Header onToggleCollapse={toggleCollapse} />
            <Layout.Content class="my-4 mx-4 max-h-(screen-33) overflow-y-auto bg-white p-2 rounded">
              <router-view v-slots={slots}></router-view>
            </Layout.Content>
            <Footer />
          </Layout>
        </Layout>
      );
    };

    return () => renderMain();
  },
});
