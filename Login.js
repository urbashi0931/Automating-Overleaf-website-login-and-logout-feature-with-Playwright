const { chromium } = require('playwright'); // Import Playwright

async function run() {
    const browser = await chromium.launch({ headless: false }); // Set headless to false to see the browser
    const page = await browser.newPage();

    // Go to the login page (change to your web management URL)
    await page.goto('https://www.overleaf.com/login');

    // Fill in the username and password (replace with actual credentials)
    await page.fill('input[name="email"]', 'xxxxxxxxxx.com');
    await page.fill('input[name="password"]', 'xxxx');


    // Submit the login form
    await page.click('button[type="submit"]');

    // Wait for navigation (this is after logging in)
    await page.waitForNavigation();

    // Check if server status is displayed (replace with the correct selector)
   // const serverStatus = await page.textContent('.server-status'); // Adjust the selector
    //console.log('Server Status:', serverStatus);

   
    // Find the "Pricing" tab (adjust the selector based on the page structure)
    await page.click('a:has-text("Pricing")'); 
    await page.waitForTimeout(5000);


    // Wait for the pricing page or content to load
    //await page.waitForSelector('.pricing-container');

    await page.click('button.dropdown-toggle:has-text("Account")');
    await page.waitForTimeout(5000);


    await page.getByRole('menuitem', { name: 'Log Out' }).click();
    await page.waitForTimeout(5000);

    await expect(page.getByText('Forgot password?')).toBeVisible();



    await browser.close();
}

run();
