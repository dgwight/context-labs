// tests/FiltersSidebar.spec.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import FiltersSidebar from "../components/FiltersSidebar.vue";

describe("AppHeader", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(FiltersSidebar, {
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
  });
});
