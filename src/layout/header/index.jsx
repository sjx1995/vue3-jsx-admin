import { defineComponent, reactive, createVNode, ref } from "vue";
import { Layout, Modal, Menu, Dropdown } from "ant-design-vue";
import BreadCrumb from "../breadCrumb";
import { useStore } from "vuex";
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, ExclamationCircleOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore();
    const menuCollapse = ref(false);
    const userInfo = reactive(store.state.user.userInfo);
    const menuClick = ({ key }) => {
      switch (key) {
        case "quit":
          quit();
          break;
      }
    };
    const quit = () => {
      Modal.confirm({
        title: "warning",
        icon: createVNode(ExclamationCircleOutlined),
        content: "quit",
        onOk() {
          new Promise((resolve) => {
            store.dispatch("user/logout").then(() => {
              resolve();
              location.reload();
            });
          });
        },
      });
    };
    const renderUser = () => {
      const slots = {
        overlay: () => (
          <Menu onClick={menuClick}>
            <Menu.Item key="quit">
              <span>log out</span>
            </Menu.Item>
          </Menu>
        ),
      };

      return (
        <Dropdown v-slots={slots}>
          <a>
            {userInfo.name ?? "username"}
            <DownOutlined />
          </a>
        </Dropdown>
      );
    };

    return () => (
      <Layout.Header class="bg-white py-0 px-5 flex justify-between items-center">
        <span
          class="h-full mr-4 text-xl hover:text-gray-500 cursor-pointer"
          onClick={() => emit("toggleCollapse", (menuCollapse.value = !menuCollapse.value))}
        >
          {menuCollapse.value ? (
            <MenuUnfoldOutlined style={{ lineHeight: "60px" }} />
          ) : (
            <MenuFoldOutlined style={{ lineHeight: "60px" }} />
          )}
        </span>
        <BreadCrumb />
        <span class="flex-grow"></span>
        {renderUser()}
      </Layout.Header>
    );
  },
});
