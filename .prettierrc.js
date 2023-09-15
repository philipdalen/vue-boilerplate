module.exports = {
  ...require('gts/.prettierrc.json'),
  "printWidth": 90,
  "semi": false,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-tailwindcss"],
  "singleQuote": false,
  "bracketSpacing": true,
  "importOrder": ["^components/(.*)$", "^[./]" ],
  "importOrderSeparation": true, 
  "importOrderSortSpecifiers": true 
}
