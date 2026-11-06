import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Alert } from 'react-native';

type Dish = { id: number; name: string; desc: string; price: number; course: 'Starter' | 'Main Course' | 'Dessert' | 'Drinks'; image: string; };

const INITIAL_MENU: Dish[] = [
  { id: 1, name: 'Beef Burger', desc: 'Beef patty, cheddar, lettuce, tomato', price: 119, course: 'Main Course', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 2, name: 'Chicken Burger', desc: 'Grilled chicken, mayo, lettuce', price: 109, course: 'Main Course', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400' },
  { id: 3, name: 'Pizza', desc: 'Cheese, tomato, pepperoni', price: 135, course: 'Main Course', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
  { id: 4, name: 'Chicken Wings', desc: 'Spicy wings with sauce', price: 65, course: 'Starter', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400' },
  { id: 5, name: 'Greek Salad', desc: 'Feta, olives, cucumber', price: 75, course: 'Starter', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
  { id: 6, name: 'Key Lime Pie', desc: 'Sweet lime pie', price: 65, course: 'Dessert', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400' },
  { id: 7, name: 'Chocolate Cake', desc: 'Rich chocolate cake', price: 70, course: 'Dessert', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
  { id: 8, name: 'Lemon Cake', desc: 'Soft lemon cake', price: 60, course: 'Dessert', image: 'https://images.unsplash.com/photo-1519340241574-2cec6d8ef0c9?w=400' },
  { id: 9, name: 'Watermelon Shake', desc: 'Fresh watermelon shake', price: 55, course: 'Drinks', image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400' },
  { id: 10, name: 'Four Season Shake', desc: 'Mixed fruit shake', price: 65, course: 'Drinks', image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=400' },
  { id: 11, name: 'Orange Shake', desc: 'Creamy orange shake', price: 60, course: 'Drinks', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400' },
  { id: 12, name: 'Orange Juice (fresh)', desc: 'Freshly squeezed orange', price: 40, course: 'Drinks', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400' },
  { id: 13, name: 'Mango Shake', desc: 'Sweet mango shake', price: 60, course: 'Drinks', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299b36b?w=400' },
  { id: 14, name: 'Mango Juice (fresh)', desc: 'Fresh mango juice', price: 40, course: 'Drinks', image: 'https://images.unsplash.com/photo-1600271772470-bd221b8b1e1c?w=400' },
  { id: 15, name: 'Banana Shake', desc: 'Creamy banana shake', price: 60, course: 'Drinks', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400' },
  { id: 16, name: 'Water (bottled)', desc: 'Still bottled water', price: 35, course: 'Drinks', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400' },
  { id: 17, name: 'Pineapple Shake', desc: 'Fresh pineapple shake', price: 60, course: 'Drinks', image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400' },
  { id: 18, name: 'Coca Cola', desc: 'Chilled classic coke, 330ml can', price: 30, course: 'Drinks', image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400' },
  { id: 19, name: 'Sprite', desc: 'Chilled Sprite', price: 30, course: 'Drinks', image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400' },
  { id: 20, name: 'Espresso', desc: 'Hot espresso', price: 70, course: 'Drinks', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400' },
  { id: 21, name: 'Caffe Latte', desc: 'Hot latte', price: 70, course: 'Drinks', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400' },
  { id: 22, name: 'Cappuccino', desc: 'Hot cappuccino', price: 75, course: 'Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
  { id: 23, name: 'Black Tea', desc: 'Hot black tea', price: 55, course: 'Drinks', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400' },
  { id: 24, name: 'Green Tea', desc: 'Hot green tea', price: 65, course: 'Drinks', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400' },
  { id: 25, name: 'Fresh Ice Tea', desc: 'Refreshing iced tea with lemon', price: 55, course: 'Drinks', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
  { id: 26, name: 'Lemon Squash', desc: 'Fresh lime juice with soda water', price: 45, course: 'Drinks', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400' },
  { id: 27, name: 'Shirley Temple', desc: 'Sprite with grenadine', price: 65, course: 'Drinks', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400' },
  { id: 28, name: 'Cinnamon Shake', desc: 'Creamy cinnamon shake', price: 60, course: 'Drinks', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400' },
];

export default function App() {
  const [menu, setMenu] = useState<Dish[]>(INITIAL_MENU);
  const [tab, setTab] = useState('home');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  // Chef form
  const [dishName, setDishName] = useState('');
  const [dishDesc, setDishDesc] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishCourse, setDishCourse] = useState<'Starter' | 'Main Course' | 'Dessert' | 'Drinks'>('Main Course');
  const [dishImage, setDishImage] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // NEW 1: Chef Search + Filter
  const [chefSearch, setChefSearch] = useState('');
  const [chefFilter, setChefFilter] = useState('All');

  // NEW 2: Success / Error Message Banner
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState<'success' | 'error' | ''>('');
  const showMsg = (text: string, type: 'success' | 'error') => {
    setMsg(text); setMsgType(type);
    setTimeout(() => { setMsg(''); setMsgType(''); }, 4000);
  };

  // Checkout
  const [showCheckout, setShowCheckout] = useState(false);
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custAddress, setCustAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState('Delivery');
  const [payment, setPayment] = useState('Cash');
  const [orderDone, setOrderDone] = useState(false);

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menu.find(m => m.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const addToCart = (id: number) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeFromCart = (id: number) => setCart(prev => {
    const next = { ...prev };
    if (next[id] > 1) next[id] -= 1; else delete next[id];
    return next;
  });

  // NEW 3: VALIDATION for Name + Price
  const saveDish = () => {
    // --- NAME VALIDATION ---
    if (!dishName.trim()) { showMsg('❌ Error: Dish name is required. Please enter a name.', 'error'); return; }
    if (dishName.trim().length < 3) { showMsg('❌ Error: Dish name must be at least 3 letters, e.g. Pizza.', 'error'); return; }
    if (!/^[a-zA-Z0-9 ()\-&]+$/.test(dishName.trim())) { showMsg('❌ Error: Name can only have letters, numbers and spaces.', 'error'); return; }
    // --- PRICE VALIDATION ---
    if (!dishPrice.trim()) { showMsg('❌ Error: Price is required. Please enter a price.', 'error'); return; }
    if (isNaN(Number(dishPrice))) { showMsg('❌ Error: Price must be a number, e.g. 119 not "one nineteen".', 'error'); return; }
    const price = Number(dishPrice);
    if (price <= 0) { showMsg('❌ Error: Price must be more than R0.', 'error'); return; }
    if (price > 1000) { showMsg('❌ Error: Price is too high. Max is R1000.', 'error'); return; }

    const imageToUse = dishImage.trim() !== '' ? dishImage.trim() : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
    if (editingId !== null) {
      setMenu(prev => prev.map(m => m.id === editingId ? { ...m, name: dishName.trim(), desc: dishDesc, price, course: dishCourse, image: imageToUse } : m));
      showMsg(`✅ Success: "${dishName.trim()}" was updated!`, 'success');
    } else {
      setMenu(prev => [...prev, { id: Date.now(), name: dishName.trim(), desc: dishDesc, price, course: dishCourse, image: imageToUse }]);
      showMsg(`✅ Success: "${dishName.trim()}" was added to the menu!`, 'success');
    }
    setDishName(''); setDishDesc(''); setDishPrice(''); setDishImage(''); setEditingId(null); setDishCourse('Main Course');
  };

  const editDish = (item: Dish) => {
    setEditingId(item.id); setDishName(item.name); setDishDesc(item.desc);
    setDishPrice(String(item.price)); setDishCourse(item.course); setDishImage(item.image);
    setTab('chef');
    showMsg(`✏️ Editing "${item.name}" - change and press Update Dish.`, 'success');
  };

  const deleteDish = (item: Dish) => {
    const doDelete = () => {
      setMenu(prev => prev.filter(m => m.id !== item.id));
      setCart(prev => { const n = { ...prev }; delete n[item.id]; return n; });
      if (editingId === item.id) { setEditingId(null); setDishName(''); setDishDesc(''); setDishPrice(''); setDishImage(''); }
      showMsg(`✅ Success: "${item.name}" was deleted.`, 'success');
    };
    if (typeof window !== 'undefined' && window.confirm) {
      if (window.confirm(`Delete ${item.name}? Are you sure?`)) doDelete();
      else showMsg('ℹ️ Delete cancelled.', 'error');
      return;
    }
    Alert.alert('Delete Dish?', `Delete ${item.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'DELETE', style: 'destructive', onPress: doDelete }
    ]);
  };

  const filtered = menu.filter(item => {
    const matchFilter = filter === 'All' || item.course === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // NEW 1: Filtered list for Chef screen only
  const chefFiltered = menu.filter(item => {
    const matchCourse = chefFilter === 'All' || item.course === chefFilter;
    const matchSearch = item.name.toLowerCase().includes(chefSearch.toLowerCase());
    return matchCourse && matchSearch;
  });

  const avg = menu.length > 0 ? menu.reduce((a, b) => a + b.price, 0) / menu.length : 0;
  const mostExp = menu.length > 0 ? menu.reduce((a, b) => b.price > a.price ? b : a) : null;
  const cheapest = menu.length > 0 ? menu.reduce((a, b) => b.price < a.price ? b : a) : null;

  const renderDishRow = (item: Dish, showChefButtons: boolean) => (
    <View key={item.id} style={s.item}>
      <Image source={{ uri: item.image }} style={s.foodImage} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={s.name}>{item.name}</Text>
        <Text style={s.desc}>{item.course} - {item.desc}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 4 }}>R{item.price.toFixed(2)}</Text>
        {!showChefButtons && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={s.qtyBtn}><Text>-</Text></TouchableOpacity>
            <Text style={{ marginHorizontal: 10 }}>{cart[item.id] || 0}</Text>
            <TouchableOpacity onPress={() => addToCart(item.id)} style={s.qtyBtn}><Text>+</Text></TouchableOpacity>
          </View>
        )}
      </View>
      {showChefButtons && (
        <View>
          <TouchableOpacity style={[s.mini, { backgroundColor: '#ffcc00' }]} onPress={() => editDish(item)}><Text>Edit</Text></TouchableOpacity>
          <TouchableOpacity style={[s.mini, { backgroundColor: '#ff4444', marginTop: 6 }]} onPress={() => deleteDish(item)}><Text style={{ color: 'white' }}>Delete</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={s.phoneOuter}>
    <View style={s.phoneInner}>
      <View style={s.header}>
        <Text style={s.headerTitle}>GOOD EATS</Text>
        <Text style={s.headerSub}>Christoffel's Restaurant • 011 342 6371</Text>
        <Text style={s.headerSub}>Soweto • Uber Eats & Mr D Available</Text>
      </View>

      <ScrollView style={{ padding: 12 }}>
        {showCheckout ? (
          <View style={s.card}>
            <Text style={s.title}>🧾 Checkout</Text>
            {orderDone ? (
              <View style={{ alignItems: 'center', padding: 20 }}>
                <Text style={{ fontSize: 60 }}>🎉</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Thank You, {custName}!</Text>
                <Text style={{ textAlign: 'center', marginTop: 8, color: '#666' }}>
                  Your order of R{total.toFixed(2)} has been received.{'\n'}
                  {deliveryType === 'Delivery' ? `We will deliver to:\n${custAddress}` : 'Please come collect at GOOD EATS, Soweto'}
                  {'\n'}We will call you on {custPhone}
                </Text>
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Payment: {payment} • {deliveryType}</Text>
                <TouchableOpacity style={[s.addBtn, { marginTop: 20, width: '100%' }]} onPress={() => { setShowCheckout(false); setCart({}); setCustName(''); setCustPhone(''); setCustAddress(''); }}>
                  <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Back to Menu</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Your Order: R{total.toFixed(2)} • {cartCount} items</Text>
                <Text>Full Name *</Text>
                <TextInput style={s.input} placeholder="e.g. Thabo Mokoena" value={custName} onChangeText={setCustName} />
                <Text>Phone Number *</Text>
                <TextInput style={s.input} placeholder="e.g. 071 123 4567" keyboardType="phone-pad" value={custPhone} onChangeText={setCustPhone} />
                <Text>Delivery or Collection?</Text>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <TouchableOpacity onPress={() => setDeliveryType('Delivery')} style={[s.filterBtn, deliveryType === 'Delivery' && { backgroundColor: '#C1272D' }]}><Text style={{ color: deliveryType === 'Delivery' ? 'white' : 'black' }}>🛵 Delivery</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => setDeliveryType('Collection')} style={[s.filterBtn, deliveryType === 'Collection' && { backgroundColor: '#C1272D' }]}><Text style={{ color: deliveryType === 'Collection' ? 'white' : 'black' }}>🏃 Collection</Text></TouchableOpacity>
                </View>
                {deliveryType === 'Delivery' && (
                  <View>
                    <Text>Delivery Address *</Text>
                    <TextInput style={s.input} placeholder="e.g. 123 Vilakazi Street, Soweto" value={custAddress} onChangeText={setCustAddress} />
                  </View>
                )}
                <Text>Payment Method</Text>
                <View style={{ flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap' }}>
                  {['Cash', 'Card', 'EFT'].map(p => (
                    <TouchableOpacity key={p} onPress={() => setPayment(p)} style={[s.filterBtn, payment === p && { backgroundColor: '#C1272D' }]}><Text style={{ color: payment === p ? 'white' : 'black' }}>{p === 'Cash' ? '💵 Cash' : p === 'Card' ? '💳 Card' : '🏦 EFT'}</Text></TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity style={s.addBtn} onPress={() => {
                  if (!custName.trim()) { Alert.alert('Missing', 'Please enter your name'); return; }
                  if (!custPhone.trim()) { Alert.alert('Missing', 'Please enter your phone number'); return; }
                  if (deliveryType === 'Delivery' && !custAddress.trim()) { Alert.alert('Missing', 'Please enter delivery address'); return; }
                  setOrderDone(true);
                }}>
                  <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Place Order - R{total.toFixed(2)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowCheckout(false)}><Text style={{ textAlign: 'center', color: '#C1272D', marginTop: 6 }}>Cancel - Back to Menu</Text></TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View>
            {tab === 'home' && (
              <View>
                <Text style={s.title}>What are we craving today?</Text>
                <TextInput style={s.input} placeholder="Search... e.g. Burger" value={search} onChangeText={setSearch} />
                <Text style={s.section}>Browse Categories</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {['Main Course', 'Starter', 'Dessert', 'Drinks'].map(c => (
                    <TouchableOpacity key={c} style={s.catCard} onPress={() => { setFilter(c); setTab('menu'); }}>
                      <Text style={{ fontSize: 28 }}>{c === 'Main Course' ? '🍔' : c === 'Starter' ? '🥗' : c === 'Dessert' ? '🍰' : '🥤'}</Text>
                      <Text>{c}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text style={s.section}>Popular Today</Text>
                {menu.slice(0, 3).map(item => renderDishRow(item, false))}
              </View>
            )}

            {tab === 'menu' && (
              <View>
                <Text style={s.title}>Full Menu</Text>
                <TextInput style={s.input} placeholder="Search..." value={search} onChangeText={setSearch} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                  {['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'].map(f => (
                    <TouchableOpacity key={f} onPress={() => setFilter(f)} style={[s.filterBtn, filter === f && { backgroundColor: '#C1272D' }]}>
                      <Text style={{ color: filter === f ? 'white' : 'black' }}>{f}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {filtered.map(item => renderDishRow(item, false))}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: 'white', padding: 12, borderRadius: 12, alignItems: 'center' }}>
                  <Text>Your Order: R{total.toFixed(2)}{'\n'}{total === 0 ? 'No items yet' : `${cartCount} items in cart`}</Text>
                  <TouchableOpacity style={s.checkout} onPress={() => { if (total === 0) { Alert.alert('Empty', 'Add something first'); return; } setShowCheckout(true); setOrderDone(false); }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Checkout</Text></TouchableOpacity>
                </View>
              </View>
            )}

            {tab === 'drinks' && (
              <View>
                <Text style={s.title}>Drinks</Text>
                {menu.filter(i => i.course === 'Drinks').map(item => renderDishRow(item, false))}
              </View>
            )}

            {tab === 'chef' && (
              <View>
                <Text style={s.title}>👨‍🍳 Chef - Add / Edit / Delete</Text>

                {/* SUCCESS / ERROR MESSAGE BOX */}
                {msg !== '' && (
                  <View style={[s.msgBox, msgType === 'success' ? { backgroundColor: '#D4EDDA', borderColor: '#2E7D32' } : { backgroundColor: '#F8D7DA', borderColor: '#C1272D' }]}>
                    <Text style={{ color: msgType === 'success' ? '#155724' : '#721C24', fontWeight: 'bold' }}>{msg}</Text>
                  </View>
                )}

                <TextInput style={s.input} placeholder="Dish name e.g. Beef Burger *" value={dishName} onChangeText={setDishName} />
                <TextInput style={s.input} placeholder="Description" value={dishDesc} onChangeText={setDishDesc} />
                <TextInput style={s.input} placeholder="Price: e.g. 119 *" keyboardType="numeric" value={dishPrice} onChangeText={setDishPrice} />
                <TextInput style={s.input} placeholder="Picture link (optional)" value={dishImage} onChangeText={setDishImage} />
                {dishImage !== '' && <Image source={{ uri: dishImage }} style={{ width: '100%', height: 140, borderRadius: 12, marginBottom: 10 }} />}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {(['Starter', 'Main Course', 'Dessert', 'Drinks'] as const).map(c => (
                    <TouchableOpacity key={c} onPress={() => setDishCourse(c)} style={[s.filterBtn, dishCourse === c && { backgroundColor: '#C1272D' }]}><Text style={{ color: dishCourse === c ? 'white' : 'black' }}>{c}</Text></TouchableOpacity>
                  ))}
                </View>
                <TouchableOpacity style={s.addBtn} onPress={saveDish}><Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{editingId !== null ? 'Update Dish' : 'Add New Dish'}</Text></TouchableOpacity>
                {editingId !== null && <TouchableOpacity style={{ marginBottom: 12 }} onPress={() => { setEditingId(null); setDishName(''); setDishDesc(''); setDishPrice(''); setDishImage(''); showMsg('ℹ️ Editing cancelled.', 'error'); }}><Text style={{ textAlign: 'center', color: '#C1272D' }}>Cancel Editing</Text></TouchableOpacity>}

                {/* CHEF SEARCH + FILTER */}
                <Text style={s.section}>🔍 Search & Filter Dishes</Text>
                <TextInput style={s.input} placeholder="Search in Chef... e.g. Burger" value={chefSearch} onChangeText={setChefSearch} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                  {['All', 'Starter', 'Main Course', 'Dessert', 'Drinks'].map(f => (
                    <TouchableOpacity key={f} onPress={() => setChefFilter(f)} style={[s.filterBtn, chefFilter === f && { backgroundColor: '#C1272D' }]}>
                      <Text style={{ color: chefFilter === f ? 'white' : 'black' }}>{f}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={s.section}>All Dishes ({chefFiltered.length}) - Tap Edit or Delete</Text>
                {chefFiltered.length === 0 && <Text style={{ color: '#666', textAlign: 'center', marginVertical: 10 }}>No dishes found. Try another search.</Text>}
                {chefFiltered.map(item => renderDishRow(item, true))}
              </View>
            )}

            {tab === 'stats' && (
              <View style={s.card}>
                <Text style={s.section}>📊 Menu Statistics</Text>
                <Text style={{ color: '#666', marginBottom: 14 }}>Christoffel's Restaurant • GOOD EATS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                  <View style={[s.statBox, { backgroundColor: '#C1272D' }]}><Text style={s.statNum}>{menu.length}</Text><Text style={s.statLabel}>Total Items</Text></View>
                  <View style={[s.statBox, { backgroundColor: '#FF8A00' }]}><Text style={s.statNum}>R{avg.toFixed(2)}</Text><Text style={s.statLabel}>Average Price</Text></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
                  <View style={[s.statBox, { backgroundColor: '#2E7D32' }]}><Text style={s.statNum}>{menu.filter(i => i.course === 'Drinks').length}</Text><Text style={s.statLabel}>Drinks</Text></View>
                  <View style={[s.statBox, { backgroundColor: '#1565C0' }]}><Text style={s.statNum}>R{total.toFixed(2)}</Text><Text style={s.statLabel}>Order Total</Text></View>
                </View>
                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Breakdown by Course</Text>
                <Text>🍔 Main Course: {menu.filter(i => i.course === 'Main Course').length} items</Text>
                <Text>🥗 Starter: {menu.filter(i => i.course === 'Starter').length} items</Text>
                <Text>🍰 Dessert: {menu.filter(i => i.course === 'Dessert').length} items</Text>
                <Text>🥤 Drinks: {menu.filter(i => i.course === 'Drinks').length} items</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 12 }}>Price Insights</Text>
                {mostExp && <Text>💰 Most Expensive: {mostExp.name} - R{mostExp.price}</Text>}
                {cheapest && <Text>💸 Cheapest: {cheapest.name} - R{cheapest.price}</Text>}
                <Text>📦 Total Menu Value: R{menu.reduce((a, b) => a + b.price, 0).toFixed(2)}</Text>
              </View>
            )}
          </View>
        )}
        <View style={{ height: 90 }} />
      </ScrollView>

      <View style={s.bottomNav}>
        {['home', 'menu', 'drinks', 'chef', 'stats'].map(t => (
          <TouchableOpacity key={t} style={s.navBtn} onPress={() => { setShowCheckout(false); setTab(t); }}>
            <Text style={tab === t && !showCheckout ? s.navActive : s.navTxt}>{t === 'home' ? '🏠 Home' : t === 'menu' ? '☰ Menu' : t === 'drinks' ? '🥤 Drinks' : t === 'chef' ? '👨‍🍳 Chef' : '📊 Stats'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </View>
  );
}

const s = StyleSheet.create({
  phoneOuter: { flex: 1, backgroundColor: '#111111', alignItems: 'center' },
  phoneInner: { flex: 1, width: '100%', maxWidth: 430, backgroundColor: '#FFF5F5' },
  header: { backgroundColor: '#C1272D', paddingTop: 45, paddingBottom: 16, alignItems: 'center' },
  headerTitle: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  headerSub: { color: 'white', fontSize: 12 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  section: { fontSize: 17, fontWeight: 'bold', marginVertical: 10 },
  input: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: '#EEE' },
  card: { backgroundColor: 'white', borderRadius: 16, padding: 14 },
  item: { backgroundColor: 'white', borderRadius: 14, padding: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  foodImage: { width: 70, height: 70, borderRadius: 35 },
  name: { fontWeight: 'bold', fontSize: 15 },
  desc: { color: '#666', fontSize: 12 },
  qtyBtn: { backgroundColor: '#EEE', width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  mini: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, alignItems: 'center' },
  filterBtn: { backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, marginRight: 6, marginBottom: 6, borderWidth: 1, borderColor: '#EEE' },
  catCard: { width: '48%', backgroundColor: 'white', borderRadius: 14, padding: 16, alignItems: 'center', marginBottom: 10 },
  addBtn: { backgroundColor: '#C1272D', padding: 14, borderRadius: 12, marginVertical: 10 },
  checkout: { backgroundColor: '#2E7D32', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, justifyContent: 'center' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', backgroundColor: 'white', paddingVertical: 12, borderTopWidth: 1, borderColor: '#EEE', justifyContent: 'space-around' },
  navBtn: { alignItems: 'center' },
  navTxt: { fontSize: 12 },
  navActive: { fontSize: 12, fontWeight: 'bold', color: '#C1272D' },
  statBox: { width: '48%', padding: 14, borderRadius: 14 },
  statNum: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  statLabel: { color: 'white' },
  msgBox: { padding: 12, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
});