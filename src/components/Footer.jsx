import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/a.png';

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 2000 // Ensure the modal is on top
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px', // Increased width
        width: '90%', // Full width with a max width
        margin: '0 auto',
        boxSizing: 'border-box' // Ensure padding is included in width
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#2d3748'
        }}>{title}</h2>
        <div style={{ marginBottom: '16px' }}>{content}</div>
        <button 
          onClick={onClose} 
          style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  const openPrivacyPolicy = () => setPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setPrivacyPolicyOpen(false);

  const openTerms = () => setTermsOpen(true);
  const closeTerms = () => setTermsOpen(false);

  return (
    <footer style={{
      position: 'relative',
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      backdropFilter: 'blur(10px)',
      padding: '16px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        padding: '0 16px',
        margin: '0 auto',
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '24px' 
        }}>
          <div style={{ marginBottom: '24px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', justifyContent: 'center' }}>
              <img src={logo} style={{ height: '80px', marginRight: '12px' }} alt="Your Custom Logo" />
              <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Art Halimi
              </span>
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            justifyItems: 'center',
            textAlign: 'center'
          }}>
            <div>
              <h2 style={{
                marginBottom: '24px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#e5e7eb',
                textTransform: 'uppercase'
              }}>Follow Me</h2>
              <ul style={{ fontSize: '0.875rem', fontWeight: '500', padding: '0', listStyle: 'none' }}>
                <li style={{ marginBottom: '16px' }}>
                  <a href="https://github.com/ArtHalimi7" style={{ color: '#9ed0e6', textDecoration: 'none' }}>
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/users/926445891538264094" style={{ color: '#9ed0e6', textDecoration: 'none' }}>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 style={{
                marginBottom: '24px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#e5e7eb',
                textTransform: 'uppercase'
              }}>Legal</h2>
              <ul style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: '500', padding: '0', listStyle: 'none' }}>
                <li style={{ marginBottom: '16px' }}>
                  <button 
                    onClick={openPrivacyPolicy} 
                    style={{ color: '#9ed0e6', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={openTerms} 
                    style={{ color: '#9ed0e6', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ margin: '24px 0', borderColor: '#4b5563' }} />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.875rem' }}>
            © 2024 <a href="#" style={{ color: '#9ed0e6', textDecoration: 'none' }}>Art Halimi™</a>. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', marginTop: '16px' }}>
            <a href="https://www.linkedin.com/in/art-halimi-1653a828a/" style={{ color: '#9ed0e6', textDecoration: 'none' }}>
              <svg style={{ width: '24px', height: '24px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.46C0 23.208.792 24 1.77 24h20.46c.978 0 1.77-.792 1.77-1.77V1.77C24 .792 23.208 0 22.23 0zM7.22 20.455H4.76V9.1h2.46v11.355zm-1.23-12.84c-.796 0-1.44-.657-1.44-1.44s.644-1.44 1.44-1.44c.796 0 1.44.657 1.44 1.44s-.644 1.44-1.44 1.44zm14.09 12.84h-2.46v-5.607c0-1.336-.025-3.056-1.865-3.056-1.865 0-2.153 1.46-2.153 2.968v5.695h-2.46V9.1h2.36v1.546h.034c.328-.62 1.132-1.282 2.328-1.282 2.486 0 2.945 1.64 2.945 3.775v6.317z"/>
              </svg>
              <span style={{ visibility: 'hidden' }}>LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyPolicyOpen}
        onClose={closePrivacyPolicy}
        title="Privacy Policy"
        content={
          <>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>Information Collection</h2>
            <p className='text-black'>
              We collect information from you when you visit our website, register for an account, or interact with our services. This may include personal details, usage data, and preferences.
            </p>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>Use of Information</h2>
            <p className='text-black'>
              The information we collect is used to provide and improve our services, communicate with you, and ensure the security of our website.
            </p>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>Data Security</h2>
            <p className='text-black'>
              We implement security measures to protect your information from unauthorized access, alteration, or destruction.
            </p>
          </>
        }
      />

      {/* Terms and Conditions Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={closeTerms}
        title="Terms and Conditions"
        content={
          <>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>Terms of Use</h2>
            <p className='text-black'>
              By using our website, you agree to comply with our terms and conditions. You are responsible for your actions and interactions with our services.
            </p>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>User Responsibilities</h2>
            <p className='text-black'>
              Users are expected to use our services responsibly and not engage in any activities that may harm our website or other users.
            </p>
            <h2 style={{ fontSize: '1.25rem', color: 'black', fontWeight: '600', marginBottom: '8px' }}>Changes to Terms</h2>
            <p className='text-black'>
              We may update our terms and conditions from time to time. Changes will be communicated through our website.
            </p>
          </>
        }
      />
    </footer>
  );
};

export default Footer;