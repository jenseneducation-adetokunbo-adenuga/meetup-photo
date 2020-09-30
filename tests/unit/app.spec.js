import { createLocalVue, mount } from "@vue/test-utils";
import App from "@/App.vue";
import Vuetify from "vuetify";

describe("App", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("should have a custom title and match snapshot", () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
      propsData: { title: "Foobar" },
    });

    const title = wrapper.find(".v-card__title > span");

    expect(title.text()).toBe("Foobar");
  });

  // Inspect the raw component options
  it("has data", () => {
    expect(typeof App.data).toBe("function");
  });
});

describe("Mounted App", () => {
  const wrapper = mount(App);

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("<p>How are you?</p>");
  });
});
