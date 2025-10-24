// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
     'page1',
    //'pahla-topic-id', // <--- APNI NAYI FILE KI ID YAHAN JODEIN
    // ...
    {
      type: 'category',
      label: 'Vision-and-The-Challenge',
      items: [
        // Purana path tha: 'Vision-&-The-Challeng/chapter-1',
        'Vision-and-The-Challenge/Chapter-1', // <--- Folder aur ID ka naya, saaf naam
        'Vision-and-The-Challenge/Chapter-2', // <--- Folder aur ID ka naya, saaf naam
      ],
    },
     {
      type: 'category',
      label: 'Core Infrastructure - The Sentient Ledger Protocol',
      items: [
        // Purana path tha: 'Vision-&-The-Challeng/chapter-1',
        'Core Infrastructure - The Sentient Ledger Protocol/Chapter-3', // <--- Folder aur ID ka naya, saaf naam
        'Core Infrastructure - The Sentient Ledger Protocol/Chapter-4', // <--- Folder aur ID ka naya, saaf naam
        'Core Infrastructure - The Sentient Ledger Protocol/Chapter-5', // <--- Folder aur ID ka naya, saaf naam         
      ],
    },
    {
      type: 'category',
      label: 'The Quantum Analytics and HFT Engine',
      items: [
        // Purana path tha: 'Vision-&-The-Challeng/chapter-1',
        'The Quantum Analytics and HFT Engine/Chapter-6', // <--- Folder aur ID ka naya, saaf naam
        'The Quantum Analytics and HFT Engine/Chapter-7', // <--- Folder aur ID ka naya, saaf naam
        'The Quantum Analytics and HFT Engine/Chapter-8', // <--- Folder aur ID ka naya, saaf naam  
        'The Quantum Analytics and HFT Engine/Chapter-9', // <--- Folder aur ID ka naya, saaf naam
        'The Quantum Analytics and HFT Engine/Chapter-10', // <--- Folder aur ID ka naya, saaf naam         
      ],
    },
    {
      type: 'category',
      label: 'The METAsol Token and Ecosystem',
      items: [
        // Purana path tha: 'Vision-&-The-Challeng/chapter-1',
        'The METAsol Token and Ecosystem/Chapter-11', // <--- Folder aur ID ka naya, saaf naam
        'The METAsol Token and Ecosystem/Chapter-12', // <--- Folder aur ID ka naya, saaf naam
        'The METAsol Token and Ecosystem/Chapter-13', // <--- Folder aur ID ka naya, saaf naam  
        'The METAsol Token and Ecosystem/Chapter-14', // <--- Folder aur ID ka naya, saaf naam
        'The METAsol Token and Ecosystem/Chapter-15', // <--- Folder aur ID ka naya, saaf naam         
      ],
    },
// doosra category add kare
  ],
};

export default sidebars;
