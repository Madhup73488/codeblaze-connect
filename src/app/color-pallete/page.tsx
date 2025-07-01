'use client';
import React from 'react';

const ColorPalletePage = () => {
  return (
    <div className="gradient-bg min-h-screen text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-electric-400 to-amber-glow-400 bg-clip-text text-transparent mb-4">
            Sophisticated Dark Palette
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A carefully crafted color system designed for premium LMS dashboards with depth, sophistication, and visual hierarchy
          </p>
        </div>

        {/* Foundation Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-electric-300">🌌 Foundation & Surface</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="color-box bg-obsidian-950 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-obsidian-950 rounded-lg mb-4 border border-obsidian-800"></div>
              <h3 className="font-semibold text-white">Deep Foundation</h3>
              <p className="text-slate-400 text-sm mb-2">Primary Background</p>
              <code className="text-amber-glow-400 text-xs">#080b14</code>
              <p className="text-slate-500 text-xs mt-1">obsidian-950</p>
            </div>
            
            <div className="color-box bg-obsidian-900 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-obsidian-900 rounded-lg mb-4 border border-obsidian-700"></div>
              <h3 className="font-semibold text-white">Surface Layer</h3>
              <p className="text-slate-400 text-sm mb-2">Cards & Containers</p>
              <code className="text-amber-glow-400 text-xs">#0f172a</code>
              <p className="text-slate-500 text-xs mt-1">obsidian-900</p>
            </div>
            
            <div className="color-box bg-midnight-950 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-midnight-950 rounded-lg mb-4 border border-midnight-800"></div>
              <h3 className="font-semibold text-white">Rich Surface</h3>
              <p className="text-slate-400 text-sm mb-2">Elevated Elements</p>
              <code className="text-amber-glow-400 text-xs">#0d0a1f</code>
              <p className="text-slate-500 text-xs mt-1">midnight-950</p>
            </div>
            
            <div className="color-box bg-obsidian-800 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-obsidian-800 rounded-lg mb-4 border border-obsidian-600"></div>
              <h3 className="font-semibold text-white">Interactive Surface</h3>
              <p className="text-slate-400 text-sm mb-2">Hover & Focus States</p>
              <code className="text-amber-glow-400 text-xs">#1e293b</code>
              <p className="text-slate-500 text-xs mt-1">obsidian-800</p>
            </div>
          </div>
        </section>

        {/* Primary Brand Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-electric-300">✨ Primary & Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="color-box bg-midnight-600 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-midnight-500 to-midnight-600 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Royal Purple</h3>
              <p className="text-slate-400 text-sm mb-2">Primary Brand Color</p>
              <code className="text-amber-glow-400 text-xs">#4f46e5</code>
              <p className="text-slate-500 text-xs mt-1">midnight-600</p>
            </div>
            
            <div className="color-box bg-electric-500 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-electric-400 to-electric-500 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Electric Cyan</h3>
              <p className="text-slate-400 text-sm mb-2">Secondary Brand</p>
              <code className="text-amber-glow-400 text-xs">#06b6d4</code>
              <p className="text-slate-500 text-xs mt-1">electric-500</p>
            </div>
            
            <div className="color-box bg-amber-glow-500 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-amber-glow-400 to-amber-glow-500 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Golden Accent</h3>
              <p className="text-slate-400 text-sm mb-2">Highlights & CTAs</p>
              <code className="text-amber-glow-400 text-xs">#f59e0b</code>
              <p className="text-slate-500 text-xs mt-1">amber-glow-500</p>
            </div>
          </div>
        </section>

        {/* Status Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-electric-300">🎯 Status & Feedback Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="color-box bg-emerald-bright-600 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-emerald-bright-500 to-emerald-bright-600 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Success</h3>
              <p className="text-slate-400 text-sm mb-2">Completion & Success</p>
              <code className="text-amber-glow-400 text-xs">#059669</code>
              <p className="text-slate-500 text-xs mt-1">emerald-bright-600</p>
            </div>
            
            <div className="color-box bg-amber-glow-600 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-amber-glow-500 to-amber-glow-600 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Warning</h3>
              <p className="text-slate-400 text-sm mb-2">Caution & Alerts</p>
              <code className="text-amber-glow-400 text-xs">#d97706</code>
              <p className="text-slate-500 text-xs mt-1">amber-glow-600</p>
            </div>
            
            <div className="color-box bg-coral-500 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-coral-400 to-coral-500 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Error</h3>
              <p className="text-slate-400 text-sm mb-2">Errors & Danger</p>
              <code className="text-amber-glow-400 text-xs">#ef4444</code>
              <p className="text-slate-500 text-xs mt-1">coral-500</p>
            </div>
            
            <div className="color-box bg-electric-400 p-6 rounded-2xl glass-effect">
              <div className="w-full h-16 bg-gradient-to-r from-electric-300 to-electric-400 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-white">Info</h3>
              <p className="text-slate-400 text-sm mb-2">Information & Tips</p>
              <code className="text-amber-glow-400 text-xs">#22d3ee</code>
              <p className="text-slate-500 text-xs mt-1">electric-400</p>
            </div>
          </div>
        </section>

        {/* Typography Scale */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-electric-300">📝 Typography Hierarchy</h2>
          <div className="bg-obsidian-900 rounded-2xl p-8 glass-effect">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white text-4xl font-bold">Primary Heading</span>
                <code className="text-amber-glow-400 text-sm">text-white</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-200 text-2xl font-semibold">Secondary Heading</span>
                <code className="text-amber-glow-400 text-sm">text-slate-200</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-lg">Body Text Primary</span>
                <code className="text-amber-glow-400 text-sm">text-slate-300</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-base">Body Text Secondary</span>
                <code className="text-amber-glow-400 text-sm">text-slate-400</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-sm">Muted Text</span>
                <code className="text-amber-glow-400 text-sm">text-slate-500</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-xs">Disabled Text</span>
                <code className="text-amber-glow-400 text-sm">text-slate-600</code>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Components */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-electric-300">🧩 Component Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Button Examples */}
            <div className="bg-obsidian-900 rounded-2xl p-6 glass-effect">
              <h3 className="text-xl font-semibold mb-4 text-white">Button Variations</h3>
              <div className="space-y-4">
                <button className="bg-gradient-to-r from-midnight-500 to-midnight-600 hover:from-midnight-400 hover:to-midnight-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Primary Button
                </button>
                <button className="bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Secondary Button
                </button>
                <button className="bg-gradient-to-r from-amber-glow-500 to-amber-glow-600 hover:from-amber-glow-400 hover:to-amber-glow-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Accent Button
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-obsidian-900 rounded-2xl p-6 glass-effect">
              <h3 className="text-xl font-semibold mb-4 text-white">Progress Indicators</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Course Progress</span>
                    <span className="text-electric-400">75%</span>
                  </div>
                  <div className="w-full bg-obsidian-800 rounded-full h-3">
                    <div className="bg-gradient-to-r from-electric-500 to-midnight-500 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Assignment Score</span>
                    <span className="text-emerald-bright-400">92%</span>
                  </div>
                  <div className="w-full bg-obsidian-800 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-bright-500 to-emerald-bright-400 h-3 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorPalletePage;
