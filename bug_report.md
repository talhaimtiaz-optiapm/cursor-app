# Bug Report - bug-test-v2 Branch

## Summary
This report documents the bugs and issues found in the bug-test-v2 branch of the RobinRelay marketing website project.

## Critical Bugs

### 1. Missing Key Prop in React List
**File:** `src/components/Hero.jsx`
**Line:** 61
**Issue:** Missing `key` prop for element in iterator when mapping over features array
**Impact:** React will show warnings and potential rendering issues
**Fix:** Add `key={idx}` to the `div` element in the map function

### 2. Missing Alt Attribute on Image
**File:** `src/components/Hero.jsx`
**Line:** 55
**Issue:** `<img>` element is missing the `alt` attribute
**Impact:** Accessibility violation, screen readers cannot describe the image
**Fix:** Add `alt="RobinRelay Demo"` to the image element

### 3. GSAP ScrollTrigger Typo
**File:** `src/components/Hero.jsx`
**Line:** 14
**Issue:** Typo in ScrollTrigger configuration: `"toop 80%"` should be `"top 80%"`
**Impact:** ScrollTrigger animation will not work correctly
**Fix:** Change `"toop 80%"` to `"top 80%"`

### 4. Missing useEffect Dependency Array
**File:** `src/components/Hero.jsx`
**Line:** 22
**Issue:** `useEffect` hook is missing dependency array, causing it to run on every render
**Impact:** Performance issues and unnecessary re-creation of GSAP animations
**Fix:** Add empty dependency array `[]` to the useEffect

### 5. CSS Class Name Typo
**File:** `src/components/Hero.jsx`
**Line:** 40
**Issue:** Typo in Tailwind CSS class: `text-gary-900` should be `text-gray-900`
**Impact:** Text color will not be applied correctly
**Fix:** Change `text-gary-900` to `text-gray-900`

### 6. Unused Component Import
**File:** `src/App.jsx`
**Line:** 4
**Issue:** `Demo` component is imported but never used in the JSX
**Impact:** Unused code, increases bundle size
**Fix:** Either remove the import or add `<Demo />` to the component tree

### 7. Missing Component in Navbar
**File:** `src/components/Navbar.jsx`
**Line:** 2
**Issue:** Missing React import statement
**Impact:** Component may not render properly in all environments
**Fix:** Add `import React from "react";` at the top of the file

## Linting Issues

### Tailwind CSS Class Order Warnings
Multiple files have Tailwind CSS class ordering issues. While these don't break functionality, they violate the project's linting rules.

### Custom CSS Classes Not Recognized
The linter reports many custom CSS classes (like `hero-pill`, `contact-form`, etc.) as "not Tailwind CSS classes". These are intentionally used for GSAP animations but cause linting warnings.

### SVG Background URL Issues
The linter incorrectly parses inline SVG background URLs as separate CSS classes. This is a configuration issue with the Tailwind CSS linter plugin.

## Recommendations

### High Priority Fixes
1. Fix the missing `key` prop in Hero component
2. Add missing `alt` attribute to images
3. Fix the GSAP ScrollTrigger typo
4. Add missing useEffect dependency array
5. Fix the CSS class name typo

### Medium Priority Fixes
1. Remove unused Demo component import or use it
2. Add missing React import in Navbar
3. Configure linter to ignore custom animation classes

### Low Priority Fixes
1. Fix Tailwind CSS class ordering issues
2. Configure linter to properly handle SVG background URLs

## Files Affected
- `src/App.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- All component files (for linting issues)

## Testing Recommendations
1. Test ScrollTrigger animations work correctly after fixing the typo
2. Verify accessibility with screen readers after adding alt attributes
3. Run performance tests to ensure useEffect dependency fix improves performance
4. Test component rendering after fixes