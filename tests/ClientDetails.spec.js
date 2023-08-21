// tests/ClientDetails.spec.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ClientDetails from "../components/ClientDetails.vue";

describe("ClientDetails", () => {
  it("renders client details", () => {
    const wrapper = mount(ClientDetails,  {
      props: {
        client: {
          "name": "Laura Fallon",
          "title": "Chief Financial Officer",
          "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Tanned",
          "quote": "That costs too much $."
        }
      }
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find('.client-title').text()).toContain("Chief Financial Officer")
  });
});
