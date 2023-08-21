// tests/FiltersSidebar.spec.ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AppHeader from "../components/FiltersSidebar.vue";

describe("AppHeader", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(FiltersSidebar);
    expect(wrapper.vm).toBeTruthy();
  });
});
