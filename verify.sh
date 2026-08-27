#!/bin/bash
# Magic Skin Whitening Website - Verification Script
# This script verifies all required files are in place

echo "🔍 MAGIC SKIN WHITENING WEBSITE - VERIFICATION REPORT"
echo "=========================================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check function
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 (MISSING)"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "${RED}✗${NC} $1/ (MISSING)"
        return 1
    fi
}

count=0
missing=0

echo "📁 DIRECTORIES"
echo "==============="
check_dir "src" && ((count++)) || ((missing++))
check_dir "src/components" && ((count++)) || ((missing++))
check_dir "src/pages" && ((count++)) || ((missing++))
check_dir "src/data" && ((count++)) || ((missing++))
check_dir "public" && ((count++)) || ((missing++))
check_dir "public/images" && ((count++)) || ((missing++))
check_dir "public/images/Products" && ((count++)) || ((missing++))
check_dir "public/images/gallery" && ((count++)) || ((missing++))
check_dir "public/images/logo" && ((count++)) || ((missing++))

echo ""
echo "🔧 CONFIGURATION FILES"
echo "======================="
check_file "package.json" && ((count++)) || ((missing++))
check_file "vite.config.js" && ((count++)) || ((missing++))
check_file "tailwind.config.js" && ((count++)) || ((missing++))
check_file "postcss.config.js" && ((count++)) || ((missing++))
check_file ".eslintrc.json" && ((count++)) || ((missing++))
check_file ".gitignore" && ((count++)) || ((missing++))
check_file "index.html" && ((count++)) || ((missing++))

echo ""
echo "💻 SOURCE CODE - CORE"
echo "====================="
check_file "src/main.jsx" && ((count++)) || ((missing++))
check_file "src/App.jsx" && ((count++)) || ((missing++))
check_file "src/index.css" && ((count++)) || ((missing++))

echo ""
echo "🧩 COMPONENTS (7)"
echo "=================="
check_file "src/components/Navbar.jsx" && ((count++)) || ((missing++))
check_file "src/components/Footer.jsx" && ((count++)) || ((missing++))
check_file "src/components/ProductCard.jsx" && ((count++)) || ((missing++))
check_file "src/components/ProductGrid.jsx" && ((count++)) || ((missing++))
check_file "src/components/ProductFilter.jsx" && ((count++)) || ((missing++))
check_file "src/components/WhatsAppButton.jsx" && ((count++)) || ((missing++))
check_file "src/components/SectionHeading.jsx" && ((count++)) || ((missing++))
check_file "src/components/GalleryGrid.jsx" && ((count++)) || ((missing++))

echo ""
echo "📄 PAGES (7)"
echo "============"
check_file "src/pages/Home.jsx" && ((count++)) || ((missing++))
check_file "src/pages/Products.jsx" && ((count++)) || ((missing++))
check_file "src/pages/ProductDetail.jsx" && ((count++)) || ((missing++))
check_file "src/pages/About.jsx" && ((count++)) || ((missing++))
check_file "src/pages/Gallery.jsx" && ((count++)) || ((missing++))
check_file "src/pages/Contact.jsx" && ((count++)) || ((missing++))
check_file "src/pages/NotFound.jsx" && ((count++)) || ((missing++))

echo ""
echo "📊 DATA FILES (EXISTING)"
echo "========================"
check_file "src/data/business.js" && ((count++)) || ((missing++))
check_file "src/data/products.js" && ((count++)) || ((missing++))

echo ""
echo "📚 DOCUMENTATION (5)"
echo "===================="
check_file "README.md" && ((count++)) || ((missing++))
check_file "SETUP.md" && ((count++)) || ((missing++))
check_file "PROJECT_DELIVERY.md" && ((count++)) || ((missing++))
check_file "DESIGN_GUIDE.md" && ((count++)) || ((missing++))
check_file "SUMMARY.md" && ((count++)) || ((missing++))

echo ""
echo "🖼️  IMAGES (EXISTING)"
echo "===================="
echo -e "${YELLOW}Checking product images (22 expected)...${NC}"
product_count=$(ls -1 public/images/Products/*.jpg 2>/dev/null | wc -l)
if [ $product_count -eq 22 ]; then
    echo -e "${GREEN}✓${NC} Found $product_count product images"
    ((count++))
else
    echo -e "${YELLOW}⚠${NC} Found $product_count product images (expected 22)"
fi

echo -e "${YELLOW}Checking gallery images (10 expected)...${NC}"
gallery_count=$(ls -1 public/images/gallery/*.jpg 2>/dev/null | wc -l)
if [ $gallery_count -eq 10 ]; then
    echo -e "${GREEN}✓${NC} Found $gallery_count gallery images"
    ((count++))
else
    echo -e "${YELLOW}⚠${NC} Found $gallery_count gallery images (expected 10)"
fi

echo -e "${YELLOW}Checking logo...${NC}"
if [ -f "public/images/logo/logo.png" ]; then
    echo -e "${GREEN}✓${NC} Logo found (logo.png)"
    ((count++))
else
    echo -e "${RED}✗${NC} Logo not found"
    ((missing++))
fi

echo ""
echo "=========================================================="
echo "📊 VERIFICATION SUMMARY"
echo "=========================================================="
echo -e "Files checked: ${GREEN}$count${NC}"
if [ $missing -gt 0 ]; then
    echo -e "Missing files: ${RED}$missing${NC}"
else
    echo -e "Missing files: ${GREEN}0${NC}"
fi

echo ""
if [ $missing -eq 0 ]; then
    echo -e "${GREEN}✅ ALL FILES PRESENT - PROJECT IS COMPLETE!${NC}"
    echo ""
    echo "🚀 NEXT STEPS:"
    echo "1. Install Node.js (if needed): https://nodejs.org"
    echo "2. Run: npm install"
    echo "3. Run: npm run dev"
    echo "4. Website opens at http://localhost:5173"
    echo ""
    echo "📖 Read SETUP.md for detailed instructions"
else
    echo -e "${RED}❌ SOME FILES ARE MISSING!${NC}"
    echo "Please check the errors above."
fi

echo ""
