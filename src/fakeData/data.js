// Basic Dropdown's Expected Data Structure
export const basicOptions = [
  {
    value: 'option 1',
    label: "Women's Bags -> Professional",
    color: '#FF69B4',
  },
  {
    value: 'option 2',
    label: "Women's Bags -> Clutch & Evenings",
    color: '#FF69B4',
  },
  {
    value: 'option 3',
    label: "Women's Bags -> Wallet Style",
    color: '#FF69B4',
  },
  { value: 'option 4', label: "Women's Bags -> Crossbody", color: '#FF69B4' },
  { value: 'option 5', label: "Women's Bags -> Bodypacks", color: '#FF69B4' },
];

// Grouped Dropdown's Expected Data Structure
export const allOptions = [
  {
    label: "Women's Bags",
    value: '',
    options: [
      {
        value: 'option 1a',
        label: "Women's Bags -> Professional",
        color: '#FF69B4',
      },
      {
        value: 'option 2a',
        label: "Women's Bags -> Clutch & Evenings",
        color: '#FF69B4',
      },
      {
        value: 'option 3a',
        label: "Women's Bags -> Wallet Style",
        color: '#FF69B4',
      },
      {
        value: 'option 4a',
        label: "Women's Bags -> Crossbody",
        color: '#FF69B4',
      },
      {
        value: 'option 5a',
        label: "Women's Bags -> Bodypacks",
        color: '#FF69B4',
      },
    ],
  },
  {
    label: "Men's Bag",
    value: '',
    options: [
      {
        value: 'option 1b',
        label: "Men's Bags -> Professional",
        color: '#FF69B4',
      },
      {
        value: 'option 2b',
        label: "Men's Bags -> Clutch & Evenings",
        color: '#FF69B4',
      },
      {
        value: 'option 2c',
        label: "Men's Bags -> Wallet Style",
        color: '#FF69B4',
      },
    ],
  },
];

export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
  { value: 'pink', label: 'Pink', color: '#FF69B4' },
];
