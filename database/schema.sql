create table profiles (
  id uuid primary key,
  username text,
  email text unique,
  avatar text,
  premium boolean default false,
  role text default 'user',
  created_at timestamp default now()
);

create table status (
  id bigint generated always as identity primary key,
  title text,
  caption text,
  image_url text,
  video_url text,
  created_at timestamp default now()
);

create table conversations (
  id bigint generated always as identity primary key,
  user_id uuid,
  title text,
  created_at timestamp default now()
);

create table messages (
  id bigint generated always as identity primary key,
  conversation_id bigint,
  sender text,
  message text,
  created_at timestamp default now()
);

create table notifications (
  id bigint generated always as identity primary key,
  title text,
  body text,
  created_at timestamp default now()
);

create table feedback (
  id bigint generated always as identity primary key,
  user_id uuid,
  message text,
  created_at timestamp default now()
);
