 1. CHANGELOG.md :
CHANGELOG - GOOD EATS

All changes from Part 2 to Final Submission.

 [Final Version] - 04 November 2026 

 Fixed - Chef Functions (Main Fix)
- FIXED: Chef can now ADD a new dish - it appears immediately in Menu / Drinks / Home.
- FIXED: Chef can now EDIT a dish - press Edit, change name / description / price / course, press Update Dish, it updates everywhere. Shows message "Your menu has been updated!!"
- FIXED: Chef can now DELETE a dish - press Delete, confirms "Delete?", item is removed from menu.
- In Part 2, Chef Add / Edit / Delete buttons did nothing or did not save. Now they all work.

 Fixed - Missing Menu Items
- FIXED: Part 2 was missing many items.
- Final has full items:** 3 Main, 2 Starter, 3 Dessert, 2 Drinks.
- Added back missing drinks: Banana Shake, Pineapple Shake, Watermelon Shake, Four Season Shake, Orange Juice, Mango Juice, Water, Sprite, Espresso, Caffe Latte, Cappuccino, Black Tea, Green Tea, Lemon Squash, Shirley Temple.
- Added back missing food: Chicken Burger, Chicken Wings, Greek Salad, Key Lime Pie, Lemon Cake.

 Fixed - Pictures / Emojis
- FIXED: Part 2 had missing / broken pictures for some items.
- Final: Every item now has a coloured circle icon + emoji.
    - Example: Orange Shake = orange circle +  Mango Shake = yellow circl , Coca Cola = brown circle , Coffee = brown circle , Burger = light circle 
- No item is left without a picture now.

 Changed - Design: Website Look → Real Mobile App Look
- CHANGED: Part 2 looked stretched wide like a website on laptop
- Final: App is now forced into a phone frame on web:
    - Width locked to 430px (real phone width)
    - Max height 932px, rounded corners, shadow
    - Pink background outside phone (#FFE8E8)
    - On real phone in Expo Go, it is full-screen with no pink border.
- CHANGED: Menu cards redesigned to match Drinks mockup: circle icon left, name + description middle, price top-right + - / + buttons bottom-right, white card, rounded 16px.
- CHANGED: Filter chips redesigned: white chips, active chip is red.
- CHANGED: Checkout bar redesigned: white bar with green Checkout button, like mockup.
- CHANGED: Bottom navigation now fixed at bottom with Home / Menu / Drinks / Chef / Stats, active tab is red.

### Added
- ADDED: Search now works on Home, Menu and Drinks.
- Clear button to reset search + filter.
- Live cart: "Your Order: R..." + list of items (e.g. "1x Beef Burger, 2x Coca Cola").
- Validation messages: "Please enter a dish name", "Please enter a valid price", "Empty Order - Please add an item first!"
- Success messages: "Menu item added successfully!", "Thank you! Your order was placed!"
- Delete confirmation: "Delete [name]?" with Cancel / Delete.
- Stats screen: Total Items, Average Price, Drinks count, Order Total.
- Home screen: "What are we craving today?" + Browse Categories (Main / Starter / Dessert / Drinks) + Popular Today.

 [Part 2] - Previous Version - HAD BUGS 

 What Was Working In Part 2
- App was running on Expo 
- Home, Menu, Drinks, Chef, Stats tabs existed
- Search and filter partially did not worked
- Add to cart with + / - worked for some items

 What Was Broken In Part 2
- Chef could NOT add a new item - it did not save / did not appear.
- Chef could NOT edit an item - changes did not update menu.
- Chef could NOT delete an item - item stayed in menu.
- Many menu items were missing - menu was incomplete.
- Some pictures / icons were missing - blank / broken images.
- Design did not match with the thing sold

 Final version is working perfectly - all Chef functions, all items, all pictures, and phone design fixed.