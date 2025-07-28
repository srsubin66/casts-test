#!/bin/bash

echo "🚀 Manual GitHub Pages Deployment"
echo "================================"

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist/public" ]; then
    echo "❌ Build failed - dist/public directory not found"
    exit 1
fi

echo "✅ Build successful!"

# Create gh-pages branch
echo "🌿 Creating gh-pages branch..."
git checkout --orphan gh-pages

# Remove all files except dist/public
echo "🧹 Cleaning up..."
git rm -rf .

# Copy built files to root
echo "📁 Copying built files..."
cp -r dist/public/* .
rm -rf dist

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit
echo "💾 Committing deployment..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "🚀 Pushing to gh-pages branch..."
git push origin gh-pages --force

# Go back to main branch
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://srsubin66.github.io/casts-test/"
echo "⏰ It may take a few minutes for changes to appear." 