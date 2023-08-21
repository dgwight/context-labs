// tests/ClientList.spec.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ClientList from "../components/ClientList.vue";

describe("ClientList", () => {
  it("renders client list", () => {
    const wrapper = mount(ClientList,  {
      props: {
        clients: [{
          "name": "Laura Fallon",
          "title": "Chief Financial Officer",
          "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Tanned",
          "quote": "That costs too much $."
        }]
      }
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find('v-list-item-subtitle').text()).toContain("Chief Financial Officer")

    // Checking emission
    wrapper.find('v-list-item').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('selectClient')
  });
});
