import HeaderBar from "@/components/HeaderBar";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("HeaderBar.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should have a custom title and match snapshot", () => {
    const wrapper = mount(HeaderBar, {
      localVue,
      vuetify,
      propsData: { title: "Father" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit an event when v-btn is clicked", () => {
    const wrapper = mount(HeaderBar, {
      localVue,
      vuetify,
      propsData: { title: "Father" },
    });

    const event = jest.fn();
    const button = wrapper.find(".v-btn");

    wrapper.vm.$on("action-btn:clicked", event);

    expect(event).toHaveBeenCalledTimes(0);

    button.trigger("click");

    expect(event).toHaveBeenCalledTimes(1);
  });
});
