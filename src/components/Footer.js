import React from 'react';
import { Twitter, Discord } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/dogwifcoin',
      icon: Twitter,
    },
  ];

  return (
    <footer className="py-8 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-400">
            Built with ❤️ by the WIF Community
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors rounded-full hover:bg-background-secondary"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;