'use client';

import { FOOTER } from '../constants';

export default function FooterSection() {
  return (
    <footer className="w-full bg-bgMain py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-textGreen font-semibold mb-3">
              {FOOTER.brandName}
            </h3>
            <p className="text-textGreen text-sm font-light leading-relaxed">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Retreats Section */}
          <div>
            <h4 className="text-textGreen font-semibold mb-4 text-sm tracking-wide uppercase">
              {FOOTER.sections.retreats.title}
            </h4>
            <ul className="space-y-2">
              {FOOTER.sections.retreats.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-textGreen text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-textGreen font-semibold mb-4 text-sm tracking-wide uppercase">
              {FOOTER.sections.support.title}
            </h4>
            <ul className="space-y-2">
              {FOOTER.sections.support.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-textGreen text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-textGreen font-semibold mb-4 text-sm tracking-wide uppercase">
              {FOOTER.sections.community.title}
            </h4>
            <ul className="space-y-2">
              {FOOTER.sections.community.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-textGreen text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="border-t border-accent/30 pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 text-sm text-textGreen">
              <span>{FOOTER.social.instagram}</span>
              <span className="hidden md:block">•</span>
              <span>{FOOTER.social.email}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-textGreen text-xs">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
