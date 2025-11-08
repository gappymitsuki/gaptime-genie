#!/bin/bash

# Supabase Edge Functions Deployment Script

set -e

echo "🚀 Starting Supabase Edge Functions Deployment..."

# Check if Anthropic API Key is set
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "⚠️  ANTHROPIC_API_KEY environment variable not set"
  echo "Please set it with: export ANTHROPIC_API_KEY=your_key_here"
  exit 1
fi

# Check if logged in
echo "📝 Checking Supabase login status..."
npx supabase projects list > /dev/null 2>&1 || {
  echo "❌ Not logged in to Supabase"
  echo "Please run: npx supabase login"
  exit 1
}

# Link to project
echo "🔗 Linking to project..."
npx supabase link --project-ref zmlvjflnawgqyrbuddoz

# Set secrets
echo "🔐 Setting API keys..."
npx supabase secrets set ANTHROPIC_API_KEY="$ANTHROPIC_API_KEY"

# Deploy fetch-page function
echo "📦 Deploying fetch-page function..."
npx supabase functions deploy fetch-page --no-verify-jwt

# Deploy generate-thing-from-url function
echo "📦 Deploying generate-thing-from-url function..."
npx supabase functions deploy generate-thing-from-url --no-verify-jwt

echo "✅ Deployment complete!"
echo ""
echo "🎉 Your Edge Functions are now live!"
echo "Test it at: https://zmlvjflnawgqyrbuddoz.supabase.co/functions/v1/generate-thing-from-url"
