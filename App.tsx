import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { useEffect } from 'react';
import { supabase } from './lib/supabaseClient';

function App() {
  return (
    <CartProvider>
      <AuthCheck />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;

function AuthCheck() {
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const { id, email } = session.user;

        const { data: existingUser, error: fetchError } = await supabase
          .from('users')
          .select('id')
          .eq('id', id)
          .single();

        if (!existingUser && !fetchError) {
          const { error: insertError } = await supabase
            .from('users')
            .insert([{ id, email }]);

          if (insertError) {
            console.error('Failed to insert Google user:', insertError.message);
          }
        }
      }
    listener?.subscription.unsubscribe();
      }
    )
  }, []);
  return null;
}
