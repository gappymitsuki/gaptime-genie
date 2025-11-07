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

#### 1. Supabase Edge Functions

The backend uses Supabase Edge Functions. To deploy:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref zmlvjflnawgqyrbuddoz

# Deploy Edge Functions
supabase functions deploy fetch-page
supabase functions deploy generate-thing-from-url
```

#### 2. Environment Variables

Set the required environment variables in your Supabase project:

```bash
# Set Anthropic API Key for AI content generation
supabase secrets set ANTHROPIC_API_KEY=your_api_key_here
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
