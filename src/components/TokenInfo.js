import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TokenInfo = () => {
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
    <section className="py-20 bg-background-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Contract Address */}
          <div className="p-6 mb-8 rounded-xl bg-background-secondary/80 backdrop-blur-sm shadow-lg">
            <p className="mb-3 text-2xl font-display text-blue-300">
              contract
              <span className="text-yellow-400"> address</span>
            </p>
            <div className="flex items-center justify-between bg-background/40 rounded-lg p-4">
              <code className="text-sm md:text-base break-all text-gray-300 font-mono">{contractAddress}</code>
              <button
                onClick={copyToClipboard}
                className="p-2 ml-4 transition-colors rounded-md hover:bg-background flex-shrink-0"
              >
                {copied ? (
                  <Check size={24} className="text-green-500" />
                ) : (
                  <Copy size={24} className="text-blue-300" />
                )}
              </button>
            </div>
          </div>

          {/* Supply Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background-secondary/80 backdrop-blur-sm shadow-lg">
              <p className="mb-2 text-2xl font-display text-blue-300">
                total
                <span className="text-yellow-400"> supply</span>
              </p>
              <p className="text-3xl font-display text-gray-300">998.84M WIF</p>
            </div>
            <div className="p-6 rounded-xl bg-background-secondary/80 backdrop-blur-sm shadow-lg">
              <p className="mb-2 text-2xl font-display text-blue-300">
                circulating
                <span className="text-yellow-400"> supply</span>
              </p>
              <p className="text-3xl font-display text-gray-300">998.84M WIF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo; 