import { defineComponent, reactive, toRaw } from "vue";
import { Form, Input, Button } from "ant-design-vue";
import { useForm } from "@ant-design-vue/use";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const userRef = reactive({
      username: "",
      password: "",
    });
    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: "Please input username",
        },
      ],
      password: [
        {
          required: true,
          message: "Please input password",
        },
      ],
    });
    const { validate, validateInfos } = useForm(userRef, rulesRef);
    const store = useStore();
    const router = useRouter();
    const renderForm = () => (
      <Form model={userRef} label-col={{ span: 6 }} label-col={{ span: 14 }}>
        <Form.Item label="username" {...validateInfos.username}>
          <Input value={userRef.username} onInput={(e) => handleUserRef("username", e)} placeholder="username" />
        </Form.Item>
        <Form.Item label="password" {...validateInfos.password}>
          <Input value={userRef.password} onInput={(e) => handleUserRef("password", e)} placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleLogin} block type="primary">
            Log In
          </Button>
        </Form.Item>
      </Form>
    );
    const handleUserRef = (key, e) => {
      userRef[key] = e.target.value;
    };
    const handleLogin = () => {
      validate().then(() => {
        store.dispatch("user/login", toRaw(userRef)).then(() => {
          router.push("/main");
        });
      });
    };

    return () => (
      <div class="w-full h-full flex justify-center items-center">
        <div class="w-9/12 h-2/4">
          <p class="text-3xl font-bold mb-4">Welcome</p>
          {renderForm()}
        </div>
      </div>
    );
  },
});
