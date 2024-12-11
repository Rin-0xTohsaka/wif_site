import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left side - Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/wif_logo.jpg"
              alt="WIF Dog"
              className="w-64 md:w-96"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Just a Dog WIF a Hat
            </h1>

            {/* Contract Address */}
            <div className="p-4 mb-6 rounded-lg bg-background-secondary">
              <p className="mb-2 text-sm text-gray-400">Contract Address</p>
              <div className="flex items-center justify-between">
                <code className="text-sm break-all">{contractAddress}</code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 ml-2 transition-colors rounded-md hover:bg-background"
                >
                  {copied ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Supply Information */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-sm text-gray-400">Total Supply</p>
                <p className="text-xl font-semibold">998.84M WIF</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Circulating Supply</p>
                <p className="text-xl font-semibold">998.84M WIF</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <a
                href="https://jup.ag/swap/SOL-$WIF_EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Buy WIF
              </a>
              <a
                href="https://t.me/dogwifcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;