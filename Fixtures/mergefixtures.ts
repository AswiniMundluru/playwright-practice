import { mergeTests } from "@playwright/test";
import { test as loginpagetests} from "./loginpageFixture"
import { test as inventorypagetests} from "./inventorypageFixture"

export const test = mergeTests(loginpagetests , inventorypagetests);
export { expect} from "@playwright/test"


