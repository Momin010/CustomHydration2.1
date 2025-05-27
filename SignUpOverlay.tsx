// src/components/SignUpOverlay.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AnimatePresence, motion } from 'framer-motion';

interface SignUpOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignUpOverlay: React.FC<SignUpOverlayProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setEmail('');
      setPassword('');
      setMessage('');
      setSuccess(false);
    }
  }, [isVisible]);

  const handleSignUp = async () => {
    setLoading(true);
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data?.user) {
      const insertRes = await supabase.from('users').insert([
        {
          id: data.user.id,
          email: data.user.email,
        },
      ]);
      if (insertRes.error) {
        console.error('Insert failed:', insertRes.error.message);
      }

      setSuccess(true);
      setMessage('Success! Check your inbox to confirm your email.');
      setTimeout(onClose, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {success ? (
              <div className="text-center">
                <div className="text-green-600 text-4xl mb-4">🎉</div>
                <h2 className="text-xl font-bold mb-2">You're Signed Up!</h2>
                <p className="text-gray-600">{message}</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <input
                  className="border rounded px-3 py-2 w-full mb-2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border rounded px-3 py-2 w-full mb-4"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                  onClick={handleSignUp}
                  disabled={loading}
                >
                  {loading ? 'Signing up...' : 'Sign Up'}
                </button>
                {message && <p className="text-sm mt-3 text-red-600">{message}</p>}
              </>
            )}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpOverlay;
