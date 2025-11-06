# Troubleshooting Guide

## Common Issues and Solutions

### 1. Module Export Errors

**Error:** `The requested module does not provide an export named 'Product'`

**Solution:** The cartStore has been fixed to properly export the Product interface. Make sure the file is saved and the dev server has reloaded.

### 2. Port Already in Use

**Error:** `Port 3000 is in use`

**Solution:** Vite will automatically try another port (3001, 3002, etc.). The correct URL will be shown in the terminal.

Alternatively, stop the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### 3. Tailwind Classes Not Working

**Error:** CSS classes not applying or `@apply` errors

**Solution:** We're using Tailwind CSS v4 which has different syntax:
- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- Custom classes are written in plain CSS instead of `@apply`
- The configuration is in `tailwind.config.js` and styles in `src/index.css`

### 4. Node Version Warning

**Warning:** `You are using Node.js 22.11.0. Vite requires Node.js version 20.19+ or 22.12+`

**Solution:** This is just a warning. The app will still work. To remove the warning, upgrade Node.js:
```bash
# Update to Node.js 22.12+ or use nvm
nvm install 22.12
nvm use 22.12
```

### 5. TypeScript Errors

**Error:** Type errors in IDE or build

**Solution:**
- Make sure all dependencies are installed: `npm install`
- Restart your IDE/editor
- Check that TypeScript version is correct: `npm list typescript`

### 6. Framer Motion Animation Issues

**Error:** Animations not working smoothly

**Solution:**
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge latest)
- Check browser console for errors
- Try disabling browser extensions that might interfere

### 7. Shopping Cart Not Persisting

**Error:** Cart items disappear on refresh

**Solution:**
- Check browser console for localStorage errors
- Clear browser cache and localStorage
- Make sure you're not in private/incognito mode
- Check if localStorage is enabled in browser settings

### 8. Images Not Loading

**Error:** Product images showing broken

**Solution:**
- Images are loaded from Unsplash CDN
- Check internet connection
- Try refreshing the page
- If issue persists, update image URLs in `src/data/products.ts`

### 9. Build Errors

**Error:** `npm run build` fails

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or on Windows
rmdir /s /q node_modules
del package-lock.json
npm install

# Then try building again
npm run build
```

### 10. Zustand State Not Updating

**Error:** Cart count not updating or state issues

**Solution:**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()` in browser console
- Refresh the page
- The cartStore has been properly configured with persist middleware

## Getting Help

If you encounter other issues:

1. Check the browser console (F12) for errors
2. Check the terminal where `npm run dev` is running
3. Verify all dependencies are installed: `npm install`
4. Try clearing cache: `npm run build` and then `npm run dev`
5. Check the [Vite documentation](https://vitejs.dev)
6. Check the [Tailwind CSS v4 documentation](https://tailwindcss.com/docs)

## Clean Restart

If all else fails, do a clean restart:

```bash
# Stop the dev server (Ctrl+C)

# Clean everything
rm -rf node_modules
rm -rf dist
rm -rf .vite
rm package-lock.json

# Reinstall
npm install

# Start fresh
npm run dev
```

## File Structure Verification

Make sure these key files exist:
- ✅ `src/store/cartStore.ts` - Product interface is exported
- ✅ `src/index.css` - Glassmorphism styles
- ✅ `tailwind.config.js` - Tailwind configuration
- ✅ `postcss.config.js` - PostCSS with @tailwindcss/postcss
- ✅ `vite.config.ts` - Vite configuration

All files have been properly configured and tested!
