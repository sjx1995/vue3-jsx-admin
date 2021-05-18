import { computed, defineComponent, onMounted, reactive, ref, toRaw } from "vue";
import { Layout, Menu } from "ant-design-vue";
import { CrownOutlined, DeploymentUnitOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {
    collapsible: {
      type: Boolean,
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const data = reactive({
      menuList: [],
      openKeys: computed(() => {
        return route.matched.map((item) => item.name);
      }),
      selectedKeys: computed(() => route.name),
      collapsed: false,
    });

    const renderMenu = () => {
      return (
        <Menu theme="dark" defaultOpenKeys={data.openKeys} selectedKeys={data.selectedKeys} mode="inline">
          {data.menuList.map((menuItem) => {
            return menuItem.children.length === 0 ? renderMenuItem(menuItem) : renderSubMenu(menuItem);
          })}
        </Menu>
      );
    };
    const renderMenuItem = (item) => {
      return (
        <Menu.Item key={item.name} onClick={() => router.push(item.name)}>
          <DeploymentUnitOutlined class="text-base leading-5 align-text-bottom" />
          <span>{item.meta.title}</span>
        </Menu.Item>
      );
    };
    const renderSubMenu = (item) => {
      const slots = {
        title: () => (
          <span>
            <CrownOutlined class="text-base leading-5 align-text-bottom" />
            <span>{item.meta.title}</span>
          </span>
        ),
      };

      return (
        <Menu.SubMenu key={item.name} v-slots={slots}>
          {item.children.map((menuItem) => renderMenuItem(menuItem))}
        </Menu.SubMenu>
      );
    };

    const renderLogo = () => {
      return (
        <div class="w-full">
          <div class="w-2/3 mx-auto bg-white bg-opacity-20" style={{ height: "40px", marginTop: "12px" }}></div>
        </div>
      );
    };

    const renderLayout = () => (
      <Layout.Sider v-model={[props.collapsible, "collapsed"]} trigger={null} collapsible>
        {renderLogo()}
        {renderMenu()}
      </Layout.Sider>
    );

    onMounted(() => {
      data.menuList = useRouter().options.routes.filter((route) => !route.hide);
    });

    return renderLayout;
  },
});
