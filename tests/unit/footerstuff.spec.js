import FooterStuff from "@/components/FooterStuff";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("FooterStuff.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should have a custom title and match snapshot", () => {
    const wrapper = mount(FooterStuff, {
      localVue,
      vuetify,
      propsData: { title: "Foobar" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
