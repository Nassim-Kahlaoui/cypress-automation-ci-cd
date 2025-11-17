const { execSync } = require("child_process");

const tests = [
  // 📂 authentication
  "cypress/e2e/authentication/TC01_register_user.cy.js",
  "cypress/e2e/authentication/TC02_login_user_correct.cy.js",
  "cypress/e2e/authentication/TC03_login_user_incorrect.cy.js",
  "cypress/e2e/authentication/TC04_logout_user.cy.js",
  "cypress/e2e/authentication/TC05_register_existing_email.cy.js",

  // 📂 products
  "cypress/e2e/products/TC06_contact_us.cy.js",
  "cypress/e2e/products/TC07_test_cases_page.cy.js",
  "cypress/e2e/products/TC08_all_products_and_details.cy.js",
  "cypress/e2e/products/TC09_search_product.cy.js",
  "cypress/e2e/products/TC10_verify_subscription_home.cy.js",

  // 📂 cart
  "cypress/e2e/cart/TC11_verify_subscription_cart.cy.js",
  "cypress/e2e/cart/TC12_add_products_cart.cy.js",
  "cypress/e2e/cart/TC13_verify_cart_after_login.cy.js",

  // 📂 orders
  "cypress/e2e/orders/TC14_place_order_register_checkout.cy.js",
  "cypress/e2e/orders/TC15_register_before_checkout.cy.js",
  "cypress/e2e/orders/TC16_place_order_login_before_checkout.cy.js",
  "cypress/e2e/orders/TC17_remove_products_from_cart.cy.js",

  // 📂 account
  "cypress/e2e/account/TC18_view_category_products.cy.js",
  "cypress/e2e/account/TC19_view_cart_brand_products.cy.js",
  "cypress/e2e/account/TC20_search_products_and_verify_cart.cy.js",
  "cypress/e2e/account/TC21_add_review_product.cy.js",
  "cypress/e2e/account/TC22_add_to_cart_recommended_items.cy.js",
  "cypress/e2e/account/TC23_verify_address_details_review_order.cy.js",

  // 📂 download
  "cypress/e2e/download/TC24_download_invoice.cy.js",
  "cypress/e2e/download/TC25_scroll_up_down.cy.js",
];

(async () => {
  for (const test of tests) {
    console.log(`\n▶▶▶ Running test: ${test}`);
    try {
      execSync(`npx cypress run --spec "${test}"`, { stdio: "inherit" });
    } catch (error) {
      console.error(`⛔ Error in test: ${test}`);
    }

    // Delay de 5 secondes entre chaque test
    console.log("⏳ Waiting 5 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  console.log("\n✅ Tous les tests ont été exécutés (dans l’ordre).\n");
})();
