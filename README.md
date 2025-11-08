# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d6b14c7b-0804-4e6d-b5ab-ba5adddc1683

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d6b14c7b-0804-4e6d-b5ab-ba5adddc1683) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d6b14c7b-0804-4e6d-b5ab-ba5adddc1683) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Things to Do Generator

This project includes a "Things to Do Generator" that creates structured activity data from any URL (restaurants, beauty salons, activities, etc.).

### Features

- **AI-Powered Content Generation**: Uses Anthropic Claude API to create compelling, verb-led titles and descriptions
- **Multi-Domain Support**: Works with various Japanese experience sites (HotPepper Beauty, Tabelog, Gurunavi, etc.)
- **Smart Extraction**: Automatically extracts prices, duration, location data from HTML
- **Structured Output**: Returns data in a consistent `ThingToDo` format with JSON and human-readable views

### Setup

#### 1. Get Anthropic API Key

First, get your Anthropic API key:
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Create an API key
3. Copy the key (you'll need it in the next step)

#### 2. Deploy with One Command

We've created an automated deployment script:

```bash
# Set your Anthropic API Key
export ANTHROPIC_API_KEY=your_actual_api_key_here

# Run the deployment script
./scripts/deploy-functions.sh
```

The script will:
- ✅ Check if you're logged in to Supabase (will prompt if not)
- ✅ Link to the project
- ✅ Set your API key as a secret
- ✅ Deploy both Edge Functions

#### 3. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Login to Supabase (opens browser for auth)
npx supabase login

# Link to your project
npx supabase link --project-ref zmlvjflnawgqyrbuddoz

# Set Anthropic API Key
npx supabase secrets set ANTHROPIC_API_KEY=your_api_key_here

# Deploy Edge Functions
npx supabase functions deploy fetch-page --no-verify-jwt
npx supabase functions deploy generate-thing-from-url --no-verify-jwt
```

You'll also need to set these in Supabase Dashboard under Settings > Edge Functions:
- `ANTHROPIC_API_KEY`: Your Anthropic Claude API key ([Get one here](https://console.anthropic.com/))

#### 3. Testing

Visit the root page (`/`) to use the Things to Do Generator:
1. Enter any experience URL (restaurant, beauty salon, activity, etc.)
2. Click "Generate Things to Do"
3. View the AI-generated structured data with attractive title and description

### API Endpoint

**POST** `/functions/v1/generate-thing-from-url`

Request body:
```json
{
  "url": "https://example.com/restaurant-or-activity"
}
```

Response:
```json
{
  "title": "Enjoy Authentic Ramen Making",
  "shortTitle": "Ramen Making",
  "description": "Create your own bowl of authentic Tokyo-style ramen...",
  "durationMinutes": 60,
  "minPriceJpy": 3500,
  "maxPriceJpy": 4200,
  "category": "activity",
  "tags": ["cultural", "hands-on", "foodie"],
  "location": {
    "name": "Ramen Workshop Tokyo",
    "address": "...",
    "lat": 35.6812,
    "lng": 139.7671
  },
  "languageHints": ["English", "Japanese"],
  "sourceUrl": "https://example.com/...",
  "notes": "Reservation recommended"
}
```
