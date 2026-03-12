
## Test Cases Executed

| Testcase_Id | Test_Case | Test_Step | Test_Data | Expected Result | Actual Result | Status |
|-------------|-----------|-----------|-----------|----------------|---------------|--------|
| SW_001 | Check the application functionality across supported browser | 1.Open Chrome 2.Enter https://www.saucedemo.com | Chrome | Website should open correctly and products displayed | Website opened and products displayed | Pass |
| SW_002 | Check the application functionality across supported browser | 1.Open Firefox 2.Enter https://www.saucedemo.com | Firefox | Website should open correctly and products displayed | Website opened and products displayed | Pass |
| SW_003 | Check the application functionality across supported browser | 1.Open Safari 2.Enter https://www.saucedemo.com | Safari | Website should open correctly and products displayed | Website opened and products displayed | Pass |
| SW_004 | Check login with valid credentials | 1.Open website 2.Enter username 3.Enter password 4.Click login | standard_user / secret_sauce | User should login and navigate to product page | Product page displayed | Pass |
| SW_005 | Check login with empty username | 1.Open website 2.Leave username empty 3.Enter password 4.Click login | Username empty / secret_sauce | Error message should appear | Error message displayed | Pass |
| SW_006 | Check login with empty password | 1.Open website 2.Enter username 3.Leave password empty 4.Click login | standard_user / empty password | Error message should appear | Error message displayed | Pass |
| SW_007 | Check invalid login | 1.Open website 2.Enter invalid username 3.Enter invalid password 4.Click login | wrong / pass | Error message should appear | Error message displayed | Pass |
| SW_008 | Check add products to cart | 1.Login 2.Click Add to Cart | Backpack | Product should be added to cart | Product added successfully | Pass |
| SW_009 | Check checkout process | 1.Login 2.Add product 3.Go to checkout 4.Enter details 5.Complete order | First name: Amitha Last name: MK Zip:12345 | Order should complete successfully | Order completed | Pass |
| SW_010 | Check product page validation | 1.Open website 2.Login with valid credentials | standard_user / secret_sauce | Product list should appear | Product list displayed | Pass |
| SW_011 | Check checkout with empty cart | 1.Login 2.Go to cart 3.Click checkout 4.Enter details 5.Click finish | standard_user / secret_sauce | System should show error message | Checkout completed without products | Fail |
| SW_012 | Check cart badge validation | 1.Login 2.Add two products | Two products | Cart badge should show correct number | Badge shows correct count | Pass |
| SW_013 | Check access product page without login | 1.Open inventory page directly | Direct URL | User should redirect to login page | Redirected to login page | Pass |
| SW_014 | Check missing first name validation | 1.Login 2.Add product 3.Go to checkout 4.Leave first name empty | Last name: MK Zip:12345 | Error message should appear | Error message displayed | Pass |
| SW_015 | Check missing last name validation | 1.Login 2.Add product 3.Go to checkout 4.Leave last name empty | First name: Amitha Zip:12345 | Error message should appear | Error message displayed | Pass |
| SW_016 | Check missing postal code validation | 1.Login 2.Add product 3.Go to checkout 4.Leave zip empty | First name: Amitha Last name: MK | Error message should appear | Error message displayed | Pass |
| SW_017 | Check submit empty checkout form | 1.Login 2.Add product 3.Go to checkout 4.Leave all fields empty | All fields empty | Error message should appear | Error message displayed | Pass |
