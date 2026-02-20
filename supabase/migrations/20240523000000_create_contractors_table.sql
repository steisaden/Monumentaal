-- Create contractors table
create table if not exists public.contractors (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  company_name text,
  subscription_tier text default 'basic',
  is_verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.contractors enable row level security;

-- Policy: Anyone can read verified contractors (for directory listing)
create policy "Public verified contractors are viewable by everyone."
  on public.contractors for select
  using ( is_verified = true );

-- Policy: Only service role can insert/update (via Edge Function)
-- No public insert/update needed for now as it's handled by Stripe webhook.
