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
create table user_roles (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  role text not null default 'user',
  created_at timestamp default now()
);

create table premium_accounts (
  id bigint generated always as identity primary key,
  user_id uuid not null,
  active boolean default false,
  expires_at timestamp,
  created_at timestamp default now()
);

create table status_views (
  id bigint generated always as identity primary key,
  status_id bigint not null,
  user_id uuid,
  viewed_at timestamp default now()
);

create table status_replies (
  id bigint generated always as identity primary key,
  status_id bigint not null,
  user_id uuid,
  message text,
  created_at timestamp default now()
);
